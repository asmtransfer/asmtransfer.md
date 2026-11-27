(function(){'use strict';const config={"ru": {"hello": "Здравствуйте! Хочу заказать трансфер ASM Transfer.", "labels": ["Дата поездки", "Время подачи", "Адрес подачи", "Адрес назначения", "Пассажиры", "Багаж", "Детское кресло: возраст ребёнка", "Номер рейса, если встреча в аэропорту", "Обратная поездка и пожелания"], "confirm": "Подтвердите, пожалуйста, наличие автомобиля и общую стоимость."}, "en": {"hello": "Hello! I would like to book an ASM Transfer ride.", "labels": ["Travel date", "Pickup time", "Pickup address", "Destination address", "Passengers", "Luggage", "Child seat: child’s age", "Flight number for airport pickup", "Return trip and requests"], "confirm": "Please confirm vehicle availability and the total price."}, "it": {"hello": "Buongiorno! Vorrei prenotare un viaggio con ASM Transfer.", "labels": ["Data del viaggio", "Orario di partenza", "Indirizzo di partenza", "Indirizzo di destinazione", "Passeggeri", "Bagagli", "Seggiolino: età del bambino", "Numero del volo per incontro in aeroporto", "Ritorno e richieste"], "confirm": "Potete confermare la disponibilità e il prezzo totale?"}, "ro": {"hello": "Bună ziua! Doresc să rezerv o călătorie ASM Transfer.", "labels": ["Data călătoriei", "Ora preluării", "Adresa de preluare", "Adresa destinației", "Pasageri", "Bagaje", "Scaun pentru copii: vârsta copilului", "Numărul zborului pentru preluare la aeroport", "Retur și solicitări"], "confirm": "Confirmați disponibilitatea și prețul total, vă rog."}, "tr": {"hello": "Merhaba! ASM Transfer ile yolculuk rezervasyonu yapmak istiyorum.", "labels": ["Seyahat tarihi", "Alınma saati", "Alınma adresi", "Varış adresi", "Yolcular", "Bagaj", "Çocuk koltuğu: çocuğun yaşı", "Havalimanı karşılaması için uçuş numarası", "Dönüş ve istekler"], "confirm": "Araç uygunluğunu ve toplam fiyatı onaylar mısınız?"}};document.querySelectorAll('.asm-route-form').forEach(form=>{const fields=form.querySelector('fieldset');
const direction=form.elements.direction;
if(direction){
  const from=form.elements.from;
  const to=form.elements.to;
  const addresses={
    departure:[from.defaultValue,to.defaultValue],
    arrival:[to.defaultValue,from.defaultValue]
  };
  let previous='departure';
  function showDirection(){
    const next=direction.value;
    if(!Object.prototype.hasOwnProperty.call(addresses,next)||next===previous)return;
    addresses[previous]=[from.value,to.value];
    [from.value,to.value]=addresses[next];
    previous=next;
  }
  direction.addEventListener('change',showDirection);
  showDirection();
}
const date=form.elements.date;const now=new Date();const today=[now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-');date.min=today;form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;if(date.value<today){date.setCustomValidity({ru:'Выберите сегодняшнюю или будущую дату',en:'Choose today or a future date',it:'Scegli oggi o una data futura',ro:'Alege data de azi sau una viitoare',tr:'Bugünü veya gelecek bir tarihi seçin'}[form.dataset.language]);date.reportValidity();return;}date.setCustomValidity('');const c=config[form.dataset.language];const names=['date','time','from','to','people','luggage','child','flight','note'];const lines=[c.hello,direction&&direction.value==='arrival'?form.dataset.returnRoute:form.dataset.route];names.forEach((name,i)=>{const value=form.elements[name].value.trim();if(value)lines.push(c.labels[i]+': '+value);});lines.push(c.confirm);if(typeof window.asmAnalyticsTrack==='function')window.asmAnalyticsTrack({contact_method:'whatsapp',page_path:location.pathname,placement:'route_form'});window.open('https://wa.me/37377950129?text='+encodeURIComponent(lines.join('\n')),'_blank','noopener');});date.addEventListener('input',()=>date.setCustomValidity(''));if(fields){fields.disabled=false;form.hidden=false;}});})();