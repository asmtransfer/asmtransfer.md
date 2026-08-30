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

    // Live local information on the homepage.
    var hero=document.querySelector('.hero-content');
    if(!hero || document.getElementById('live-info')) return;

    var box=document.createElement('div');
    box.id='live-info';
    box.className='live-info';
    box.setAttribute('aria-live','polite');
    box.innerHTML='<div class="live-info-item"><span class="live-info-label">Сейчас</span><strong id="live-time">--:--</strong></div><div class="live-info-item"><span class="live-info-label">Дата</span><strong id="live-date">—</strong></div><div class="live-info-item"><span class="live-info-label">Бендеры</span><strong id="live-temp">—°C</strong></div>';
    var trust=hero.querySelector('.trust-row');
    if(trust) trust.insertAdjacentElement('afterend',box); else hero.appendChild(box);

    var style=document.createElement('style');
    style.textContent='.live-info{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px;max-width:760px}.live-info-item{display:flex;align-items:baseline;gap:9px;min-height:40px;padding:9px 13px;border:1px solid rgba(243,196,0,.32);border-radius:10px;background:rgba(11,11,12,.72);backdrop-filter:blur(8px);box-shadow:0 8px 22px rgba(0,0,0,.18)}.live-info-label{color:#9d9da0;font-size:11px;font-weight:900;letter-spacing:.11em;text-transform:uppercase}.live-info strong{color:#f6f6f6;font-size:15px;font-weight:900}.live-info #live-temp{color:#f3c400}@media(max-width:560px){.live-info{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-top:18px}.live-info-item{display:block;padding:9px 8px;text-align:center;min-width:0}.live-info-label{display:block;margin-bottom:2px;font-size:9px}.live-info strong{font-size:13px;white-space:nowrap}}';
    document.head.appendChild(style);

    var timeEl=document.getElementById('live-time');
    var dateEl=document.getElementById('live-date');
    var tempEl=document.getElementById('live-temp');
    function updateClock(){
      var now=new Date();
      if(timeEl) timeEl.textContent=new Intl.DateTimeFormat('ru-RU',{timeZone:'Europe/Chisinau',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(now);
      if(dateEl) dateEl.textContent=new Intl.DateTimeFormat('ru-RU',{timeZone:'Europe/Chisinau',day:'2-digit',month:'short'}).format(now).replace('.','');
    }
    updateClock();
    setInterval(updateClock,1000);

    function updateWeather(){
      fetch('https://api.open-meteo.com/v1/forecast?latitude=46.83&longitude=29.47&current=temperature_2m&timezone=Europe%2FChisinau',{cache:'no-store'})
        .then(function(r){if(!r.ok) throw new Error('weather'); return r.json();})
        .then(function(data){var t=data&&data.current&&data.current.temperature_2m;if(typeof t==='number'&&tempEl) tempEl.textContent=Math.round(t)+'°C';})
        .catch(function(){if(tempEl) tempEl.textContent='—°C';});
    }
    updateWeather();
    setInterval(updateWeather,600000);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',enhance,{once:true}); else enhance();
})();
