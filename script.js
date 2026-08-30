(function(){
  var css=document.createElement('link');
  css.rel='stylesheet';
  css.href='/brand-fixes.css?v=20260830-3';
  document.head.appendChild(css);

  function loadEnhancements(){
    var e=document.createElement('script');
    e.src='/site-enhancements.js?v=20260830-1';
    e.defer=true;
    document.head.appendChild(e);
  }

  var core=document.createElement('script');
  core.src='/script-original.js?v=20260830-2';
  core.onload=function(){
    if(document.readyState!=='loading'){
      document.dispatchEvent(new Event('DOMContentLoaded'));
    }
    loadEnhancements();
  };
  document.head.appendChild(core);
})();
