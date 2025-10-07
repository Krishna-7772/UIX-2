export default function History() {
  return (
    <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-[color:var(--suyog-surface)] p-5">
      <h2 className="text-lg font-semibold mb-4">Expense History</h2>
      <div className="relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--suyog-marigold)] via-[color:var(--suyog-peacock)] to-transparent" />
        <ul className="grid gap-6">
          {[...Array(5)].map((_, i) => (
            <li key={i} className="relative">
              <div className="absolute -left-4 top-1 size-3 rounded-full bg-[color:var(--suyog-saffron)] shadow" />
              <div className="rounded-xl bg-white/70 dark:bg-white/5 px-4 py-3">
                <div className="text-sm font-medium">Transaction {i + 1}</div>
                <div className="text-xs text-black/60 dark:text-white/60">Scroll-Painting timeline placeholder – tiny icons and parallax coming soon.</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
