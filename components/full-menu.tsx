'use client'

import Image from 'next/image'

export function FullMenu() {
  const menuCategories = [
    {
      category: 'Starters',
      items: [
        { name: 'Miso soup', price: '3.90 €', image: '/images/products/miso-soup.jpg' },
        { name: 'Edamame', price: '4.50 €', image: '/images/products/menu-edamame.jpg' },
        { name: 'Seaweed salad', price: '4.90 €', image: '/images/products/seaweed-salad.jpg' },
      ],
    },
    {
      category: 'Bowls',
      items: [
        { name: 'Build your own bowl', price: '15.90 €', image: '/images/products/build-your-bowl.jpg' },
        { name: 'Teriyaki chicken bowl', price: '15.50 €', image: '/images/products/teriyaki-chicken.jpg' },
        { name: 'Salmon kabayaki bowl', price: '15.90 €', image: '/images/products/salmon-kabayaki-bowl.jpg' },
        { name: 'Soba bowl', price: '15.90 €', image: '/images/products/soba-bowl.jpg' },
      ],
    },
    {
      category: 'Sashimi',
      items: [
        { name: 'Salmon sashimi 4pcs', price: '5.90 €', image: '/images/products/salmon-sashimi.jpg' },
        { name: 'Surf clam sashimi 4pcs', price: '5.90 €', image: '/images/products/surf-clam-sashimi.jpg' },
        { name: 'Prawn sashimi 4pcs', price: '3.90 €', image: '/images/products/prawn-sashimi.jpg' },
      ],
    },
    {
      category: 'Nigiri',
      items: [
        { name: 'Salmon Nigiri', price: '3.90 €', image: '/images/products/nigiri-salmon.jpg' },
        { name: 'Seared Salmon Nigiri', price: '4.50 €', image: '/images/products/seared-salmon-nigiri.jpg' },
        { name: 'Kabayaki Salmon Nigiri', price: '4.50 €', image: '/images/products/kabayaki-salmon-nigiri.jpg' },
        { name: 'Prawn Nigiri', price: '3.50 €', image: '/images/products/prawn-nigiri.jpg' },
        { name: 'Seared Prawn Nigiri', price: '3.90 €', image: '/images/products/seared-prawn-nigiri.jpg' },
        { name: 'Surf Clam Nigiri', price: '4.50 €', image: '/images/products/surf-clam-nigiri.jpg' },
        { name: 'Grilled Eel Nigiri', price: '4.90 €', image: '/images/products/grilled-eel-nigiri.jpg' },
        { name: 'Seared Mackerel Nigiri', price: '3.90 €', image: '/images/products/seared-mackerel-nigiri.jpg' },
        { name: 'Avocado Nigiri', price: '3.00 €', image: '/images/products/avocado-nigiri.jpg' },
        { name: 'Inari Tofu Nigiri', price: '3.00 €', image: '/images/products/inari-tofu-nigiri.jpg' },
        { name: 'California Nigiri', price: '4.50 €', image: '/images/products/california-nigiri.jpg' },
      ],
    },
    {
      category: 'Sushi Sets',
      items: [
        { name: 'Ume 12pcs', price: '13.90 €', image: '/images/products/ume-set.jpg' },
        { name: 'Renge (Veggie) 14pcs', price: '14.90 €', image: '/images/products/renge-veggie-set.jpg' },
        { name: 'Kiku 14pcs', price: '15.90 €', image: '/images/products/kiku-set.jpg' },
        { name: 'Momo 14pcs', price: '16.90 €', image: '/images/products/momo-set.jpg' },
        { name: 'Botan 12pcs', price: '17.90 €', image: '/images/products/botan-set.jpg' },
        { name: 'Sakura 16pcs', price: '18.90 €', image: '/images/products/sakura-set.jpg' },
        { name: 'Grilled Master 16pcs', price: '19.90 €', image: '/images/products/grilled-master-set.jpg' },
      ],
    },
    {
      category: 'Maki Rolls',
      items: [
        { name: 'Kappamaki', price: '4.90 €', image: '/images/products/kappamaki.jpg' },
        { name: 'Avocado maki', price: '4.90 €', image: '/images/products/avocado-maki.jpg' },
        { name: 'Sakemaki', price: '5.90 €', image: '/images/products/sakemaki.jpg' },
        { name: 'Suricado maki', price: '7.90 €', image: '/images/products/suricado-maki.jpg' },
        { name: 'Spicy tuna maki', price: '7.90 €', image: '/images/products/spicy-tuna-maki.jpg' },
        { name: 'Kappasake', price: '8.50 €', image: '/images/products/kappasake.jpg' },
        { name: 'Florida maki', price: '8.90 €', image: '/images/products/florida-maki.jpg' },
        { name: 'California maki', price: '8.90 €', image: '/images/products/california-maki.jpg' },
        { name: 'Yakisake maki', price: '9.50 €', image: '/images/products/yakisake-maki.jpg' },
        { name: 'Veggie maki', price: '8.90 €', image: '/images/products/veggie-maki.jpg' },
        { name: 'Unagi maki', price: '9.90 €', image: '/images/products/unagi-maki.jpg' },
        { name: 'Kikufuto maki', price: '10.90 €', image: '/images/products/kikufuto-maki.jpg' },
        { name: 'Green Dragon', price: '12.90 €', image: '/images/products/green-dragon.jpg' },
        { name: 'Red Dragon', price: '12.90 €', image: '/images/products/red-dragon.jpg' },
        { name: 'Black Dragon', price: '13.50 €', image: '/images/products/black-dragon.jpg' },
      ],
    },
    {
      category: 'Soup',
      items: [
        { name: 'Tom Kha', price: '15.90 €', image: '/images/products/tom-kha.jpg' },
        { name: 'Kimchi Jjigae', price: '16.90 €', image: '/images/products/kimchi-jjigae.jpg' },
      ],
    },
  ]

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Menu</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
            Full Menu
          </h1>
        </div>

        <div className="space-y-16">
          {menuCategories.map((section) => (
            <div key={section.category}>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <article
                    key={item.name}
                    className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        loading={section.category === 'Starters' && item.name === 'Seaweed salad' ? 'eager' : 'lazy'}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground text-sm leading-snug mb-2">
                        {item.name}
                      </h3>
                      <p className="text-base font-bold text-accent">
                        {item.price}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-muted rounded">
          <p className="text-sm text-muted-foreground text-balance">
            All prices are in euros. For special requests, dietary restrictions, or large orders, please call us at{' '}
            <a href="tel:+358440551986" className="font-medium text-foreground hover:underline">
              +358 44 0551986
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
