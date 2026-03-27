import { BookingWidget } from './booking-widget'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Get in Touch</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">Book a Table</h2>
        </div>

        <div className="max-w-2xl">
          {/* Update data-restaurant slug after restaurant signup */}
          <BookingWidget restaurant="kiku" />
        </div>
      </div>
    </section>
  )
}
