'use client'

export function FullMenu() {
  const menuCategories = [
    {
      category: 'Starters',
      items: [
        { name: 'Miso soup', price: 3.90, description: null, image: '/images/products/miso-soup.jpg' },
        { name: 'Edamame', price: 4.50, description: null, image: '/images/products/edamame.jpg' },
        { name: 'Seaweed salad', price: 4.90, description: null, image: '/images/products/seaweed-salad.jpg' },
      ],
    },
    {
      category: 'Super Bowl',
      items: [
        { name: 'Build your own bowl', price: 15.90, description: 'Choose your base, toppings (first 2 included), and dressing', image: null },
      ],
    },
    {
      category: 'Favorite Bowls',
      items: [
        { name: 'Rice bowl with teriyaki chicken, avocado, Goma', price: 15.50, description: null, image: null },
        { name: 'Rice bowl with salmon kabayaki, avocado, Goma', price: 15.90, description: null, image: '/images/products/rice-bowl-salmon-kabayaki-avocado-goma.jpg' },
        { name: 'Soba bowl with raw salmon, shrimp, wasabi shoyu', price: 15.90, description: null, image: '/images/products/soba-bowl-raw-salmon-shrimp-wasabi-shoyu.jpg' },
      ],
    },
    {
      category: 'Sashimi',
      items: [
        { name: 'Salmon sashimi 4pcs', price: 5.90, description: null, image: '/images/products/salmon-sashimi-4pcs.jpg' },
        { name: 'Surf Clam sashimi 4pcs', price: 5.90, description: null, image: null },
        { name: 'Prawn sashimi 4pcs', price: 3.90, description: null, image: null },
      ],
    },
    {
      category: 'Nigiri',
      items: [
        { name: 'Salmon Nigiri 2pcs', price: 3.90, description: null, image: '/images/products/salmon-nigiri-2pcs.jpg' },
        { name: 'Seared salmon Nigiri 2pcs', price: 4.50, description: null, image: '/images/products/seared-salmon-nigiri-2pcs.jpg' },
        { name: 'Kabayaki salmon Nigiri 2pcs', price: 4.50, description: null, image: '/images/products/kabayaki-salmon-nigiri-2pcs.jpg' },
        { name: 'Prawn Nigiri 2pcs', price: 3.50, description: null, image: '/images/products/prawn-nigiri-2pcs.jpg' },
        { name: 'Seared Prawn Nigiri 2pcs', price: 3.90, description: null, image: '/images/products/seared-prawn-nigiri-2pcs.jpg' },
        { name: 'Surf Clam Nigiri 2pcs', price: 4.50, description: null, image: '/images/products/surf-clam-nigiri-2pcs.jpg' },
        { name: 'Grilled Eel Nigiri 2pcs', price: 4.90, description: null, image: '/images/products/grilled-eel-nigiri-2pcs.jpg' },
        { name: 'Seared Mackerel Nigiri 2pcs', price: 3.90, description: null, image: '/images/products/seared-mackerel-nigiri-2pcs.jpg' },
        { name: 'Avocado Nigiri 2pcs', price: 3.00, description: null, image: '/images/products/avocado-nigiri-2pcs.jpg' },
        { name: 'Inari tofu Nigiri 2pcs', price: 3.00, description: null, image: '/images/products/inari-tofu-nigiri-2pcs.jpg' },
        { name: 'California Nigiri 2pcs', price: 4.50, description: null, image: '/images/products/california-nigiri-2pcs.jpg' },
      ],
    },
    {
      category: 'Gunkan',
      items: [
        { name: 'Wakame Gunkan 2pcs', price: 3.50, description: null, image: '/images/products/wakame-gunkan-2pcs.jpg' },
        { name: 'Spicy Surimi Gunkan 2pcs', price: 3.90, description: null, image: '/images/products/spicy-surimi-gunkan-2pcs.jpg' },
        { name: 'Spicy Salmon Gunkan 2pcs', price: 4.50, description: null, image: '/images/products/spicy-salmon-gunkan-2pcs.jpg' },
        { name: 'Tunamayo Gunkan 2pcs', price: 3.50, description: null, image: null },
      ],
    },
    {
      category: 'Sushi Sets',
      items: [
        { name: 'Ume 12pcs', price: 13.90, description: 'Salmon nigiri x2, Seared Prawn nigiri x2, Avocado nigiri x2, Kappasake maki x2, California maki x2, Suricado maki x2', image: '/images/products/ume-12pcs.jpg' },
        { name: 'Renge (Veggie) 14pcs', price: 14.90, description: 'Avocado nigiri x2, Inari tofu nigiri x2, Inari-avocado nigiri x1, Wakame gunkan x1, Veggie maki x8', image: '/images/products/renge-veggie-14pcs.jpg' },
        { name: 'Kiku 14pcs', price: 15.90, description: 'Salmon nigiri x2, Prawn nigiri x2, Avocado nigiri x2, Seared Salmon nigiri x2, Kappasake maki x2, California maki x2, Surimi Avocado maki x2', image: '/images/products/kiku-14pcs.jpg' },
        { name: 'Momo 14pcs', price: 16.90, description: 'Salmon nigiri x4, Seared salmon nigiri x2, Kabayaki salmon nigiri x2, Sakemaki x6', image: '/images/products/momo-14pcs.jpg' },
        { name: 'Botan (Nigiri only) 12pcs', price: 17.90, description: 'Salmon nigiri x2, Surf clam/Squid nigiri x2, Eel nigiri x2, Seared salmon nigiri x2, California nigiri x2, White fish/Mackerel nigiri x2', image: '/images/products/botan-nigiri-only-12pcs.jpg' },
        { name: 'Sakura 16pcs', price: 18.90, description: 'Salmon nigiri x2, White fish x1, Seared salmon x1, Seared mackerel x1, Seared prawn x1, Kabayaki salmon x1, California x1, Tunamayo x1, Avocado x1, California maki x2, Kappasake maki x2, Surimi Avocado maki x2', image: '/images/products/sakura-16pcs.jpg' },
        { name: 'Grilled Master 16pcs', price: 19.90, description: 'Flamed salmon nigiri x2, Eel nigiri x2, Grilled Prawn nigiri x2, Flamed white fish/Grilled mackerel nigiri x2, Yakisake maki x8', image: '/images/products/grilled-master-16pcs.jpg' },
      ],
    },
    {
      category: 'Special Sets',
      items: [
        { name: 'Kawaii 8pcs', price: 7.90, description: 'Seared salmon nigiri x2, Cucumber maki x6', image: null },
        { name: 'Oishii 6pcs', price: 8.90, description: 'Salmon nigiri x3, Seared Salmon nigiri x3', image: null },
        { name: 'Salmon Lovers 32pcs', price: 39.90, description: 'Salmon sashimi x4, Flamed salmon sashimi x2, Salmon nigiri x8, Flamed salmon nigiri x4, Kabayaki salmon nigiri x4, Black Dragon maki x10', image: '/images/products/salmon-lovers-32pcs.jpg' },
        { name: 'Full house 80pcs', price: 89.90, description: 'Salmon nigiri x8, White fish x4, Surf clam x4, Seared Salmon x4, Prawn x4, Kabayaki salmon x4, Avocado x4, Inari x4, California x4, Sashimi x4, California maki x8, Kappasake maki x8, Surcado maki x8, Veggie maki x8', image: null },
      ],
    },
    {
      category: 'Maki',
      items: [
        { name: 'Kappamaki (cucumber) 6pcs', price: 4.90, description: null, image: '/images/products/kappamaki-cucumber-6pcs.jpg' },
        { name: 'Avocado maki 6pcs', price: 4.90, description: null, image: '/images/products/avocado-maki-6pcs.jpg' },
        { name: 'Sakemaki (salmon) 6pcs', price: 5.90, description: null, image: '/images/products/sakemaki-salmon-6pcs.jpg' },
        { name: 'Suricado maki 8-10pcs', price: 7.90, description: 'Crab stick, avocado, sesame, mayonnaise, kabayaki sauce', image: '/images/products/suricado-maki-8-10-pcs.jpg' },
        { name: 'Spicy tuna maki 8-10pcs', price: 7.90, description: 'Spicy tuna mayo, cucumber, sesame, mayo, kabayaki sauce, chives, fried onion', image: '/images/products/spicy-tuna-maki-8-10-pcs.jpg' },
        { name: 'Kappasake 8-10pcs', price: 8.50, description: 'Salmon, cucumber, chili mayo, sesames, kabayaki sauce, chives', image: '/images/products/kappasake-8-10-pcs.jpg' },
        { name: 'Florida maki 8-10pcs', price: 8.90, description: 'Salmon, avocado, mayo, sesames, kabayaki sauce, chives, fried onion', image: '/images/products/florida-maki-8-10-pcs.jpg' },
        { name: 'California maki 8-10pcs', price: 8.90, description: 'Ebi, avocado, mayo, sesames, kabayaki sauce', image: '/images/products/california-maki-8-10-pcs.jpg' },
        { name: 'Veggie maki 8-10pcs', price: 8.90, description: 'Tofu, avocado, pickle daikon/cucumber, wakame, sesame, mayo, kabayaki sauce', image: '/images/products/veggie-maki-8-10-pcs.jpg' },
        { name: 'Yakisake maki 8-10pcs', price: 9.50, description: 'Seared salmon, avocado, pickle daikon, chili mayo, chives, sesame, fried onion', image: '/images/products/yakisake-maki-8-10-pcs.jpg' },
        { name: 'Unagi maki 8-10pcs', price: 9.90, description: 'Grilled eels, avocado, pickle daikon, kabayaki sauce, sesames, chives/leek', image: '/images/products/unagi-maki-8-10-pcs.jpg' },
        { name: 'Kikufuto maki 8-10pcs', price: 10.90, description: 'Salmon, crab stick, inari tofu, avocado, wakame, pickle daikon/cucumber, mayo, kimchi sesame, kabayaki sauce, chives, fried onion', image: '/images/products/kikufuto-maki-8-10-pcs.jpg' },
        { name: 'Green Dragon 8-10pcs', price: 12.90, description: 'Salmon, cucumber, wakame, spicy mayo, covered with avocado, kabayaki sauce, fried onion', image: '/images/products/green-dragon-8-10-pcs.jpg' },
        { name: 'Red Dragon 8-10pcs', price: 12.90, description: 'California maki covered with salmon, mayo, kabayaki sauce, caviar, chives', image: '/images/products/red-dragon-8-10-pcs.jpg' },
        { name: 'Black Dragon 8-10pcs', price: 13.50, description: 'California maki covered with seared salmon, chili mayo, kabayaki sauce, caviar, leek, fried onion', image: '/images/products/black-dragon-8-10-pcs.jpg' },
      ],
    },
    {
      category: 'Soup',
      items: [
        { name: 'Tom Kha', price: 15.90, description: 'Creamy, spicy, sweet and sour Thai soup. Choice of base and protein.', image: '/images/products/tom-kha.jpg' },
        { name: 'Kimchi Jjigae', price: 16.90, description: 'Rich, hot and spicy Korean traditional Kimchi Stew. Choice of base and protein.', image: null },
      ],
    },
  ]

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 pt-14">
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
                    {item.image ? (
                      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[4/3] bg-muted flex items-center justify-center">
                        <span className="text-3xl">🍣</span>
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground text-sm leading-snug mb-1">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-muted-foreground text-xs leading-relaxed mb-2 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                      <p className="text-base font-bold text-accent">
                        {item.price.toFixed(2)} €
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
            Prices may differ from delivery platforms. For special requests, dietary restrictions, or large orders, please call us at{' '}
            <a href="tel:+358440551986" className="font-medium text-foreground hover:underline">
              +358 44 0551986
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
