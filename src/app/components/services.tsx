export default function Services() {
    return <section id="services" className="py-14">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold">Услуги</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl border shadow-soft">
                    <div className="text-primary-700 font-semibold">Копирование</div>
                    <p className="mt-2 text-sm text-slate-600">Оперативные копии с оригинала. Качество и точность тонера.</p>
                </div>
                <div className="p-6 rounded-2xl border shadow-soft">
                    <div className="text-primary-700 font-semibold">Печать A4</div>
                    <p className="mt-2 text-sm text-slate-600">Чёрно-белая и цветная печать из PDF, DOCX, JPG/PNG.</p>
                </div>
                <div className="p-6 rounded-2xl border shadow-soft">
                    <div className="text-primary-700 font-semibold">Сканирование</div>
                    <p className="mt-2 text-sm text-slate-600">Скан в PDF/JPG с объединением страниц. Отправим на email/мессенджер.</p>
                </div>
                <div className="p-6 rounded-2xl border shadow-soft">
                    <div className="text-primary-700 font-semibold">Ламинирование</div>
                    <p className="mt-2 text-sm text-slate-600">Защита документов: пропуска, дипломы, сертификаты.</p>
                </div>
            </div>
        </div>
    </section>;
}