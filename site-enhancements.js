(function(){
  function enhance(){
    // Calculator: keep only dropdown city selection.
    var calc=document.getElementById('calculator');
    if(calc){
      calc.querySelectorAll('.calculator-search').forEach(function(el){el.remove();});
      var copy=calc.querySelector('.calculator-copy p');
      if(copy) copy.textContent='Выберите город отправления и пункт назначения — калькулятор покажет ориентировочную стоимость за автомобиль.';
      var fromLabel=calc.querySelector('label[for="calc-from-search"]');
      var toLabel=calc.querySelector('label[for="calc-to-search"]');
      if(fromLabel) fromLabel.setAttribute('for','calc-from');
      if(toLabel) toLabel.setAttribute('for','calc-to');
    }

    // Header: use a consistent SVG phone icon instead of a device-dependent emoji.
    var topCall=document.querySelector('.topbar .btn-small');
    if(topCall){
      topCall.setAttribute('aria-label','Позвонить ASM Transfer');
      topCall.innerHTML='<svg class="topbar-phone-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.7 2.8l2.1-.7c.8-.3 1.7.1 2 .9l1.1 3.2c.2.7 0 1.5-.6 1.9L9.6 9.4c1.1 2.3 2.8 4 5.1 5.1l1.3-1.7c.5-.6 1.3-.8 2-.6l3.1 1.1c.8.3 1.2 1.1 1 2l-.7 2.2c-.4 1.3-1.6 2.2-3 2.2C10.4 18.7 4.3 12.6 4.3 5.8c0-1.4.9-2.6 2.4-3z" fill="currentColor"/></svg><span class="topbar-call-text">Позвонить</span>';
    }

    // Shorten the homepage by removing the duplicated interior story block.
    document.querySelectorAll('.photo-story').forEach(function(section){
      var img=section.querySelector('img[src*="interior.webp"]');
      if(img) section.remove();
    });

    // Mark the vehicle section so spacing can be tightened without touching content.
    document.querySelectorAll('.section').forEach(function(section){
      var h2=section.querySelector('h2');
      if(h2 && h2.textContent.replace(/\s+/g,' ').trim()==='НАШ АВТОМОБИЛЬ') section.classList.add('car-section');
    });

    // Footer: turn the SEO link line into a clean routes grid.
    var footerRoutes=document.querySelector('footer>div:last-child');
    if(footerRoutes && !footerRoutes.classList.contains('footer-routes')){
      footerRoutes.classList.add('footer-routes');
      Array.from(footerRoutes.childNodes).forEach(function(node){
        if(node.nodeType===3 && node.textContent.indexOf('•')!==-1) node.remove();
      });
    }

    // Accessibility: expose FAQ state to screen readers.
    document.querySelectorAll('.faq-question').forEach(function(button,index){
      var item=button.closest('.faq-item');
      var answer=item && item.querySelector('.faq-answer');
      if(!answer) return;
      var answerId=answer.id || ('faq-answer-'+(index+1));
      answer.id=answerId;
      button.setAttribute('aria-controls',answerId);
      button.setAttribute('aria-expanded',item.classList.contains('open')?'true':'false');
      if(!button.dataset.asmA11yBound){
        button.dataset.asmA11yBound='1';
        button.addEventListener('click',function(){
          requestAnimationFrame(function(){
            button.setAttribute('aria-expanded',item.classList.contains('open')?'true':'false');
          });
        });
      }
    });

    // Accessibility: clear names for fixed mobile actions.
    var stickyCalc=document.querySelector('.sticky-calc');
    var stickyChat=document.querySelector('.sticky-chat');
    if(stickyCalc) stickyCalc.setAttribute('aria-label','Рассчитать стоимость поездки');
    if(stickyChat) stickyChat.setAttribute('aria-label','Написать в WhatsApp');

    var style=document.createElement('style');
    style.textContent='\
      .topbar .btn-small::before{content:none!important}.topbar-phone-svg{width:19px;height:19px;display:block;flex:0 0 19px}.topbar-call-text{font-size:13px}.car-section{padding-bottom:72px}.car-section+.section{padding-top:72px}.footer-routes{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 24px!important;align-items:start!important;max-width:760px}.footer-routes::before{content:"Популярные маршруты";grid-column:1/-1;color:#f3c400;font-size:11px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;margin-bottom:4px}.footer-routes a{color:#c5c5c7!important;text-decoration:none;line-height:1.45}.footer-routes a:hover,.footer-routes a:focus{color:#f3c400!important}.sticky-chat{background:#111113!important;color:#f3c400!important;border:1px solid rgba(243,196,0,.62)!important}@media(max-width:900px){.topbar-call-text{display:none}.topbar .btn-small{font-size:inherit!important}.topbar-phone-svg{width:18px;height:18px}.car-section{padding-bottom:54px}.car-section+.section{padding-top:54px}.footer-routes{grid-template-columns:1fr 1fr;max-width:none;width:100%}}@media(max-width:560px){.footer-routes{grid-template-columns:1fr;gap:7px!important}.footer-routes::before{margin-bottom:2px}}';
    document.head.appendChild(style);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',enhance,{once:true}); else enhance();
})();
