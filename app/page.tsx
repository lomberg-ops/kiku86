import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { MenuSection } from '@/components/menu-section'
import { AboutSection } from '@/components/about-section'
import { HoursSection } from '@/components/hours-section'
import { LocationSection } from '@/components/location-section'
import { Footer } from '@/components/footer'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <MenuSection />
      <AboutSection />
      <HoursSection />
      <LocationSection />

      {/* Contact — inlined to avoid stale module cache */}
      <section id="contact" className="py-20 px-6 bg-muted">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Get in Touch</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">Contact</h2>
          </div>
          <div className="max-w-xs">
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Call us to make a reservation, ask about our menu, or get more information.
            </p>
            <a href="tel:+358440551986" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded bg-primary flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.42a2 2 0 0 1 1.73-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.75a16 16 0 0 0 6 6l.88-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16h1.5v.92z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-base font-medium text-foreground group-hover:underline">+358 44 0551986</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
