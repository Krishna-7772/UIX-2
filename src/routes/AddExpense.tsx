import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function AddExpense() {
  const [message, setMessage] = useState<string | null>(null)
  const [splitMode, setSplitMode] = useState<'equal' | 'percentage' | 'custom'>('equal')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Placeholder success for now; data model comes next
    setMessage('Expense added successfully! S.U.Y.O.G balance maintained 🌸')
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-2xl border border-black/5 dark:border-white/10 bg-[color:var(--suyog-surface)] p-5">
        <h2 className="text-lg font-semibold mb-4">Add Expenses</h2>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-1">
            <label className="text-sm opacity-70" htmlFor="title">Title</label>
            <input id="title" required placeholder="Chai, groceries, cab..." className="focus-ring rounded-xl bg-white/70 dark:bg-white/5 px-3 py-2 outline-none" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm opacity-70" htmlFor="amount">Amount (₹)</label>
            <input id="amount" required type="number" min={0} step="0.01" placeholder="200" className="focus-ring rounded-xl bg-white/70 dark:bg-white/5 px-3 py-2 outline-none" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm opacity-70" htmlFor="payer">Who Paid</label>
            <input id="payer" required placeholder="Raj, Meera..." className="focus-ring rounded-xl bg-white/70 dark:bg-white/5 px-3 py-2 outline-none" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm opacity-70" htmlFor="participants">Participants (comma separated)</label>
            <input id="participants" required placeholder="Raj, Meera, Aman" className="focus-ring rounded-xl bg-white/70 dark:bg-white/5 px-3 py-2 outline-none" />
          </div>

          <div className="grid gap-2">
            <div className="text-sm opacity-70">Split Logic</div>
            <div className="flex flex-wrap gap-2">
              {(['equal','percentage','custom'] as const).map(mode => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setSplitMode(mode)}
                  className={[
                    'px-3 py-1.5 rounded-full text-sm border',
                    'border-black/5 dark:border-white/10',
                    splitMode === mode ? 'ring-2 ring-[color:var(--suyog-peacock)]' : 'opacity-80',
                  ].join(' ')}
                >
                  {mode === 'equal' ? 'Equal' : mode === 'percentage' ? 'Percentage' : 'Custom'}
                </button>
              ))}
            </div>

            {splitMode === 'percentage' && (
              <p className="text-xs text-black/70 dark:text-white/70">Enter percentages in the notes for now. Detailed allocation UI comes next.</p>
            )}
            {splitMode === 'custom' && (
              <p className="text-xs text-black/70 dark:text-white/70">Custom per-person inputs will appear here in the next iteration.</p>
            )}
          </div>

          <button className="focus-ring rounded-xl bg-[color:var(--suyog-saffron)] text-black font-medium px-4 py-2 hover:brightness-95">
            Add Expense
          </button>

          {message && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl bg-[color:var(--suyog-peacock)]/10 text-[color:var(--suyog-peacock)] px-3 py-2"
            >
              {message}
            </motion.div>
          )}
        </form>
      </section>

      <section className="rounded-2xl border border-black/5 dark:border-white/10 bg-[color:var(--suyog-surface)] p-5">
        <h3 className="text-base font-semibold mb-2">Mandala Preview</h3>
        <div className="grid place-items-center p-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 140, damping: 14 }}
            className="relative size-56 rounded-full bg-gradient-to-br from-[color:var(--suyog-sandstone)] to-[color:var(--suyog-terracotta)] shadow-inner"
          >
            {/* Petals */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 h-1/2 w-1 rounded-t-full"
                style={{
                  transform: `rotate(${i * 30}deg) translate(-50%, -95%)`,
                  background: 'radial-gradient(circle at 50% 20%, var(--suyog-marigold), transparent 60%)',
                  opacity: 0.7,
                }}
              />
            ))}
          </motion.div>
        </div>
        <p className="text-xs text-black/60 dark:text-white/60 text-center">Mandala Expense Cards will animate here. “Balance maintained by S.U.Y.O.G 🌺”</p>
      </section>
    </div>
  )
}
