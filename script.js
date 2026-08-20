document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const style = document.createElement('style');
  style.textContent = `
    .section:not(.reviews),.process-section,.photo-story-text,.owner-copy,.contact{background-image:radial-gradient(circle at 100% 100%,rgba(243,196,0,.13) 0%,rgba(243,196,0,.055) 20%,rgba(243,196,0,.018) 38%,transparent 58%);background-repeat:no-repeat}.process-section{background-image:radial-gradient(circle at 100% 100%,rgba(243,196,0,.11) 0%,rgba(243,196,0,.045) 22%,transparent 56%),linear-gradient(180deg,#0b0b0c 0%,#101012 100%)}.contact{background-image:radial-gradient(circle at 100% 100%,rgba(243,196,0,.16) 0%,rgba(243,196,0,.065) 24%,rgba(243,196,0,.02) 42%,transparent 62%)}.photo-story-text,.owner-copy{background-color:#111113}
    .calculator-section{position:relative;overflow:hidden;background-image:radial-gradient(circle at 100% 100%,rgba(243,196,0,.16) 0%,rgba(243,196,0,.06) 25%,transparent 58%)}.calculator-wrap{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(320px,.9fr);gap:46px;align-items:start;max-width:1120px}.calculator-copy p{max-width:650px;margin:20px 0 0;color:#bdbdbf;font-size:18px}.calculator-box{background:rgba(18,18,20,.92);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:26px;box-shadow:0 24px 70px rgba(0,0,0,.28)}.calculator-field{margin-bottom:16px}.calculator-field label{display:block;margin-bottom:8px;color:#f3c400;font-size:12px;font-weight:900;letter-spacing:.13em;text-transform:uppercase}.calculator-field select{width:100%;height:54px;border-radius:10px;border:1px solid rgba(255,255,255,.14);background:#0d0d0f;color:#fff;padding:0 14px;font:inherit;font-weight:700;outline:none}.calculator-field select:focus{border-color:#f3c400}.calculator-result{margin-top:20px;padding-top:20px;border-top:1px solid rgba(255,255,255,.1)}.calculator-result-label{color:#99999c;font-size:13px;text-transform:uppercase;letter-spacing:.08em}.calculator-price{margin:4px 0;color:#f3c400;font-size:clamp(32px,5vw,48px);line-height:1;font-weight:950;letter-spacing:-.03em}.calculator-car-note{color:#ddd;font-size:14px}.calculator-warning{margin:18px 0 0;padding:14px 15px;border-left:3px solid #f3c400;background:rgba(243,196,0,.06);color:#bdbdbf;font-size:13px;line-height:1.5}.calculator-actions{display:grid;grid-template-columns:1fr auto;gap:10px;margin-top:18px}.calculator-actions .btn{min-height:50px}.calculator-phone{min-width:54px;padding:0 14px;font-size:21px}.calculator-placeholder{color:#8f8f92;font-size:15px;margin-top:8px}
    @media(max-width:900px){.calculator-wrap{grid-template-columns:1fr;gap:28px}.calculator-copy p{font-size:16px}}@media(max-width:560px){.section:not(.reviews),.process-section,.photo-story-text,.owner-copy,.contact{background-size:145% 145%;background-position:100% 100%}.calculator-section{background-size:145% 145%;background-position:100% 100%}.calculator-box{padding:20px;border-radius:14px}.calculator-field select{height:52px;font-size:15px}.calculator-actions{grid-template-columns:1fr 54px}.calculator-actions .btn{padding-left:14px;padding-right:14px;font-size:14px}}
  `;
  document.head.appendChild(style);

  const routes = [
    ['Тирасполь','Аэропорт Кишинёва','500 руб. ПМР'],
    ['Бендеры','Аэропорт Кишинёва','440 руб. ПМР'],
    ['Слободзея','Аэропорт Кишинёва','550 руб. ПМР'],
    ['Чобручи','Аэропорт Кишинёва','600 руб. ПМР'],
    ['Днестровск','Аэропорт Кишинёва','800 руб. ПМР'],
    ['Тирасполь','Центр Кишинёва','600 руб. ПМР'],
    ['Бендеры','Центр Кишинёва','550 руб. ПМР'],
    ['Приднестровье','Яссы','150 €']
  ];

  const routesSection = document.getElementById('routes');
  if (routesSection) {
    const calc = document.createElement('section');
    calc.className = 'section calculator-section';
    calc.id = 'calculator';
    calc.innerHTML = `<div class="calculator-wrap"><div class="calculator-copy"><div class="eyebrow">Предварительная стоимость</div><h2>РАССЧИТАЙТЕ<br>ПОЕЗДКУ</h2><p>Выберите пункт отправления и направление — калькулятор покажет ориентировочную стоимость поездки за автомобиль.</p></div><div class="calculator-box"><div class="calculator-field"><label for="calc-from">Откуда</label><select id="calc-from"><option value="">Выберите город</option></select></div><div class="calculator-field"><label for="calc-to">Куда</label><select id="calc-to" disabled><option value="">Сначала выберите город</option></select></div><div class="calculator-result"><div class="calculator-result-label">Предварительная стоимость</div><div class="calculator-price" id="calc-price">—</div><div class="calculator-car-note">Цена указана за автомобиль, не за одного пассажира.</div><div class="calculator-placeholder" id="calc-placeholder">Выберите маршрут, чтобы увидеть стоимость.</div><div class="calculator-warning"><strong>Важно:</strong> стоимость может меняться в связи с изменением цен на топливо. Актуальную цену обязательно уточняйте перед бронированием по телефону или в мессенджере.</div><div class="calculator-actions"><a class="btn" id="calc-whatsapp" href="https://wa.me/37377950129" target="_blank" rel="noopener">Уточнить в WhatsApp</a><a class="btn btn-ghost calculator-phone" href="tel:+37377950129" aria-label="Позвонить">📞</a></div></div></div></div>`;
    routesSection.insertAdjacentElement('afterend', calc);

    const from = calc.querySelector('#calc-from');
    const to = calc.querySelector('#calc-to');
    const price = calc.querySelector('#calc-price');
    const hint = calc.querySelector('#calc-placeholder');
    const wa = calc.querySelector('#calc-whatsapp');

    [...new Set(routes.map(r => r[0]))].forEach(city => from.add(new Option(city, city)));

    const reset = () => { price.textContent = '—'; hint.style.display = 'block'; wa.href = 'https://wa.me/37377950129'; };
    from.addEventListener('change', () => {
      to.innerHTML = '<option value="">Выберите направление</option>';
      routes.filter(r => r[0] === from.value).forEach(r => to.add(new Option(r[1], r[1])));
      to.disabled = !from.value;
      reset();
    });
    to.addEventListener('change', () => {
      const r = routes.find(r => r[0] === from.value && r[1] === to.value);
      if (!r) return reset();
      price.textContent = r[2];
      hint.style.display = 'none';
      const msg = `Здравствуйте! Хочу заказать трансфер ASM Transfer: ${r[0]} → ${r[1]}. На сайте указана предварительная стоимость ${r[2]}. Подтвердите, пожалуйста, актуальную цену и возможность поездки.`;
      wa.href = `https://wa.me/37377950129?text=${encodeURIComponent(msg)}`;
    });
  }

  const animated = [
    ...document.querySelectorAll('.process-step'),
    ...document.querySelectorAll('.route-item'),
    ...document.querySelectorAll('.calculator-section'),
    ...document.querySelectorAll('.feature'),
    ...document.querySelectorAll('.photo-story'),
    ...document.querySelectorAll('.owner-story'),
    ...document.querySelectorAll('.reviews'),
    ...document.querySelectorAll('.contact-inner')
  ];

  animated.forEach((el, index) => {
    el.classList.add('reveal');
    if (el.classList.contains('process-step')) el.classList.add(`reveal-delay-${Math.min(index % 4, 3)}`);
  });

  const processLine = document.querySelector('.process-line');
  if (!('IntersectionObserver' in window)) {
    animated.forEach(el => el.classList.add('is-visible'));
    if (processLine) processLine.classList.add('is-visible');
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -6% 0px' });

  animated.forEach(el => observer.observe(el));
  if (processLine) observer.observe(processLine);
});
