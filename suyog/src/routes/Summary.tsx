import { motion } from 'framer-motion'

export default function Summary() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(3)].map((_, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
          className="rounded-2xl border border-black/5 dark:border-white/10 bg-[color:var(--suyog-surface)] p-5"
        >
          <div className="mb-3 text-sm text-black/60 dark:text-white/60">Mandala Expense Card</div>
          <div className="grid place-items-center">
            <div className="relative size-40 rounded-full bg-gradient-to-tr from-[color:var(--suyog-peacock)]/20 to-[color:var(--suyog-saffron)]/25">
              {/* radial slices */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-1/2 w-px bg-black/10 dark:bg-white/10"
                  style={{ transform: `rotate(${i * 45}deg) translate(-50%, -100%)` }}
                />
              ))}
            </div>
          </div>
          <div className="mt-4 text-xs text-center">“Balance maintained by S.U.Y.O.G 🌺”</div>
        </motion.div>
      ))}
    </div>
  )
}
