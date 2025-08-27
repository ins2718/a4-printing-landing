export default function Order() {
    return <section id="order" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                    <h2 className="text-2xl font-bold">Онлайн-заказ</h2>
                    <p className="mt-2 text-slate-600">Прикрепите файл, укажите параметры — мы подтвердим стоимость и сроки в мессенджере.</p>
                    <form id="orderForm" className="mt-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Тип услуги</label>
                            <select id="service" className="mt-1 w-full rounded-xl border px-3 py-2">
                                <option value="print">Печать A4</option>
                                <option value="copy">Копирование A4</option>
                                <option value="scan">Сканирование A4</option>
                                <option value="lamination">Ламинирование A4</option>
                            </select>
                        </div>

                        <div id="fileBlock" className="hidden">
                            <label className="block text-sm font-medium">Файл (PDF, DOCX, JPG/PNG)</label>
                            <input id="fileInput" type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="mt-1 w-full rounded-xl border px-3 py-2 bg-white" />
                            <p className="mt-1 text-xs text-slate-500">Если нет файла — можно принести на флешке.</p>
                        </div>

                        <div id="printOptions" className="hidden grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Цветность</label>
                                <select id="colorMode" className="mt-1 w-full rounded-xl border px-3 py-2">
                                    <option value="bw">Ч/б</option>
                                    <option value="color">Цвет</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Печать</label>
                                <select id="sides" className="mt-1 w-full rounded-xl border px-3 py-2">
                                    <option value="1">Односторонняя</option>
                                    <option value="2">Двусторонняя</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Страниц</label>
                                <input id="pages" type="number" min="1" value="1" className="mt-1 w-full rounded-xl border px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Экземпляров</label>
                                <input id="copies" type="number" min="1" value="1" className="mt-1 w-full rounded-xl border px-3 py-2" />
                            </div>
                        </div>

                        <div id="copyOptions" className="hidden grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Страниц оригинала</label>
                                <input id="copyPages" type="number" min="1" value="1" className="mt-1 w-full rounded-xl border px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Экземпляров</label>
                                <input id="copyCopies" type="number" min="1" value="1" className="mt-1 w-full rounded-xl border px-3 py-2" />
                            </div>
                        </div>

                        <div id="scanOptions" className="hidden grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Страниц</label>
                                <input id="scanPages" type="number" min="1" value="1" className="mt-1 w-full rounded-xl border px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Формат</label>
                                <select id="scanFormat" className="mt-1 w-full rounded-xl border px-3 py-2">
                                    <option>PDF</option>
                                    <option>JPG</option>
                                </select>
                            </div>
                        </div>

                        <div id="lamOptions" className="hidden">
                            <label className="block text-sm font-medium">Листов для ламинирования</label>
                            <input id="lamSheets" type="number" min="1" value="1" className="mt-1 w-full rounded-xl border px-3 py-2" />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Ваше имя</label>
                                <input id="clientName" type="text" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Иван" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Контакт (телеграм/ватсап/тел.)</label>
                                <input id="clientContact" type="text" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="@username или +7..." />
                            </div>
                        </div>

                        <div className="rounded-2xl bg-slate-50 p-4">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-600">Предварительная стоимость</span>
                                <strong id="price" className="text-xl">0 ₽</strong>
                            </div>
                            <p className="mt-1 text-xs text-slate-500">Итоговую цену подтвердим после проверки файла/оригинала.</p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <button type="button" id="sendWhatsApp" className="inline-flex items-center rounded-xl bg-primary-600 px-5 py-3 text-white shadow-soft hover:bg-primary-700">Отправить в WhatsApp</button>
                            <a id="telLink" href="tel:+70000000000" className="inline-flex items-center rounded-xl border px-5 py-3 hover:bg-slate-50">Позвонить</a>
                            <a id="mailLink" href="#" className="inline-flex items-center rounded-xl border px-5 py-3 hover:bg-slate-50">Отправить на email</a>
                        </div>
                    </form>
                </div>

                <aside className="rounded-2xl border p-6 shadow-soft">
                    <h3 className="font-semibold">Почему мы</h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
                        <li>Скорость: готово от 1 минуты</li>
                        <li>Качество печати и точная цветопередача</li>
                        <li>Удобная локация и понятные цены</li>
                        <li>Отправим сканы сразу в мессенджер или на email</li>
                    </ul>
                    <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm">
                        <p><strong>График:</strong> Пн–Сб 10:00–20:00, Вс 11:00–18:00</p>
                        <p className="mt-1"><strong>Оплата:</strong> наличные, карты</p>
                    </div>
                </aside>
            </div>
        </div>
    </section>;
}