/* Contact intent only. No names, telephone numbers, message text or addresses. */
(function () {
  'use strict';
  if (window.asmContactEventsReady) return;
  window.asmContactEventsReady = true;
  function methodFor(href) {
    if (/^tel:/i.test(href)) return 'phone';
    if (/^https:\/\/(?:wa\.me|api\.whatsapp\.com)\//i.test(href)) return 'whatsapp';
    if (/^(?:tg:|https:\/\/t\.me\/)/i.test(href)) return 'telegram';
    if (/^viber:/i.test(href)) return 'viber';
    if (/^https:\/\/(?:www\.)?instagram\.com\//i.test(href)) return 'instagram';
    return null;
  }
  document.addEventListener('click', function (event) {
    var anchor = event.target.closest && event.target.closest('a[href]');
    if (!anchor) return;
    var method = methodFor(anchor.getAttribute('href') || '');
    if (!method) return;
    var zone = anchor.closest('.asm-booking-bar') ? 'route_top' : anchor.closest('.contact') ? 'contacts' : anchor.closest('header') ? 'header' : 'content';
    var canonical = document.querySelector('link[rel="canonical"]');
    var page = canonical ? new URL(canonical.href).pathname : location.pathname;
    var data = {contact_method: method, page_path: page, placement: zone};
    document.dispatchEvent(new CustomEvent('asm:contact', {detail: data}));
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'contact_click', data);
    }
  }, {capture: true});
}());
