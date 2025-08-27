export default function Hero() {
    return <section id="top" className="pt-28 bg-gradient-to-br from-primary-600 via-primary-500 to-purple-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">Копирование, печать, сканирование и ламинирование A4</h1>
                <p className="mt-4 text-white/90 text-lg">Сделаем за 1–5 минут. Ч/б и цвет. Скан в PDF/JPG. Ламинация для защиты документов. Прозрачные цены, рядом с вами.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                    <a href="#order" className="inline-flex items-center rounded-xl bg-white text-primary-700 px-5 py-3 font-semibold shadow-soft hover:opacity-95">Напечатать документ</a>
                    <a href="#prices" className="inline-flex items-center rounded-xl bg-white/10 px-5 py-3 font-semibold hover:bg-white/20">Смотреть цены</a>
                </div>
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/90">
                    <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-300"></span>Открыто сегодня: 10:00–20:00</span>
                    <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-300"></span>Оплата картой и наличными</span>
                </div>
            </div>
            <div>
                <div className="bg-white/10 rounded-2xl p-6 shadow-soft">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="rounded-xl bg-white/20 p-4">
                            <p className="opacity-80">Печать A4 ч/б</p>
                            <p className="text-2xl font-extrabold">от 7 ₽</p>
                        </div>
                        <div className="rounded-xl bg-white/20 p-4">
                            <p className="opacity-80">Печать A4 цвет</p>
                            <p className="text-2xl font-extrabold">от 15 ₽</p>
                        </div>
                        <div className="rounded-xl bg-white/20 p-4">
                            <p className="opacity-80">Скан / стр.</p>
                            <p className="text-2xl font-extrabold">15 ₽</p>
                        </div>
                        <div className="rounded-xl bg-white/20 p-4">
                            <p className="opacity-80">Ламинация A4</p>
                            <p className="text-2xl font-extrabold">50 ₽</p>
                        </div>
                    </div>
                    <p className="mt-3 text-xs text-white/80">*Все цены можно отредактировать в коде.</p>
                </div>
            </div>
        </div>
    </section>;
}