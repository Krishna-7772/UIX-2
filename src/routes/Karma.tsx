import { motion } from 'framer-motion'

export default function Karma() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <section className="rounded-2xl border border-black/5 dark:border-white/10 bg-[color:var(--suyog-surface)] p-5">
        <h2 className="text-lg font-semibold mb-4">Karma Chakra</h2>
        <div className="grid place-items-center py-6">
          <motion.div
            initial={{ rotate: -12, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            className="relative size-64 rounded-full bg-gradient-to-br from-[color:var(--suyog-peacock)]/20 to-[color:var(--suyog-saffron)]/20"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="absolute left-1/2 top-1/2 h-1/2 w-1 rounded-t-full bg-[color:var(--suyog-peacock)]/25" style={{ transform: `rotate(${i * 36}deg) translate(-50%, -90%)` }} />
            ))}
          </motion.div>
        </div>
        <p className="text-xs text-center text-black/60 dark:text-white/60">S.U.Y.O.G Leaderboard – Grow Together 🌺</p>
      </section>

      <section className="rounded-2xl border border-black/5 dark:border-white/10 bg-[color:var(--suyog-surface)] p-5">
        <h3 className="text-base font-semibold mb-3">Leaderboard</h3>
        <ul className="grid gap-2 text-sm">
          {['Raj','Meera','Aman','Anita'].map((name, i) => (
            <li key={name} className="flex items-center justify-between rounded-xl bg-white/70 dark:bg-white/5 px-4 py-2">
              <span>{i + 1}. {name}</span>
              <span className="text-[color:var(--suyog-jade)]">+{(10 - i) * 7} karma</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
