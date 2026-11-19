(function(){
  function loadEnhancements(){
    var e=document.createElement('script');
    e.src='/site-enhancements.js?v=20261119-languages';
    e.defer=true;
    document.head.appendChild(e);
  }

  var core=document.createElement('script');
  core.src='/script-original.js?v=20261119-languages';
  core.onload=function(){
    if(document.readyState!=='loading'){
      document.dispatchEvent(new Event('DOMContentLoaded'));
    }
    loadEnhancements();
  };
  document.head.appendChild(core);
})();
