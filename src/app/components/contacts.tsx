export default function Contacts() {
  return <section id="contacts" className="py-16 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-start">
      <div>
        <h2 className="text-2xl font-bold">Контакты</h2>
        <div className="mt-4 space-y-2 text-slate-700">
          <p><strong>Адрес:</strong> Город, Улица, дом 1</p>
          <p><strong>Телефон:</strong> <a className="text-primary-700" href="tel:+70000000000">+7 (000) 000-00-00</a></p>
          <p><strong>WhatsApp:</strong> <a className="text-primary-700" href="https://wa.me/YOURNUMBER" target="_blank" rel="noopener">wa.me/YOURNUMBER</a></p>
          <p><strong>Email:</strong> <a className="text-primary-700" href="mailto:info@example.com">info@example.com</a></p>
          <p><strong>Часы работы:</strong> Пн–Сб 10:00–20:00, Вс 11:00–18:00</p>
        </div>
        <div className="mt-6 flex gap-3">
          <a href="#order" className="inline-flex items-center rounded-xl bg-primary-600 px-5 py-3 text-white shadow-soft hover:bg-primary-700">Сделать заказ</a>
          <a href="https://wa.me/YOURNUMBER" target="_blank" rel="noopener" className="inline-flex items-center rounded-xl border px-5 py-3 hover:bg-white">Написать в WhatsApp</a>
        </div>
      </div>
      <div>
        <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-soft bg-white">
          <div className="h-full w-full flex items-center justify-center text-slate-500 text-sm p-6">
            Вставьте здесь карту (iframe) с вашей меткой. <br />Например, код встраивания Google Maps или Яндекс.Карты.
          </div>
        </div>
        <p className="mt-2 text-xs text-slate-500">Подсказка: найдите ваш адрес на карте и используйте «Поделиться» → «Встраивание».</p>
      </div>
    </div>
  </section>;
}