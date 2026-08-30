document.addEventListener('DOMContentLoaded', () => {
  const reviewsSection = document.querySelector('.reviews');
  if (!reviewsSection) return;

  const reviewStyle = document.createElement('style');
  reviewStyle.textContent = `
    .reviews.review-showcase{display:block;padding-top:92px;padding-bottom:92px;background:radial-gradient(circle at 100% 100%,rgba(243,196,0,.16) 0,rgba(243,196,0,.055) 25%,transparent 54%),#101012;overflow:hidden}
    .reviews-head{display:flex;align-items:flex-end;justify-content:space-between;gap:30px;margin-bottom:30px}
    .reviews-title h2{margin:0;font-size:clamp(42px,5vw,72px);line-height:.92;letter-spacing:-.045em}
    .reviews-title h2 span{color:#f3c400}
    .reviews-summary{display:flex;align-items:center;gap:12px;margin-top:16px;color:#c8c8ca}
    .reviews-score{font-size:22px;font-weight:900;color:#fff}
    .reviews-stars,.review-stars{color:#f3c400;letter-spacing:.05em}
    .google-mark{display:inline-flex;align-items:center;gap:7px;color:#a8a8aa;font-size:13px;font-weight:800}
    .google-g{font-weight:950;font-size:18px;background:conic-gradient(from -45deg,#4285f4 0 25%,#34a853 0 45%,#fbbc05 0 70%,#ea4335 0 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
    .reviews-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
    .review-card{position:relative;min-height:275px;padding:24px;border:1px solid rgba(255,255,255,.09);border-radius:16px;background:linear-gradient(145deg,rgba(24,24,26,.96),rgba(15,15,17,.96));box-shadow:0 18px 50px rgba(0,0,0,.2);display:flex;flex-direction:column}
    .review-card::after{content:"“";position:absolute;right:18px;top:6px;color:rgba(243,196,0,.10);font-size:80px;font-family:Georgia,serif;line-height:1}
    .review-top{display:flex;align-items:center;justify-content:space-between;gap:12px;position:relative;z-index:1}
    .review-name{font-size:17px;font-weight:900;color:#fff}
    .review-stars{font-size:14px;margin-top:5px}
    .review-card p{position:relative;z-index:1;margin:18px 0 20px;color:#c3c3c6;font-size:15px;line-height:1.55;flex:1}
    .review-source{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;gap:10px;padding-top:15px;border-top:1px solid rgba(255,255,255,.08);color:#8f8f92;font-size:12px}
    .reviews-footer{display:flex;align-items:center;justify-content:flex-end;gap:20px;margin-top:24px}
    .review-link{white-space:nowrap}
    @media(max-width:900px){.reviews-grid{grid-template-columns:1fr 1fr}.review-card:last-child{grid-column:1/-1;min-height:auto}}
    @media(max-width:760px){
      .reviews.review-showcase{padding-top:70px;padding-bottom:76px}
      .reviews-head{align-items:flex-start;flex-direction:column;margin-bottom:24px}
      .reviews-grid{display:flex;overflow-x:auto;gap:12px;margin-left:-22px;margin-right:-22px;padding:0 22px 12px;scroll-snap-type:x mandatory;scrollbar-width:none}
      .reviews-grid::-webkit-scrollbar{display:none}
      .review-card,.review-card:last-child{flex:0 0 86%;min-height:280px;scroll-snap-align:start;padding:22px}
      .review-card p{font-size:15px}
      .reviews-footer{justify-content:stretch}
      .review-link{width:100%}
    }
  `;
  document.head.appendChild(reviewStyle);

  const reviews = [
    {
      name: 'Анастасия Гросу',
      text: 'Пользуемся услугами Михаила уже более двух лет и всегда очень довольны. Внимательный, пунктуальный и вежливый водитель, в салоне всегда чисто. Однозначно рекомендуем!',
      date: 'август 2026'
    },
    {
      name: 'Серёжа Шахновский',
      text: 'Пользуемся услугами ASM Transfer уже не первый год. Отличный сервис: пунктуальность, внимательность и приятная атмосфера в дороге. Рекомендуем всем друзьям и знакомым!',
      date: 'август 2026'
    },
    {
      name: 'Надежда Кара',
      text: 'Отличная поездка, водитель очень внимательный. Встреча в аэропорту и комфортная дорога домой. В машине есть вода и Wi‑Fi. Рекомендую услуги этой компании.',
      date: 'август 2026'
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
          <span>Google</span>
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
      <a class="btn btn-ghost review-link" href="https://tinyurl.com/yc4ypwxu" target="_blank" rel="noopener">Все отзывы в Google →</a>
    </div>
  `;
});
