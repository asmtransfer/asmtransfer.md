(function () {
  'use strict';

  const language = document.documentElement.lang || 'ru';
  const dictionary = Object.assign({}, window.asmDictionary, {
    'Настройки статистики': {
      ru: 'Настройки статистики', ro: 'Setări statistice', en: 'Analytics settings',
      it: 'Impostazioni statistiche', tr: 'İstatistik ayarları'
    }[language],
    'Позвонить ASM Transfer': {
      ru: 'Позвонить ASM Transfer', ro: 'Sună la ASM Transfer', en: 'Call ASM Transfer',
      it: 'Chiama ASM Transfer', tr: "ASM Transfer'i ara"
    }[language]
  });
  // Place names are proper nouns and must never be translated as common words.
  const placeNames = {
    'Резина': 'Rezina', 'Сороки': 'Soroca', 'Страшены': 'Strășeni',
    'Новые Анены': 'Anenii Noi', 'Старый Орхей': 'Orheiul Vechi',
    'Кэлэраши': 'Călărași', 'Парканы': 'Parcani', 'Карагаш': 'Caragaș',
    'Слободзея': 'Slobozia', 'Бендеры': 'Bender', 'Тирасполь': 'Tiraspol',
    'Кишинёв': 'Chișinău', 'Яссы': 'Iași'
  };
  if (language !== 'ru') Object.assign(dictionary, placeNames);
  const fieldLabels = {
    ro: ['Oraș de plecare', 'Oraș de destinație', 'Inversează orașele'],
    en: ['Departure city', 'Destination city', 'Swap cities'],
    it: ['Città di partenza', 'Città di destinazione', 'Inverti le città'],
    tr: ['Kalkış şehri', 'Varış şehri', 'Şehirleri değiştir']
  }[language];
  if (fieldLabels) ['Город отправления', 'Город назначения', 'Поменять города местами']
    .forEach((source, index) => { dictionary[source] = fieldLabels[index]; });
  const hasRussian = /[А-Яа-яЁё]/;
  const rate = 16;
  const currencyNames = {
    ru: 'руб. ПМР', ro: 'ruble PMR', en: 'PMR rubles', it: 'rubli PMR', tr: 'PMR rublesi'
  };
  const prefixes = {ru: 'от ', ro: 'de la ', en: 'from ', it: 'da ', tr: 'başlangıç '};
  const normalise = value => value.replace(/\s+/g, ' ').trim();
  const replacements = Object.entries(dictionary)
    .filter(([source]) => hasRussian.test(source) && source.length > 2)
    .sort((left, right) => right[0].length - left[0].length);

  function dollars(amount) {
    return new Intl.NumberFormat(language, {
      minimumFractionDigits: 2, maximumFractionDigits: 2
    }).format(amount / rate);
  }

  function text(value) {
    const key = normalise(value);
    const price = key.match(/^(от\s+)?(\d+(?:[.,]\d+)?)\s*руб\.?\s*(?:ПМР)?$/i);
    if (price) {
      const amount = Number(price[2].replace(',', '.'));
      return (price[1] ? prefixes[language] : '') + price[2] + ' ' + currencyNames[language] + ' (≈ $' + dollars(amount) + ')';
    }
    if (!hasRussian.test(key) || language === 'ru') return value;
    if (dictionary[key]) return value.replace(key, dictionary[key]);
    let translated = value;
    for (const [source, target] of replacements) {
      if (translated.includes(source)) translated = translated.split(source).join(target);
      if (!hasRussian.test(translated)) break;
    }
    return translated;
  }

  function localPath(href) {
    if (language === 'ru' || href.startsWith('#')) return href;
    let url;
    try { url = new URL(href, location.href); } catch (_) { return href; }
    if (url.origin !== location.origin || /\.[a-z0-9]+$/i.test(url.pathname)) return href;
    if (/^\/(?:ro|en|it|tr)(?:\/|$)/.test(url.pathname)) return href;
    return '/' + language + url.pathname + url.search + url.hash;
  }

  window.asmLocalizeMessage = function (message) {
    return message.split('\n').map(line => text(line)).join('\n');
  };

  function updateElement(element) {
    if (element.closest('script,style,.language-switcher,[translate="no"]')) return;
    for (const attribute of ['alt', 'title', 'placeholder', 'aria-label']) {
      if (!element.hasAttribute(attribute)) continue;
      const original = element.getAttribute(attribute);
      const translated = text(original);
      if (translated !== original) element.setAttribute(attribute, translated);
    }
    if (element.tagName !== 'A' || !element.hasAttribute('href')) return;
    const original = element.getAttribute('href');
    let href = localPath(original);
    if (/^https:\/\/wa\.me\//.test(href) && language !== 'ru') {
      const url = new URL(href);
      const message = url.searchParams.get('text');
      if (message) {
        url.searchParams.set('text', window.asmLocalizeMessage(message));
        href = url.href;
      }
    }
    if (href !== original) element.setAttribute('href', href);
  }

  function update(root) {
    if (root.nodeType === Node.TEXT_NODE) {
      if (!root.parentElement || root.parentElement.closest('script,style,head,.language-switcher,[translate="no"]')) return;
      const translated = text(root.nodeValue);
      if (translated !== root.nodeValue) root.nodeValue = translated;
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    updateElement(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) update(node);
      else updateElement(node);
    }
  }

  function init() {
    update(document.body);
    const observer = new MutationObserver(records => {
      for (const record of records) {
        if (record.type === 'childList') record.addedNodes.forEach(update);
        else if (record.type === 'characterData') update(record.target);
        else updateElement(record.target);
      }
    });
    observer.observe(document.body, {
      subtree: true, childList: true, characterData: true, attributes: true,
      attributeFilter: ['href', 'alt', 'title', 'placeholder', 'aria-label']
    });
    document.addEventListener('click', event => {
      const anchor = event.target.closest && event.target.closest('a[href]');
      if (anchor) updateElement(anchor);
    }, {capture: true});
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true});
  else init();
}());
