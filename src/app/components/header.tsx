export default function Header() {
  return <header className="fixed top-0 inset-x-0 z-40 glass shadow-soft">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#top" className="flex items-center gap-2 font-semibold">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary-600 text-white">A4</span>
        <span>Док-центр</span>
      </a>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#services" className="hover:text-primary-700">Услуги</a>
        <a href="#prices" className="hover:text-primary-700">Цены</a>
        <a href="#order" className="hover:text-primary-700">Заказ онлайн</a>
        <a href="#contacts" className="hover:text-primary-700">Контакты</a>
      </nav>
      <div className="flex items-center gap-2">
        <a href="tel:+70000000000" className="hidden sm:inline-block text-sm">+7 (000) 000-00-00</a>
        <a href="#order" className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-4 py-2 text-white shadow-soft hover:bg-primary-700 transition">Заказать</a>
      </div>
    </div>
  </header>;
}