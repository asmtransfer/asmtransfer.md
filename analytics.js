/* ASM Transfer: optional analytics, enabled only after a visitor's choice. */
(function () {
  'use strict';
  if (window.asmAnalyticsReady) return;
  window.asmAnalyticsReady = true;
  var measurement = 'G-78RRSQRVHQ';
  var preferenceKey = 'asm-analytics-consent-v1';
  var started = false, allowed = false, panel, settings;
  var canonical = document.querySelector('link[rel="canonical"]');
  var page = canonical ? new URL(canonical.href) : new URL(location.origin + location.pathname);
  var cleanPage = page.origin + page.pathname;
  function savedChoice() {
    try {
      var value = JSON.parse(localStorage.getItem(preferenceKey));
      return value && Date.now() - value.time < 180 * 86400000 ? value.choice : null;
    } catch (_) { return null; }
  }
  function command() { window.dataLayer.push(arguments); }
  function start() {
    allowed = true;
    window['ga-disable-' + measurement] = false;
    if (started) {
      window.gtag('consent', 'update', {analytics_storage: 'granted'});
      return;
    }
    started = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = command;
    command('consent', 'default', {analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'});
    command('consent', 'update', {analytics_storage: 'granted'});
    command('js', new Date());
    var referrer = '';
    try { referrer = new URL(document.referrer).origin + '/'; } catch (_) {}
    var config = {page_location: cleanPage, page_referrer: referrer, allow_google_signals: false, allow_ad_personalization_signals: false, cookie_expires: 180 * 86400};
    // Accept only short campaign slugs; discard arbitrary query strings and fragments.
    var query = new URLSearchParams(location.search);
    [['utm_source','campaign_source'],['utm_medium','campaign_medium'],['utm_campaign','campaign_name']].forEach(function (entry) {
      var value = query.get(entry[0]);
      if (value && /^[a-z0-9_.-]{1,80}$/i.test(value)) config[entry[1]] = value;
    });
    command('config', measurement, config);
    var tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurement;
    document.head.appendChild(tag);
  }
  function stop() {
    allowed = false;
    window['ga-disable-' + measurement] = true;
    if (started) window.gtag('consent', 'update', {analytics_storage: 'denied'});
    document.cookie.split(';').forEach(function (cookie) {
      var name = cookie.split('=')[0].trim();
      if (!/^_ga(?:_|$)/.test(name)) return;
      ['', '; domain=' + location.hostname, '; domain=.' + location.hostname].forEach(function (domain) {
        document.cookie = name + '=; max-age=0; path=/' + domain + '; SameSite=Lax';
      });
    });
  }
  window.asmAnalyticsTrack = function (data) {
    if (!allowed) return;
    // Do not send link URLs, messages, contact numbers or passenger information.
    window.gtag('event', 'contact_click', {
      send_to: measurement,
      contact_method: data.contact_method,
      placement: data.placement,
      page_path: page.pathname,
      page_location: cleanPage,
      transport_type: 'beacon'
    });
  };
  function choose(choice) {
    try { localStorage.setItem(preferenceKey, JSON.stringify({choice: choice, time: Date.now()})); } catch (_) {}
    if (choice === 'accepted') start(); else stop();
    panel.hidden = true;
    settings.hidden = false;
    settings.focus();
  }
  function init() {
    var style = document.createElement('link');
    style.rel = 'stylesheet'; style.href = '/analytics.css?v=20261026';
    document.head.appendChild(style);
    // Keep this small standalone prompt usable on pages without a locale dictionary.
    var locales = {
      ru: ["Статистика сайта", "Разрешите Google Analytics учитывать посещения и нажатия на контакты? Это помогает улучшать сайт. Выбор не влияет на бронирование поездки.", "Подробнее", "Разрешить статистику", "Без статистики", "Настройки статистики"],
      en: ["Site statistics", "Allow Google Analytics to count visits and clicks on contact links? This helps us improve the site. Your choice won’t affect your booking.", "Learn more", "Allow statistics", "No statistics", "Analytics settings"],
      ro: ["Statisticile site-ului", "Permiteți Google Analytics să înregistreze vizitele și clicurile pe linkurile de contact? Acest lucru ne ajută să îmbunătățim site-ul. Alegerea nu vă afectează rezervarea.", "Aflați mai multe", "Permite statistici", "Fără statistici", "Setări statistici"],
      it: ["Statistiche del sito", "Vuoi consentire a Google Analytics di contare le visite e i clic sui link di contatto? Ci aiuta a migliorare il sito. La tua scelta non influisce sulla prenotazione.", "Scopri di più", "Consenti statistiche", "Nessuna statistica", "Impostazioni statistiche"],
      tr: ["Site istatistikleri", "Google Analytics’in ziyaretleri ve iletişim bağlantılarına yapılan tıklamaları saymasına izin verir misiniz? Bu, siteyi iyileştirmemize yardımcı olur. Seçiminiz rezervasyonunuzu etkilemez.", "Daha fazla bilgi", "İstatistiklere izin ver", "İstatistik yok", "İstatistik ayarları"]
    };
    var lang = (document.documentElement.lang || 'ru').toLowerCase().split('-')[0];
    if (!Object.prototype.hasOwnProperty.call(locales, lang)) lang = 'ru';
    var copy = locales[lang];
    var privacy = (lang === 'ru' ? '' : '/' + lang) + '/privacy/';
    panel = document.createElement('section');
    panel.className = 'asm-consent';
    panel.setAttribute('aria-label', copy[0]);
    panel.innerHTML = '<div><strong>' + copy[0] + '</strong><p>' + copy[1] + ' <a href="' +
      privacy + '">' + copy[2] + '</a></p></div><div class="asm-consent-actions"><button type="button" data-choice="accepted">' +
      copy[3] + '</button><button type="button" data-choice="declined">' + copy[4] + '</button></div>';
    panel.querySelectorAll('button').forEach(function (button) {
      button.addEventListener('click', function () { choose(button.dataset.choice); });
    });
    settings = document.createElement('button');
    settings.type = 'button'; settings.className = 'asm-consent-settings'; settings.textContent = copy[5];
    settings.addEventListener('click', function () {
      panel.hidden = false; settings.hidden = true; panel.querySelector('button').focus();
    });
    document.body.appendChild(panel);
    document.body.appendChild(settings);
    var choice = savedChoice();
    if (choice === 'accepted') start(); else stop();
    panel.hidden = choice === 'accepted' || choice === 'declined';
    settings.hidden = !panel.hidden;
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true}); else init();
}());
