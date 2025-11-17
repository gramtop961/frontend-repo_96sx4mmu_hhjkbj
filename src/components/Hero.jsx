import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-[70vh] md:h-[80vh] w-full">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 via-white/30 to-white" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-blue-950 drop-shadow-sm">
              Принимайте крипто-платежи без комиссий и посредников
            </h1>
            <p className="mt-5 text-lg md:text-xl text-blue-900/80">
              Моментальные переводы, прямая работа с кошельками, прозрачная аналитика. Всё в одном инструменте.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#start" className="px-6 py-3 rounded-md bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-blue-500/20">
                Начать бесплатно
              </a>
              <a href="#docs" className="px-6 py-3 rounded-md bg-white/80 backdrop-blur border border-blue-200 text-blue-900">
                Документация API
              </a>
            </div>
            <p className="mt-4 text-sm text-blue-900/60">Поддержка Bitcoin, Ethereum, Solana, Tron и других сетей</p>
          </div>
        </div>
      </div>
    </section>
  );
}
