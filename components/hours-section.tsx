const hours = [
  { day: 'Monday – Friday', time: '11:00 – 21:00' },
  { day: 'Saturday – Sunday', time: '12:00 – 21:00' },
]

export function HoursSection() {
  return (
    <section id="hours" className="py-20 px-6 bg-muted">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Opening</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            Hours
          </h2>
        </div>

        <div className="divide-y divide-border max-w-sm">
          {hours.map(({ day, time }) => (
            <div key={day} className="flex items-center justify-between py-4">
              <span className="text-sm text-foreground">{day}</span>
              <span className="text-sm font-medium text-foreground tabular-nums">{time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
