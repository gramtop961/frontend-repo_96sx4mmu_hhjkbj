import { ShieldCheck, Zap, QrCode, BarChart3 } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Без посредников",
    desc: "Средства идут напрямую на ваш кошелек. Ключи — у вас.",
  },
  {
    icon: Zap,
    title: "Моментальные оплаты",
    desc: "Подтверждение в сети и автоматическая фиксация статуса.",
  },
  {
    icon: QrCode,
    title: "Платежные ссылки и QR",
    desc: "Создавайте инвойсы одним кликом и делитесь ссылкой.",
  },
  {
    icon: BarChart3,
    title: "Аналитика и уведомления",
    desc: "Дашборд с метриками и webhook-уведомления в реальном времени.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Почему BluePay</h2>
          <p className="mt-3 text-blue-900/70">
            Всё, что нужно интернет‑бизнесу для приема криптовалюты — с акцентом на простоту, безопасность и скорость.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 text-white grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-blue-950">{title}</h3>
              <p className="mt-2 text-sm text-blue-900/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
