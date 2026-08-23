document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const style = document.createElement('style');
  style.textContent = `
    .section:not(.reviews),.process-section,.photo-story-text,.owner-copy,.contact{background-image:radial-gradient(circle at 100% 100%,rgba(243,196,0,.13) 0%,rgba(243,196,0,.055) 20%,rgba(243,196,0,.018) 38%,transparent 58%);background-repeat:no-repeat}.process-section{background-image:radial-gradient(circle at 100% 100%,rgba(243,196,0,.11) 0%,rgba(243,196,0,.045) 22%,transparent 56%),linear-gradient(180deg,#0b0b0c 0%,#101012 100%)}.contact{background-image:radial-gradient(circle at 100% 100%,rgba(243,196,0,.16) 0%,rgba(243,196,0,.065) 24%,rgba(243,196,0,.02) 42%,transparent 62%)}.photo-story-text,.owner-copy{background-color:#111113}
    .calculator-section,.booking-section,.faq-section{position:relative;overflow:hidden;background-image:radial-gradient(circle at 100% 100%,rgba(243,196,0,.16) 0%,rgba(243,196,0,.06) 25%,transparent 58%)}.calculator-wrap,.booking-wrap{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(320px,.9fr);gap:46px;align-items:start;max-width:1120px}.calculator-copy p,.booking-copy p{max-width:650px;margin:20px 0 0;color:#bdbdbf;font-size:18px}.early-booking{display:inline-flex;align-items:center;gap:12px;margin-top:24px;padding:13px 17px;border:1px solid rgba(243,196,0,.3);border-radius:12px;background:rgba(243,196,0,.075);color:#f4f4f4;font-size:14px;font-weight:800}.early-booking strong{color:#f3c400;font-size:18px}.calculator-box,.booking-box{background:rgba(18,18,20,.92);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:26px;box-shadow:0 24px 70px rgba(0,0,0,.28)}.calculator-field,.booking-field{margin-bottom:16px}.calculator-field label,.booking-field label{display:block;margin-bottom:8px;color:#f3c400;font-size:12px;font-weight:900;letter-spacing:.13em;text-transform:uppercase}.calculator-field select,.booking-field input,.booking-field select{width:100%;height:54px;border-radius:10px;border:1px solid rgba(255,255,255,.14);background:#0d0d0f;color:#fff;padding:0 14px;font:inherit;font-weight:700;outline:none}.booking-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 12px}.calculator-result{margin-top:20px;padding-top:20px;border-top:1px solid rgba(255,255,255,.1)}.calculator-result-label{color:#99999c;font-size:13px;text-transform:uppercase;letter-spacing:.08em}.calculator-price{margin:4px 0;color:#f3c400;font-size:clamp(32px,5vw,48px);line-height:1;font-weight:950;letter-spacing:-.03em}.calculator-car-note{color:#ddd;font-size:14px}.calculator-discount-note{margin-top:12px;color:#f3c400;font-size:13px;font-weight:800}.calculator-warning{margin:18px 0 0;padding:14px 15px;border-left:3px solid #f3c400;background:rgba(243,196,0,.06);color:#bdbdbf;font-size:13px;line-height:1.5}.calculator-actions{display:grid;grid-template-columns:1fr auto;gap:10px;margin-top:18px}.calculator-phone{min-width:54px;padding:0 14px;font-size:21px}.calculator-placeholder{color:#8f8f92;font-size:15px;margin-top:8px}.promo-section{margin:0 6vw 90px;padding:38px 42px;border:1px solid rgba(243,196,0,.22);border-radius:16px;background:radial-gradient(circle at 100% 100%,rgba(243,196,0,.18),transparent 55%),#111113;display:flex;align-items:center;justify-content:space-between;gap:28px}.promo-section h3{margin:0;font-size:clamp(28px,4vw,52px);line-height:1}.promo-section h3 span{color:#f3c400}.promo-section p{margin:10px 0 0;color:#bbb}.faq-wrap{max-width:1000px}.faq-list{margin-top:34px;border-top:1px solid rgba(255,255,255,.12)}.faq-item{border-bottom:1px solid rgba(255,255,255,.12)}.faq-question{width:100%;padding:22px 0;background:none;border:0;color:#fff;text-align:left;font:inherit;font-size:19px;font-weight:850;display:flex;justify-content:space-between;gap:20px;cursor:pointer}.faq-question span:last-child{color:#f3c400;font-size:25px}.faq-answer{display:none;padding:0 38px 22px 0;color:#aaa;max-width:820px}.faq-item.open .faq-answer{display:block}.sticky-actions{display:none}
    .calculator-search{width:100%;height:48px;margin-bottom:8px;border-radius:10px;border:1px solid rgba(255,255,255,.14);background:#0d0d0f;color:#fff;padding:0 14px;font:inherit;outline:none}.calculator-search:focus{border-color:#f3c400}.calculator-search:disabled{opacity:.5}.calculator-swap{width:100%;min-height:44px;margin:-2px 0 16px;border:1px solid rgba(243,196,0,.45);border-radius:10px;background:rgba(243,196,0,.08);color:#f3c400;font:inherit;font-weight:900;cursor:pointer}.calculator-swap:hover{background:rgba(243,196,0,.15)}
    @media(max-width:900px){.calculator-wrap,.booking-wrap{grid-template-columns:1fr;gap:28px}.calculator-copy p,.booking-copy p{font-size:16px}.promo-section{margin:0 22px 70px;padding:30px 26px;align-items:flex-start;flex-direction:column}}
    @media(max-width:560px){body{padding-bottom:68px}.section:not(.reviews),.process-section,.photo-story-text,.owner-copy,.contact{background-size:145% 145%;background-position:100% 100%}.calculator-section,.booking-section,.faq-section{background-size:145% 145%;background-position:100% 100%}.calculator-box,.booking-box{padding:20px;border-radius:14px}.booking-grid{grid-template-columns:1fr}.calculator-field select,.booking-field input,.booking-field select{height:52px;font-size:15px}.calculator-actions{grid-template-columns:1fr 54px}.early-booking{width:100%;font-size:13px}.promo-section{margin-bottom:56px}.faq-question{font-size:17px;padding:19px 0}.sticky-actions{position:fixed;z-index:70;left:10px;right:10px;bottom:10px;height:54px;padding:5px;display:grid;grid-template-columns:1fr 1fr;gap:6px;background:rgba(12,12,13,.94);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.12);border-radius:14px;box-shadow:0 10px 35px rgba(0,0,0,.45)}.sticky-actions a{display:flex;align-items:center;justify-content:center;border-radius:10px;text-decoration:none;font-size:13px;font-weight:900}.sticky-calc{background:#f3c400;color:#090909}.sticky-chat{background:#25D366;color:#fff}}
  `;
  document.head.appendChild(style);

  const baseRoutes = [
    ['Тирасполь','Аэропорт Кишинёва','500 руб. ПМР'],
    ['Бендеры','Аэропорт Кишинёва','440 руб. ПМР'],
    ['Слободзея','Аэропорт Кишинёва','550 руб. ПМР'],
    ['Чобручи','Аэропорт Кишинёва','600 руб. ПМР'],
    ['Днестровск','Аэропорт Кишинёва','800 руб. ПМР'],
    ['Тирасполь','Центр Кишинёва','600 руб. ПМР'],
    ['Бендеры','Центр Кишинёва','550 руб. ПМР'],
    ['Парканы','Аэропорт Кишинёва','460 руб. ПМР'],
    ['Аэропорт Кишинёва','Парканы','460 руб. ПМР'],
    ['Карагаш','Аэропорт Кишинёва','550 руб. ПМР'],
    ['Аэропорт Кишинёва','Карагаш','550 руб. ПМР'],
    ['Карагаш','Центр Кишинёва','650 руб. ПМР'],
    ['Бендеры','Каушаны','350 руб. ПМР'],
    ['Тирасполь','Каушаны','400 руб. ПМР'],
    ['Бендеры','Криково','700 руб. ПМР'],
    ['Тирасполь','Криково','750 руб. ПМР'],
    ['Бендеры','Новые Анены','330 руб. ПМР'],
    ['Тирасполь','Новые Анены','370 руб. ПМР'],
    ['Паланка','Тирасполь','800 руб. ПМР'],
    ['Паланка','Бендеры','850 руб. ПМР'],
    ['Паланка','Аэропорт Кишинёва','1150 руб. ПМР'],
    ['Паланка','Центр Кишинёва','1300 руб. ПМР'],
    ['Яссы','Бендеры','150 €'],
    ['Яссы','Тирасполь','160 €'],
    ['Яссы','Кишинёв','140 €'],
    ['Бендеры','Гура-Быкулуй','120 руб. ПМР'],
    ['Тирасполь','Гура-Быкулуй','150 руб. ПМР'],
    ['Бендеры','Бельцы','1600 руб. ПМР'],
    ['Тирасполь','Бельцы','1700 руб. ПМР'],
    ['Бендеры','Сороки','1750 руб. ПМР'],
    ['Тирасполь','Сороки','1850 руб. ПМР'],
    ['Бендеры','Оргеев','850 руб. ПМР'],
    ['Тирасполь','Оргеев','950 руб. ПМР'],
    ['Бендеры','Старый Орхей','750 руб. ПМР'],
    ['Тирасполь','Старый Орхей','650 руб. ПМР'],
    ['Бендеры','Комрат','1000 руб. ПМР'],
    ['Тирасполь','Комрат','1100 руб. ПМР'],
    ['Бендеры','Кагул','1650 руб. ПМР'],
    ['Тирасполь','Кагул','1750 руб. ПМР'],
    ['Бендеры','Унгены','1450 руб. ПМР'],
    ['Тирасполь','Унгены','1550 руб. ПМР'],
    ['Бендеры','Хынчешты','850 руб. ПМР'],
    ['Тирасполь','Хынчешты','950 руб. ПМР'],
    ['Бендеры','Чадыр-Лунга','1050 руб. ПМР'],
    ['Тирасполь','Чадыр-Лунга','1150 руб. ПМР'],
    ['Бендеры','Вулканешты','1650 руб. ПМР'],
    ['Тирасполь','Вулканешты','1750 руб. ПМР'],
    ['Бендеры','Рыбница','1150 руб. ПМР'],
    ['Тирасполь','Рыбница','1000 руб. ПМР'],
    ['Бендеры','Дубоссары','650 руб. ПМР'],
    ['Тирасполь','Дубоссары','550 руб. ПМР'],
    ['Бендеры','Каменка','1550 руб. ПМР'],
    ['Тирасполь','Каменка','1400 руб. ПМР'],
    ['Бендеры','Григориополь','450 руб. ПМР'],
    ['Тирасполь','Григориополь','350 руб. ПМР'],
    ['Бендеры','Штефан-Водэ','400 руб. ПМР'],
    ['Тирасполь','Штефан-Водэ','500 руб. ПМР'],
    ['Бендеры','Чимишлия','700 руб. ПМР'],
    ['Тирасполь','Чимишлия','800 руб. ПМР'],
    ['Бендеры','Кэлэраши','1000 руб. ПМР'],
    ['Тирасполь','Кэлэраши','1050 руб. ПМР'],
    ['Бендеры','Страшены','750 руб. ПМР'],
    ['Тирасполь','Страшены','850 руб. ПМР'],
    ['Бендеры','Резина','1150 руб. ПМР'],
    ['Тирасполь','Резина','1050 руб. ПМР'],
    ['Бендеры','Дрокия','1950 руб. ПМР'],
    ['Тирасполь','Дрокия','2000 руб. ПМР'],
    ['Бендеры','Единцы','2200 руб. ПМР'],
    ['Тирасполь','Единцы','2250 руб. ПМР'],
    ['Бендеры','Окница','2500 руб. ПМР'],
    ['Тирасполь','Окница','2550 руб. ПМР'],
    ['Бендеры','Флорешты','1500 руб. ПМР'],
    ['Тирасполь','Флорешты','1600 руб. ПМР'],
    ['Бендеры','Фалешты','1550 руб. ПМР'],
    ['Тирасполь','Фалешты','1650 руб. ПМР'],
    ['Бендеры','Ниспорены','1150 руб. ПМР'],
    ['Тирасполь','Ниспорены','1250 руб. ПМР'],
    ['Бендеры','Леова','1150 руб. ПМР'],
    ['Тирасполь','Леова','1250 руб. ПМР'],
    ['Бендеры','Тараклия','1450 руб. ПМР'],
    ['Тирасполь','Тараклия','1550 руб. ПМР'],
    ['Бендеры','Вадул-луй-Водэ','400 руб. ПМР'],
    ['Тирасполь','Вадул-луй-Водэ','500 руб. ПМР']
  ];
  const routes = [...baseRoutes];
  baseRoutes.forEach(([from, to, price]) => {
    if (!routes.some(route => route[0] === to && route[1] === from)) {
      routes.push([to, from, price]);
    }
  });
  const routesSection = document.getElementById('routes');
  if (routesSection) {
    const calc=document.createElement('section'); calc.className='section calculator-section'; calc.id='calculator'; calc.innerHTML=`<div class="calculator-wrap"><div class="calculator-copy"><div class="eyebrow">Предварительная стоимость</div><h2>РАССЧИТАЙТЕ<br>ПОЕЗДКУ</h2><p>Начните вводить название города или выберите его из списка — калькулятор покажет ориентировочную стоимость за автомобиль.</p><div class="early-booking"><strong>−10%</strong><span>При бронировании поездки за 7 дней и более</span></div></div><div class="calculator-box"><div class="calculator-field"><label for="calc-from-search">Откуда</label><input class="calculator-search" id="calc-from-search" type="search" placeholder="Введите название города" autocomplete="off"><select id="calc-from" aria-label="Город отправления"><option value="">Выберите город</option></select></div><button class="calculator-swap" id="calc-swap" type="button" aria-label="Поменять города местами">⇅ Поменять города местами</button><div class="calculator-field"><label for="calc-to-search">Куда</label><input class="calculator-search" id="calc-to-search" type="search" placeholder="Сначала выберите город отправления" autocomplete="off" disabled><select id="calc-to" aria-label="Город назначения" disabled><option value="">Сначала выберите город</option></select></div><div class="calculator-result"><div class="calculator-result-label">Предварительная стоимость</div><div class="calculator-price" id="calc-price">—</div><div class="calculator-car-note">Цена указана за автомобиль, не за одного пассажира.</div><div class="calculator-discount-note">Бронируете за 7 дней и более? Скидка 10% от указанной стоимости.</div><div class="calculator-placeholder" id="calc-placeholder">Выберите маршрут, чтобы увидеть стоимость.</div><div class="calculator-warning"><strong>Важно:</strong> стоимость может меняться в связи с изменением цен на топливо. Актуальную цену обязательно уточняйте перед бронированием.</div><div class="calculator-actions"><a class="btn" id="calc-whatsapp" href="https://wa.me/37377950129" target="_blank">Уточнить в WhatsApp</a><a class="btn btn-ghost calculator-phone" href="tel:+37377950129">📞</a></div></div></div></div>`; routesSection.insertAdjacentElement('afterend',calc);
    const from=calc.querySelector('#calc-from'),to=calc.querySelector('#calc-to'),fromSearch=calc.querySelector('#calc-from-search'),toSearch=calc.querySelector('#calc-to-search'),swap=calc.querySelector('#calc-swap'),price=calc.querySelector('#calc-price'),hint=calc.querySelector('#calc-placeholder'),wa=calc.querySelector('#calc-whatsapp');
    const sortCities=list=>[...new Set(list)].sort((a,b)=>a.localeCompare(b,'ru'));
    const origins=sortCities(routes.map(r=>r[0]));
    const fill=(select,cities,placeholder,query='')=>{const current=select.value;select.innerHTML=`<option value="">${placeholder}</option>`;cities.filter(c=>c.toLocaleLowerCase('ru').includes(query.trim().toLocaleLowerCase('ru'))).forEach(c=>select.add(new Option(c,c)));if([...select.options].some(o=>o.value===current))select.value=current};
    const reset=()=>{price.textContent='—';hint.style.display='block';hint.textContent='Выберите маршрут, чтобы увидеть стоимость.';wa.href='https://wa.me/37377950129'};
    const updateDestination=()=>{const destinations=sortCities(routes.filter(r=>r[0]===from.value).map(r=>r[1]));fill(to,destinations,'Выберите направление');to.disabled=!from.value;toSearch.disabled=!from.value;toSearch.placeholder=from.value?'Введите название города':'Сначала выберите город отправления';toSearch.value='';reset()};
    const showPrice=()=>{const r=routes.find(r=>r[0]===from.value&&r[1]===to.value);if(!r){reset();return}price.textContent=r[2];hint.style.display='none';wa.href=`https://wa.me/37377950129?text=${encodeURIComponent(`Здравствуйте! Хочу заказать трансфер ASM Transfer: ${r[0]} → ${r[1]}. На сайте указана предварительная стоимость ${r[2]}. Если бронирование за 7 дней и более, прошу учесть скидку 10%. Подтвердите актуальную цену и возможность поездки.`)}`};
    fill(from,origins,'Выберите город');
    from.onchange=()=>{fromSearch.value=from.value;updateDestination()};
    to.onchange=()=>{toSearch.value=to.value;showPrice()};
    fromSearch.oninput=()=>{fill(from,origins,'Выберите город',fromSearch.value);const exact=origins.find(c=>c.toLocaleLowerCase('ru')===fromSearch.value.trim().toLocaleLowerCase('ru'));if(exact){from.value=exact;updateDestination()}};
    toSearch.oninput=()=>{const destinations=sortCities(routes.filter(r=>r[0]===from.value).map(r=>r[1]));fill(to,destinations,'Выберите направление',toSearch.value);const exact=destinations.find(c=>c.toLocaleLowerCase('ru')===toSearch.value.trim().toLocaleLowerCase('ru'));if(exact){to.value=exact;showPrice()}};
    swap.onclick=()=>{if(!from.value||!to.value){hint.style.display='block';hint.textContent='Сначала выберите оба города.';return}const oldFrom=from.value,oldTo=to.value;fill(from,origins,'Выберите город');from.value=oldTo;fromSearch.value=oldTo;updateDestination();to.value=oldFrom;toSearch.value=oldFrom;showPrice()};

    const promo=document.createElement('section'); promo.className='promo-section'; promo.innerHTML=`<div><div class="eyebrow">Раннее бронирование</div><h3>ПЛАНИРУЕТЕ ЗАРАНЕЕ? <span>−10%</span></h3><p>Забронируйте поездку за 7 дней и более и получите скидку 10%.</p></div><a class="btn" href="#quick-booking">Забронировать заранее</a>`; calc.insertAdjacentElement('afterend',promo);

    const booking=document.createElement('section'); booking.className='section booking-section'; booking.id='quick-booking'; booking.innerHTML=`<div class="booking-wrap"><div class="booking-copy"><div class="eyebrow">Быстрый заказ</div><h2>ЗАЯВКА<br>ЗА МИНУТУ</h2><p>Заполните детали поездки — WhatsApp откроется с уже готовой заявкой.</p></div><form class="booking-box" id="booking-form"><div class="booking-grid"><div class="booking-field"><label>Дата</label><input id="book-date" type="date" required></div><div class="booking-field"><label>Время</label><input id="book-time" type="time" required></div></div><div class="booking-field"><label>Откуда</label><input id="book-from" placeholder="Например: Тирасполь, адрес" required></div><div class="booking-field"><label>Куда</label><input id="book-to" placeholder="Например: аэропорт Кишинёва" required></div><div class="booking-grid"><div class="booking-field"><label>Пассажиров</label><select id="book-people"><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></select></div><div class="booking-field"><label>Багаж</label><select id="book-luggage"><option>Без багажа</option><option>1 чемодан</option><option>2 чемодана</option><option>3+ чемодана</option></select></div></div><div class="booking-field"><label>Детское кресло</label><select id="book-child"><option>Не нужно</option><option>Нужно</option></select></div><button class="btn" type="submit" style="width:100%">Отправить заявку в WhatsApp</button></form></div>`; promo.insertAdjacentElement('afterend',booking);
    const date=booking.querySelector('#book-date'); date.min=new Date().toISOString().split('T')[0]; booking.querySelector('#booking-form').onsubmit=e=>{e.preventDefault();const d=new Date(date.value+'T00:00:00'),now=new Date();now.setHours(0,0,0,0);const days=Math.round((d-now)/86400000);const discount=days>=7?'Да — бронирование за 7 дней и более, скидка −10%':'Нет';const msg=`Здравствуйте! Хочу заказать трансфер ASM Transfer.\nДата: ${date.value}\nВремя: ${booking.querySelector('#book-time').value}\nОткуда: ${booking.querySelector('#book-from').value}\nКуда: ${booking.querySelector('#book-to').value}\nПассажиров: ${booking.querySelector('#book-people').value}\nБагаж: ${booking.querySelector('#book-luggage').value}\nДетское кресло: ${booking.querySelector('#book-child').value}\nРаннее бронирование: ${discount}\nПодтвердите, пожалуйста, стоимость и возможность поездки.`;window.open(`https://wa.me/37377950129?text=${encodeURIComponent(msg)}`,'_blank')};
  }

  const service=document.getElementById('service'); if(service){const faq=document.createElement('section');faq.className='section faq-section';faq.innerHTML=`<div class="faq-wrap"><div class="eyebrow">Частые вопросы</div><h2>ВАЖНО ЗНАТЬ</h2><div class="faq-list">${[['Что если самолёт задержался?','Сообщите номер рейса при бронировании. Мы остаёмся на связи и согласуем встречу с учётом фактического времени прилёта.'],['Есть ли детское кресло?','Да. Детское кресло предоставляется по предварительному запросу — укажите это в заявке.'],['Можно ли заказать поездку ночью?','Да, ASM Transfer работает 24/7 по предварительному бронированию.'],['Сколько багажа можно взять?','Toyota Prius+ имеет просторный багажник. Если чемоданов много или есть крупный багаж, сообщите об этом заранее.'],['Как происходит встреча в аэропорту?','Заранее согласуем удобный вариант встречи и остаёмся на связи после прилёта.'],['Цена на сайте окончательная?','В калькуляторе указана предварительная стоимость за автомобиль. Из-за изменения цен на топливо актуальную цену нужно подтвердить перед поездкой.']].map((x,i)=>`<div class="faq-item"><button class="faq-question" type="button"><span>${x[0]}</span><span>+</span></button><div class="faq-answer">${x[1]}</div></div>`).join('')}</div></div>`;service.insertAdjacentElement('afterend',faq);faq.querySelectorAll('.faq-question').forEach(b=>b.onclick=()=>{const item=b.parentElement;item.classList.toggle('open');b.lastElementChild.textContent=item.classList.contains('open')?'−':'+'})}

  const sticky=document.createElement('div');sticky.className='sticky-actions';sticky.innerHTML=`<a class="sticky-calc" href="#calculator">Рассчитать</a><a class="sticky-chat" href="https://wa.me/37377950129" target="_blank">Написать</a>`;document.body.appendChild(sticky);

  const animated=[...document.querySelectorAll('.process-step,.route-item,.calculator-section,.promo-section,.booking-section,.faq-section,.feature,.photo-story,.owner-story,.reviews,.contact-inner')]; animated.forEach((el,index)=>{el.classList.add('reveal');if(el.classList.contains('process-step'))el.classList.add(`reveal-delay-${Math.min(index%4,3)}`)}); const processLine=document.querySelector('.process-line'); if(!('IntersectionObserver'in window)){animated.forEach(el=>el.classList.add('is-visible'));if(processLine)processLine.classList.add('is-visible');return} const observer=new IntersectionObserver((entries,obs)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target)}}),{threshold:.16,rootMargin:'0px 0px -6% 0px'});animated.forEach(el=>observer.observe(el));if(processLine)observer.observe(processLine);
});
