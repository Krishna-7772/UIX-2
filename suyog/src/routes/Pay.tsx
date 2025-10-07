import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Pay() {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-[color:var(--suyog-surface)] p-5">
      <h2 className="text-lg font-semibold mb-4">S.U.Y.O.G Payment Portal</h2>
      <button className="focus-ring rounded-xl bg-[color:var(--suyog-peacock)] text-white px-4 py-2" onClick={() => setOpen(true)}>Pay Now (Mock)</button>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="relative w-full max-w-md rounded-3xl bg-[color:var(--suyog-surface)] p-6 shadow-xl"
            >
              <button onClick={() => setOpen(false)} className="absolute right-3 top-3 text-sm opacity-60 hover:opacity-100">✕</button>
              <div className="mb-4 text-center text-lg font-semibold">Temple Arch</div>
              <div className="mb-6 grid place-items-center">
                <div className="w-full h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                  <motion.div className="h-full bg-gradient-to-r from-[color:var(--suyog-peacock)] to-[color:var(--suyog-saffron)]" initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 2, repeat: Infinity }} />
                </div>
                <div className="mt-2 text-xs text-black/60 dark:text-white/60">Animated peacock feather progress</div>
              </div>
              <p className="text-xs text-center text-black/60 dark:text-white/60">Pay your share and see organized growth flow ✨</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
