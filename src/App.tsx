import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'

import AddExpense from './routes/AddExpense'
import Summary from './routes/Summary'
import History from './routes/History'
import Karma from './routes/Karma'
import Pay from './routes/Pay'
import { useEffect, useState } from 'react'

function App() {
  const location = useLocation()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [isDark])

  const tabs = [
    { to: '/', label: 'Add Expense' },
    { to: '/summary', label: 'Summary' },
    { to: '/history', label: 'History' },
    { to: '/karma', label: 'Karma' },
    { to: '/pay', label: 'Pay Now' },
  ]

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 backdrop-blur bg-[color:var(--suyog-bg)]/70 dark:bg-[color:var(--suyog-surface)]/70 border-b border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ rotate: -8, scale: 0.9, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 140, damping: 12 }}
              className="size-10 rounded-full bg-[color:var(--suyog-saffron)] shadow-sm flex items-center justify-center"
              aria-hidden
            >
              <span className="text-xl">🕉️</span>
            </motion.div>
            <div>
              <div className="text-xl sm:text-2xl font-bold tracking-wide">
                S.U.Y.O.G
              </div>
              <div className="text-xs sm:text-sm text-black/60 dark:text-white/60">
                Smart User Yielding Organized Growth
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="focus-ring rounded-full px-3 py-1 text-sm bg-[color:var(--suyog-peacock)]/10 text-[color:var(--suyog-peacock)] hover:bg-[color:var(--suyog-peacock)]/15"
              onClick={() => setIsDark(v => !v)}
              aria-label="Toggle dark mode"
            >
              {isDark ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
        <nav className="mx-auto max-w-6xl px-2 pb-3">
          <ul className="flex flex-wrap gap-2">
            {tabs.map(tab => (
              <li key={tab.to}>
                <NavLink
                  to={tab.to}
                  className={({ isActive }) => [
                    'px-3 py-1.5 rounded-full text-sm',
                    'border border-black/5 dark:border-white/10',
                    'bg-[color:var(--suyog-surface)] text-[color:var(--suyog-text)]',
                    isActive ? 'ring-2 ring-[color:var(--suyog-peacock)]' : '',
                  ].join(' ')}
                  end={tab.to === '/'}
                >
                  {tab.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="mx-auto max-w-6xl px-4 py-6"
        >
          <Routes location={location}>
            <Route path="/" element={<AddExpense />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/history" element={<History />} />
            <Route path="/karma" element={<Karma />} />
            <Route path="/pay" element={<Pay />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <footer className="mx-auto max-w-6xl px-4 py-10 text-center text-sm text-black/60 dark:text-white/60">
        “S.U.Y.O.G flows like water, aligning every expense, every user, every balance into organized growth.”
      </footer>
    </div>
  )
}

export default App
