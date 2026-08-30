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

    // Live date, time and weather: always visible in the fixed header.
    var topbar=document.querySelector('.topbar');
    if(!topbar || document.getElementById('live-info')) return;

    var box=document.createElement('div');
    box.id='live-info';
    box.className='live-info';
    box.setAttribute('aria-live','polite');
    box.setAttribute('title','Текущее время, дата и температура в Бендерах');
    box.innerHTML='<span class="live-dot" aria-hidden="true"></span><div class="live-cell live-clock"><span class="live-icon" aria-hidden="true">◷</span><strong id="live-time">--:--</strong></div><span class="live-divider" aria-hidden="true"></span><div class="live-cell live-date-cell"><span class="live-icon" aria-hidden="true">◆</span><strong id="live-date">—</strong></div><span class="live-divider" aria-hidden="true"></span><div class="live-cell live-weather"><span class="live-weather-icon" aria-hidden="true">☀</span><strong id="live-temp">—°C</strong><span class="live-city">Бендеры</span></div>';

    var nav=topbar.querySelector('nav');
    if(nav) topbar.insertBefore(box,nav); else topbar.appendChild(box);

    var style=document.createElement('style');
    style.textContent='.live-info{height:44px;display:flex;align-items:center;gap:11px;margin-left:8px;padding:0 14px;border:1px solid rgba(243,196,0,.28);border-radius:999px;background:linear-gradient(180deg,rgba(24,24,26,.9),rgba(12,12,13,.9));backdrop-filter:blur(14px);box-shadow:inset 0 1px 0 rgba(255,255,255,.04),0 8px 28px rgba(0,0,0,.26);white-space:nowrap}.live-dot{width:7px;height:7px;border-radius:50%;background:#f3c400;box-shadow:0 0 0 4px rgba(243,196,0,.08),0 0 15px rgba(243,196,0,.42);animation:livePulse 2.4s ease-in-out infinite}.live-cell{display:flex;align-items:center;gap:6px;min-width:0}.live-info strong{font-size:13px;line-height:1;font-weight:900;letter-spacing:.02em;color:#f6f6f6}.live-icon{font-size:11px;color:#8f8f92}.live-weather-icon{font-size:14px;color:#f3c400;filter:drop-shadow(0 0 6px rgba(243,196,0,.2))}.live-weather #live-temp{color:#f3c400;font-size:14px}.live-city{font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#77777b}.live-divider{width:1px;height:18px;background:linear-gradient(transparent,rgba(255,255,255,.15),transparent)}@keyframes livePulse{0%,100%{opacity:.72;transform:scale(.9)}50%{opacity:1;transform:scale(1.08)}}@media(max-width:1120px){.live-info{gap:8px;padding:0 11px}.live-city{display:none}.live-info strong{font-size:12px}}@media(max-width:900px){.topbar{gap:8px}.live-info{order:2;height:38px;margin-left:auto;margin-right:0;padding:0 10px;gap:7px}.topbar .btn-small{order:3;margin-left:0}.live-dot,.live-divider,.live-icon,.live-weather-icon,.live-city{display:none}.live-cell{gap:0}.live-info strong{font-size:11px}.live-weather #live-temp{font-size:12px}.live-date-cell strong{color:#a9a9ac}}@media(max-width:560px){.topbar{padding-left:12px!important;padding-right:12px!important}.brand-mark{margin-right:8px!important}.brand-mark::after{margin-left:8px!important}.brand-text{display:none}.live-info{height:36px;padding:0 9px;gap:6px;border-color:rgba(243,196,0,.23);box-shadow:none}.live-date-cell{display:none}.live-info strong{font-size:11px}.live-weather #live-temp{font-size:12px}.topbar .btn-small{min-width:36px!important;padding:0 9px!important}}';
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
