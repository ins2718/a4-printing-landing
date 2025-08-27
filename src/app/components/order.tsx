"use client";

import { useState, useEffect, MouseEvent, useCallback } from "react";

// TODO: Замените на ваши реальные цены
const PRICES = {
    print: { bw: 7, color: 15 }, // ₽ за страницу (одна сторона)
    copy: 5, // ₽ за страницу
    scan: 15, // ₽ за страницу
    lamination: 50 // ₽ за лист A4
};

// TODO: Замените на ваш номер WhatsApp и email
const WHATSAPP_NUMBER = "YOURNUMBER"; // Например, 79990001122
const EMAIL_ADDRESS = "info@example.com";

export default function Order() {
    // Состояние для полей формы
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [service, setService] = useState("print");
    const [colorMode, setColorMode] = useState<"bw" | "color">("bw");
    const [sides, setSides] = useState("1");
    const [pages, setPages] = useState(1);
    const [copies, setCopies] = useState(1);
    const [copyPages, setCopyPages] = useState(1);
    const [copyCopies, setCopyCopies] = useState(1);
    const [scanPages, setScanPages] = useState(1);
    const [scanFormat, setScanFormat] = useState("PDF");
    const [lamSheets, setLamSheets] = useState(1);

    // Состояние для рассчитанной цены
    const [price, setPrice] = useState(0);

    // Логика расчета цены
    useEffect(() => {
        let newPrice = 0;
        try {
            switch (service) {
                case "print":
                    newPrice = PRICES.print[colorMode] * (pages || 0) * (copies || 0);
                    break;
                case "copy":
                    newPrice = PRICES.copy * (copyPages || 0) * (copyCopies || 0);
                    break;
                case "scan":
                    newPrice = PRICES.scan * (scanPages || 0);
                    break;
                case "lamination":
                    newPrice = PRICES.lamination * (lamSheets || 0);
                    break;
                default:
                    newPrice = 0;
            }
        } catch (error) {
            console.error("Ошибка расчета цены:", error);
            newPrice = 0;
        }
        setPrice(newPrice);
    }, [service, colorMode, sides, pages, copies, copyPages, copyCopies, scanPages, lamSheets]);

    // Генерация сводки для WhatsApp/Email
    const makeSummary = useCallback(() => {
        const nameText = name.trim() || "—";
        const contactText = contact.trim() || "—";
        let lines = [];
        lines.push("Новый заказ на услуги печати/копирования");
        lines.push(`Имя: ${nameText}`);
        lines.push(`Контакт: ${contactText}`);

        const serviceText = {
            print: "Печать документов",
            copy: "Копирование",
            scan: "Сканирование",
            lamination: "Ламинирование",
        }[service] || service;
        lines.push(`Услуга: ${serviceText}`);

        if (service === "print") {
            lines.push(`Цветность: ${colorMode === "bw" ? "Ч/б" : "Цвет"}`);
            lines.push(`Печать: ${sides === "2" ? "Двусторонняя" : "Односторонняя"}`);
            lines.push(`Страниц: ${pages}`);
            lines.push(`Экземпляров: ${copies}`);
        }
        if (service === "copy") {
            lines.push(`Страниц оригинала: ${copyPages}`);
            lines.push(`Экземпляров: ${copyCopies}`);
        }
        if (service === "scan") {
            lines.push(`Страниц: ${scanPages}`);
            lines.push(`Формат: ${scanFormat.toUpperCase()}`);
        }
        if (service === "lamination") {
            lines.push(`Листов для ламинации: ${lamSheets}`);
        }
        lines.push(`Предварительная сумма: ${price} ₽`);
        lines.push("Комментарий: ");
        return lines.join("%0A"); // URL-encoded newline
    }, [name, contact, service, colorMode, sides, pages, copies, copyPages, copyCopies, scanPages, scanFormat, lamSheets, price]);

    // Обработчики кликов
    const handleWhatsAppClick = useCallback(() => {
        const text = makeSummary();
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
        window.open(url, "_blank");
    }, [makeSummary]);

    const handleMailClick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const subject = encodeURIComponent("Заказ на услуги печати/копирования");
        const body = makeSummary();
        window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
    }, [makeSummary]);

    return <section id="order" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                    <h2 className="text-2xl font-bold">Онлайн-заказ</h2>
                    <p className="mt-2 text-slate-600">Прикрепите файл, укажите параметры — мы подтвердим стоимость и сроки в мессенджере.</p>
                    <form id="orderForm" className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium">Тип услуги</label>
                            <select value={service} onChange={(e) => setService(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2">
                                <option value="print">Печать A4</option>
                                <option value="copy">Копирование A4</option>
                                <option value="scan">Сканирование A4</option>
                                <option value="lamination">Ламинирование A4</option>
                            </select>
                        </div>

                        {(service === 'print' || service === 'scan') && <div>
                            <label className="block text-sm font-medium">Файл (PDF, DOCX, JPG/PNG)</label>
                            <input type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="mt-1 w-full rounded-xl border px-3 py-2 bg-white" />
                            <p className="mt-1 text-xs text-slate-500">Если нет файла — можно принести на флешке.</p>
                        </div>}

                        {service === 'print' && <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Цветность</label>
                                <select value={colorMode} onChange={(e) => setColorMode(e.target.value as "bw" | "color")} className="mt-1 w-full rounded-xl border px-3 py-2">
                                    <option value="bw">Ч/б</option>
                                    <option value="color">Цвет</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Печать</label>
                                <select value={sides} onChange={(e) => setSides(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2">
                                    <option value="1">Односторонняя</option>
                                    <option value="2">Двусторонняя</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Страниц</label>
                                <input value={pages} onChange={(e) => setPages(parseInt(e.target.value, 10) || 0)} type="number" min="1" className="mt-1 w-full rounded-xl border px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Экземпляров</label>
                                <input value={copies} onChange={(e) => setCopies(parseInt(e.target.value, 10) || 0)} type="number" min="1" className="mt-1 w-full rounded-xl border px-3 py-2" />
                            </div>
                        </div>}

                        {service === 'copy' && <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Страниц оригинала</label>
                                <input value={copyPages} onChange={(e) => setCopyPages(parseInt(e.target.value, 10) || 0)} type="number" min="1" className="mt-1 w-full rounded-xl border px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Экземпляров</label>
                                <input value={copyCopies} onChange={(e) => setCopyCopies(parseInt(e.target.value, 10) || 0)} type="number" min="1" className="mt-1 w-full rounded-xl border px-3 py-2" />
                            </div>
                        </div>}

                        {service === 'scan' && <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Страниц</label>
                                <input value={scanPages} onChange={(e) => setScanPages(parseInt(e.target.value, 10) || 0)} type="number" min="1" className="mt-1 w-full rounded-xl border px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Формат</label>
                                <select value={scanFormat} onChange={(e) => setScanFormat(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2">
                                    <option value="PDF">PDF</option>
                                    <option value="JPG">JPG</option>
                                </select>
                            </div>
                        </div>}

                        {service === 'lamination' && <div>
                            <label className="block text-sm font-medium">Листов для ламинирования</label>
                            <input value={lamSheets} onChange={(e) => setLamSheets(parseInt(e.target.value, 10) || 0)} type="number" min="1" className="mt-1 w-full rounded-xl border px-3 py-2" />
                        </div>}

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Ваше имя</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Иван" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Контакт (телеграм/ватсап/тел.)</label>
                                <input value={contact} onChange={(e) => setContact(e.target.value)} type="text" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="@username или +7..." />
                            </div>
                        </div>

                        <div className="rounded-2xl bg-slate-50 p-4">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-600">Предварительная стоимость</span>
                                <strong className="text-xl">{price} ₽</strong>
                            </div>
                            <p className="mt-1 text-xs text-slate-500">Итоговую цену подтвердим после проверки файла/оригинала.</p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <button type="button" onClick={handleWhatsAppClick} className="inline-flex items-center rounded-xl bg-primary-600 px-5 py-3 text-white shadow-soft hover:bg-primary-700">Отправить в WhatsApp</button>
                            <a href={`tel:+${WHATSAPP_NUMBER}`} className="inline-flex items-center rounded-xl border px-5 py-3 hover:bg-slate-50">Позвонить</a>
                            <a href="#" onClick={handleMailClick} className="inline-flex items-center rounded-xl border px-5 py-3 hover:bg-slate-50">Отправить на email</a>
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