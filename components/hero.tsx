import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sakura background */}
      <div className="absolute inset-0">
        <Image
          src="/images/sakura-hero.png"
          alt="Cherry blossom"
          fill
          priority
          className="object-cover"
        />
        {/* Warm overlay to blend with wood theme */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(232,213,183,0.3) 0%, rgba(232,213,183,0.5) 100%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Kiku86
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
          Tasty, delicious East Asian Cuisine dishes
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-8 py-3 rounded"
        >
          Book a Table
        </a>
      </div>
    </section>
  )
}
