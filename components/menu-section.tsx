import Image from 'next/image'

const menuItems = [
  {
    title: 'Sushi Sets',
    description: 'Mixed sushi combinations',
    image: '/images/sushi-sets.jpg',
  },
  {
    title: 'Nigiri',
    description: 'Fresh fish and specialty pieces',
    image: '/images/nigiri.jpg',
  },
  {
    title: 'Maki Rolls',
    description: 'Classic and signature rolls',
    image: '/images/maki-rolls.jpg',
  },
  {
    title: 'Bowls',
    description: 'Rice and noodle bowls',
    image: '/images/bowls.jpg',
  },
  {
    title: 'Sashimi & Gunkan',
    description: 'Fresh cuts and specialty bites',
    image: '/images/sashimi.jpg',
  },
  {
    title: 'Soups & Starters',
    description: 'Warm dishes and sides',
    image: '/images/soups.jpg',
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Menu</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            What We Serve
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {menuItems.map((item) => (
            <article key={item.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded bg-muted mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/menu"
            className="inline-flex items-center justify-center border border-border text-foreground text-sm font-medium px-8 py-3 rounded hover:bg-muted"
          >
            See Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}
