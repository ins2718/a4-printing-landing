export default function Prices() {
  return <section id="prices" className="py-14 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold">Цены</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-slate-500">
              <th className="py-3 pr-4">Услуга</th>
              <th className="py-3 pr-4">Описание</th>
              <th className="py-3 pr-4">Цена</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="py-3 pr-4 font-medium">Печать A4 (ч/б)</td>
              <td className="py-3 pr-4">односторонняя / двусторонняя</td>
              <td className="py-3 pr-4">от <strong>7 ₽</strong> за страницу</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-medium">Печать A4 (цвет)</td>
              <td className="py-3 pr-4">односторонняя / двусторонняя</td>
              <td className="py-3 pr-4">от <strong>15 ₽</strong> за страницу</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-medium">Копирование A4</td>
              <td className="py-3 pr-4">с оригинала</td>
              <td className="py-3 pr-4">от <strong>5 ₽</strong> за страницу</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-medium">Сканирование A4</td>
              <td className="py-3 pr-4">PDF/JPG, объединение файлов</td>
              <td className="py-3 pr-4"><strong>15 ₽</strong> за страницу</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-medium">Ламинирование A4</td>
              <td className="py-3 pr-4">глянцевая плёнка</td>
              <td className="py-3 pr-4"><strong>50 ₽</strong> за лист</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-slate-500">Указаны базовые цены. Итоговая стоимость зависит от объёма, плотности бумаги и доп. работ (обрезка, компоновка).</p>
    </div>
  </section>;
}