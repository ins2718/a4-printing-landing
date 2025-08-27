import { useMemo } from "react";

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return <footer className="py-8">
    <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
      <p>© {year} Док-центр A4. Все права защищены.</p>
      <div className="flex gap-4">
        <a href="#" className="hover:text-slate-700">Политика конфиденциальности</a>
        <a href="#" className="hover:text-slate-700">Публичная оферта</a>
      </div>
    </div>
  </footer>;
}