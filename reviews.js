document.addEventListener('DOMContentLoaded', () => {
  const reviewsSection = document.querySelector('.reviews');
  if (!reviewsSection) return;

  const reviewStyle = document.createElement('style');
  reviewStyle.textContent = `
    .reviews.review-showcase{display:block;padding-top:100px;padding-bottom:100px;background:radial-gradient(circle at 100% 100%,rgba(243,196,0,.16) 0,rgba(243,196,0,.055) 25%,transparent 54%),#101012;overflow:hidden}
    .reviews-head{display:flex;align-items:flex-end;justify-content:space-between;gap:30px;margin-bottom:34px}
    .reviews-title h2{margin:0;font-size:clamp(42px,5vw,78px);line-height:.92;letter-spacing:-.045em}
    .reviews-title h2 span{color:#f3c400}
    .reviews-summary{display:flex;align-items:center;gap:12px;margin-top:18px;color:#c8c8ca}
    .reviews-score{font-size:22px;font-weight:900;color:#fff}
    .reviews-stars,.review-stars{color:#f3c400;letter-spacing:.05em}
    .google-mark{display:inline-flex;align-items:center;gap:7px;color:#a8a8aa;font-size:13px;font-weight:800}
    .google-g{font-weight:950;font-size:18px;background:conic-gradient(from -45deg,#4285f4 0 25%,#34a853 0 45%,#fbbc05 0 70%,#ea4335 0 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
    .reviews-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
    .review-card{position:relative;min-height:250px;padding:26px;border:1px solid rgba(255,255,255,.09);border-radius:16px;background:linear-gradient(145deg,rgba(24,24,26,.96),rgba(15,15,17,.96));box-shadow:0 18px 50px rgba(0,0,0,.2);display:flex;flex-direction:column}
    .review-card::after{content:"“";position:absolute;right:20px;top:8px;color:rgba(243,196,0,.10);font-size:86px;font-family:Georgia,serif;line-height:1}
    .review-top{display:flex;align-items:center;justify-content:space-between;gap:12px;position:relative;z-index:1}
    .review-name{font-size:18px;font-weight:900;color:#fff}
    .review-stars{font-size:15px;margin-top:5px}
    .review-card p{position:relative;z-index:1;margin:20px 0 22px;color:#c3c3c6;font-size:16px;line-height:1.55;flex:1}
    .review-source{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;gap:10px;padding-top:16px;border-top:1px solid rgba(255,255,255,.08);color:#8f8f92;font-size:12px}
    .reviews-footer{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:26px}
    .reviews-note{color:#8f8f92;font-size:13px}
    .review-link{white-space:nowrap}
    @media(max-width:760px){
      .reviews.review-showcase{padding-top:72px;padding-bottom:80px}
      .reviews-head{align-items:flex-start;flex-direction:column;margin-bottom:26px}
      .reviews-grid{display:flex;overflow-x:auto;gap:12px;margin-left:-22px;margin-right:-22px;padding:0 22px 12px;scroll-snap-type:x mandatory;scrollbar-width:none}
      .reviews-grid::-webkit-scrollbar{display:none}
      .review-card{flex:0 0 86%;min-height:290px;scroll-snap-align:start;padding:22px}
      .review-card p{font-size:15px}
      .reviews-footer{align-items:flex-start;flex-direction:column}
      .review-link{width:100%}
    }
  `;
  document.head.appendChild(reviewStyle);

  const reviews = [
    {
      name: 'Evgenia Pilipetska',
      text: 'Наш постоянный водитель — всегда на высоте! Пунктуальный, вежливый, с ним спокойно и комфортно в дороге. Отвёз и забрал из аэропорта точно по времени. Всегда приятно ездить. Спасибо за надёжность!',
      date: '10 месяцев назад'
    },
    {
      name: 'Надежда Кара',
      text: 'Отличная поездка, водитель очень внимательный и старательный. Встреча в аэропорту и быстрая дорога домой, а самое главное — комфорт. В машине есть водичка для всех и Wi‑Fi, что очень важно. Рекомендую услуги этой компании.',
      date: '5 дней назад'
    },
    {
      name: 'Olga Maltseva',
      text: 'У нас было две поездки Бендеры–Кишинёв и обратно. Михаилу огромное спасибо за супер комфорт, пунктуальность и спокойное вождение. Нам всё очень понравилось. Обязательно обратимся вновь!',
      date: '4 месяца назад'
    },
    {
      name: 'Elena D',
      text: 'Работаем с Мишей уже больше 10 лет! Ни разу не подвёл, всегда всё чётко, качественно, быстро и безопасно. Очень удобно, что в машине есть ещё и Wi‑Fi.',
      date: '4 месяца назад'
    }
  ];

  reviewsSection.classList.add('review-showcase');
  reviewsSection.innerHTML = `
    <div class="reviews-head">
      <div class="reviews-title">
        <div class="eyebrow">Отзывы клиентов</div>
        <h2><span>5,0 ★</span><br>НАМ ДОВЕРЯЮТ</h2>
        <div class="reviews-summary">
          <span class="reviews-score">5,0</span>
          <span class="reviews-stars">★★★★★</span>
          <span>13 отзывов</span>
        </div>
      </div>
      <span class="google-mark"><span class="google-g">G</span> Google</span>
    </div>
    <div class="reviews-grid">
      ${reviews.map(r => `
        <article class="review-card">
          <div class="review-top">
            <div><div class="review-name">${r.name}</div><div class="review-stars">★★★★★</div></div>
            <span class="google-mark"><span class="google-g">G</span></span>
          </div>
          <p>${r.text}</p>
          <div class="review-source"><span>Отзыв в Google</span><span>${r.date}</span></div>
        </article>
      `).join('')}
    </div>
    <div class="reviews-footer">
      <div class="reviews-note">На телефоне отзывы можно листать пальцем →</div>
      <a class="btn btn-ghost review-link" href="https://tinyurl.com/yc4ypwxu" target="_blank" rel="noopener">Все отзывы в Google →</a>
    </div>
  `;
});