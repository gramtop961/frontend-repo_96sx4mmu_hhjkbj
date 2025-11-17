import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <footer className="py-10 border-t border-blue-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-blue-900/70 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} BluePay. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-blue-900">Политика конфиденциальности</a>
            <a href="#terms" className="hover:text-blue-900">Условия</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App