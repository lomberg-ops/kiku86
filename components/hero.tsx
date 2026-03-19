import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Kiku86 sushi restaurant interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white text-balance mb-6 leading-tight">
          Kiku86
        </h1>
        <p className="text-base md:text-lg text-white/80 mb-10 text-pretty leading-relaxed">
          Tasty, delicious East Asian Cuisine dishes
        </p>
        <a
          href="tel:+358440551986"
          className="inline-flex items-center justify-center gap-2 bg-white text-foreground text-sm font-medium px-8 py-3 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.42a2 2 0 0 1 1.73-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.75a16 16 0 0 0 6 6l.88-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16h1.5v.92z" />
          </svg>
          Call Now
        </a>
      </div>
    </section>
  )
}
