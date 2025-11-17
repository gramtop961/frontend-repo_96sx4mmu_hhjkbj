import { Wallet2, Link2, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Wallet2,
    title: "Подключите кошелек",
    desc: "Поддерживаем популярные сети и мультисиг-кошельки.",
  },
  {
    icon: Link2,
    title: "Создайте платежную ссылку",
    desc: "Укажите сумму, валюту и комментарий — получите ссылку или QR.",
  },
  {
    icon: CheckCircle2,
    title: "Получите оплату",
    desc: "Покупатель оплачивает — вы видите статус и получаете уведомление.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Как это работает</h2>
          <p className="mt-3 text-blue-900/70">Три шага от регистрации до первой оплаты.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="p-6 rounded-2xl bg-white border border-blue-100 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 text-white grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-blue-950">{i + 1}. {title}</h3>
              <p className="mt-2 text-sm text-blue-900/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
