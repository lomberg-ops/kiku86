import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ImageCarousel } from '@/components/image-carousel'
import { MenuSection } from '@/components/menu-section'
import { AboutSection } from '@/components/about-section'
import { HoursSection } from '@/components/hours-section'
import { LocationSection } from '@/components/location-section'
import { Footer } from '@/components/footer'
import { BookingWidget } from '@/components/booking-widget'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <MenuSection />
      <AboutSection />
      <HoursSection />
      <LocationSection />

      {/* Booking — sakura image LEFT, widget RIGHT */}
      <section id="contact" className="py-20 px-6 bg-muted">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Get in Touch</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Book a Table</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* LEFT — Sakura image */}
            <div className="flex-1 w-full">
              <div className="relative aspect-[3/4] max-h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/images/booking-table.png"
                  alt="Japanese table setting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* RIGHT — Booking widget (UNCHANGED COMPONENT) */}
            <div className="flex-1 w-full">
              <BookingWidget restaurant="kiku" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
