(function(){
  var css=document.createElement('link');css.rel='stylesheet';css.href='/brand-fixes.css?v=20260830-2';document.head.appendChild(css);
  function polish(){
    document.querySelectorAll('a[href$="#calculator"]').forEach(function(a){a.setAttribute('href','/#routes');var t=(a.textContent||'').trim().toLowerCase();if(t.indexOf('калькулятор')!==-1||t.indexOf('цены')!==-1){a.textContent='Маршруты';}});
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',polish);}else{polish();}
  var s=document.createElement('script');s.src='/script-original.js?v=20260830-1';s.defer=true;document.head.appendChild(s);
})();
