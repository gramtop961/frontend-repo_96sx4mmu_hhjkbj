export default function CTA() {
  return (
    <section id="start" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-blue-600 p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <h3 className="text-3xl md:text-4xl font-bold">Готовы принимать крипто без комиссий?</h3>
          <p className="mt-3 text-white/90 max-w-2xl">
            Зарегистрируйтесь и получите доступ к дашборду, API и готовым виджетам.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#" className="px-6 py-3 rounded-md bg-white text-blue-700 font-medium shadow-md">
              Создать аккаунт
            </a>
            <a href="#docs" className="px-6 py-3 rounded-md bg-white/10 border border-white/30 text-white">
              Смотреть документацию
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
