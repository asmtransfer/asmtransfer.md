(function(){
  function loadEnhancements(){
    var e=document.createElement('script');
    e.src='/site-enhancements.js?v=20261119-languages';
    e.defer=true;
    document.head.appendChild(e);
  }

  var core=document.createElement('script');
  core.src='/script-original.js?v=20261119-languages-2';
  core.onload=loadEnhancements;
  document.head.appendChild(core);
})();
