'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge'

type MenuItem = {
  name: string
  price: string
  image: string
  popular?: boolean
}

type MenuCategory = {
  id: string
  title: string
  description: string
  items: MenuItem[]
}

const KNOWN_MENU_IMAGES = new Set([
  '/images/products/avocado-maki.jpg',
  '/images/products/avocado-nigiri.jpg',
  '/images/products/black-dragon.jpg',
  '/images/products/botan-set.jpg',
  '/images/products/build-your-bowl.jpg',
  '/images/products/california-maki.jpg',
  '/images/products/california-nigiri.jpg',
  '/images/products/edamame.jpg',
  '/images/products/florida-maki.jpg',
  '/images/products/green-dragon.jpg',
  '/images/products/grilled-eel-nigiri.jpg',
  '/images/products/grilled-master-set.jpg',
  '/images/products/inari-tofu-nigiri.jpg',
  '/images/products/kabayaki-salmon-nigiri.jpg',
  '/images/products/kappamaki.jpg',
  '/images/products/kappasake.jpg',
  '/images/products/kiku-set.jpg',
  '/images/products/kikufuto-maki.jpg',
  '/images/products/kimchi-jjigae.jpg',
  '/images/products/menu-edamame.jpg',
  '/images/products/miso-soup.jpg',
  '/images/products/momo-set.jpg',
  '/images/products/nigiri-salmon.jpg',
  '/images/products/prawn-nigiri.jpg',
  '/images/products/prawn-sashimi.jpg',
  '/images/products/red-dragon.jpg',
  '/images/products/renge-veggie-set.jpg',
  '/images/products/sakemaki.jpg',
  '/images/products/sakura-set.jpg',
  '/images/products/salmon-kabayaki-bowl.jpg',
  '/images/products/salmon-sashimi.jpg',
  '/images/products/seared-mackerel-nigiri.jpg',
  '/images/products/seared-prawn-nigiri.jpg',
  '/images/products/seared-salmon-nigiri.jpg',
  '/images/products/seaweed-salad.jpg',
  '/images/products/soba-bowl.jpg',
  '/images/products/spicy-tuna-maki.jpg',
  '/images/products/surf-clam-nigiri.jpg',
  '/images/products/surf-clam-sashimi.jpg',
  '/images/products/suricado-maki.jpg',
  '/images/products/sushi-set.jpg',
  '/images/products/teriyaki-bowl.jpg',
  '/images/products/teriyaki-chicken.jpg',
  '/images/products/tom-kha.jpg',
  '/images/products/ume-set.jpg',
  '/images/products/unagi-maki.jpg',
  '/images/products/veggie-maki.jpg',
  '/images/products/yakisake-maki.jpg',
  '/images/bowls.jpg',
  '/images/maki-rolls.jpg',
  '/images/nigiri.jpg',
  '/images/sashimi.jpg',
  '/images/small-plates.jpg',
  '/images/soups.jpg',
  '/images/sushi-set.jpg',
  '/images/sushi-sets.jpg',
])

const CATEGORY_IMAGE_FALLBACKS: Record<string, string> = {
  bowls: '/images/bowls.jpg',
  starters: '/images/small-plates.jpg',
  soup: '/images/soups.jpg',
  soups: '/images/soups.jpg',
  nigiri: '/images/nigiri.jpg',
  'maki rolls': '/images/maki-rolls.jpg',
  'sushi sets': '/images/sushi-sets.jpg',
  sashimi: '/images/sashimi.jpg',
  gunkan: '/images/sashimi.jpg',
}

const PRODUCT_IMAGE_FALLBACKS: Record<string, Array<{ match: string[]; image: string }>> = {
  bowls: [
    { match: ['build your own'], image: '/images/products/build-your-bowl.jpg' },
    { match: ['teriyaki'], image: '/images/products/teriyaki-bowl.jpg' },
    { match: ['salmon'], image: '/images/products/salmon-kabayaki-bowl.jpg' },
    { match: ['soba'], image: '/images/products/soba-bowl.jpg' },
  ],
  starters: [
    { match: ['miso'], image: '/images/products/miso-soup.jpg' },
    { match: ['edamame'], image: '/images/products/edamame.jpg' },
    { match: ['seaweed'], image: '/images/products/seaweed-salad.jpg' },
  ],
  soup: [
    { match: ['tom kha'], image: '/images/products/tom-kha.jpg' },
    { match: ['kimchi'], image: '/images/products/kimchi-jjigae.jpg' },
    { match: ['miso'], image: '/images/products/miso-soup.jpg' },
  ],
  soups: [
    { match: ['tom kha'], image: '/images/products/tom-kha.jpg' },
    { match: ['kimchi'], image: '/images/products/kimchi-jjigae.jpg' },
    { match: ['miso'], image: '/images/products/miso-soup.jpg' },
  ],
  nigiri: [
    { match: ['seared salmon'], image: '/images/products/seared-salmon-nigiri.jpg' },
    { match: ['salmon'], image: '/images/products/nigiri-salmon.jpg' },
    { match: ['kabayaki salmon'], image: '/images/products/kabayaki-salmon-nigiri.jpg' },
    { match: ['seared prawn'], image: '/images/products/seared-prawn-nigiri.jpg' },
    { match: ['prawn'], image: '/images/products/prawn-nigiri.jpg' },
    { match: ['surf clam'], image: '/images/products/surf-clam-nigiri.jpg' },
    { match: ['eel'], image: '/images/products/grilled-eel-nigiri.jpg' },
    { match: ['mackerel'], image: '/images/products/seared-mackerel-nigiri.jpg' },
    { match: ['avocado'], image: '/images/products/avocado-nigiri.jpg' },
    { match: ['inari', 'tofu'], image: '/images/products/inari-tofu-nigiri.jpg' },
    { match: ['california'], image: '/images/products/california-nigiri.jpg' },
  ],
  'maki rolls': [
    { match: ['kappamaki'], image: '/images/products/kappamaki.jpg' },
    { match: ['avocado'], image: '/images/products/avocado-maki.jpg' },
    { match: ['sakemaki'], image: '/images/products/sakemaki.jpg' },
    { match: ['suricado'], image: '/images/products/suricado-maki.jpg' },
    { match: ['spicy tuna'], image: '/images/products/spicy-tuna-maki.jpg' },
    { match: ['kappasake'], image: '/images/products/kappasake.jpg' },
    { match: ['florida'], image: '/images/products/florida-maki.jpg' },
    { match: ['california'], image: '/images/products/california-maki.jpg' },
    { match: ['yakisake'], image: '/images/products/yakisake-maki.jpg' },
    { match: ['veggie'], image: '/images/products/veggie-maki.jpg' },
    { match: ['unagi'], image: '/images/products/unagi-maki.jpg' },
    { match: ['kikufuto'], image: '/images/products/kikufuto-maki.jpg' },
    { match: ['green dragon'], image: '/images/products/green-dragon.jpg' },
    { match: ['red dragon'], image: '/images/products/red-dragon.jpg' },
    { match: ['black dragon'], image: '/images/products/black-dragon.jpg' },
  ],
  'sushi sets': [
    { match: ['ume'], image: '/images/products/ume-set.jpg' },
    { match: ['renge'], image: '/images/products/renge-veggie-set.jpg' },
    { match: ['kiku'], image: '/images/products/kiku-set.jpg' },
    { match: ['momo'], image: '/images/products/momo-set.jpg' },
    { match: ['botan'], image: '/images/products/botan-set.jpg' },
    { match: ['sakura'], image: '/images/products/sakura-set.jpg' },
    { match: ['grilled master'], image: '/images/products/grilled-master-set.jpg' },
  ],
  sashimi: [
    { match: ['salmon'], image: '/images/products/salmon-sashimi.jpg' },
    { match: ['surf clam'], image: '/images/products/surf-clam-sashimi.jpg' },
    { match: ['prawn'], image: '/images/products/prawn-sashimi.jpg' },
  ],
  gunkan: [
    { match: ['salmon'], image: '/images/products/salmon-sashimi.jpg' },
    { match: ['surf clam'], image: '/images/products/surf-clam-sashimi.jpg' },
    { match: ['prawn'], image: '/images/products/prawn-sashimi.jpg' },
  ],
}

function normalizeImageKey(value: string) {
  return value.toLowerCase().trim()
}

function getCategoryImage(categoryTitle: string) {
  return CATEGORY_IMAGE_FALLBACKS[normalizeImageKey(categoryTitle)] ?? '/images/small-plates.jpg'
}

function getProductAwareImage(categoryTitle: string, item: MenuItem) {
  if (item.image && KNOWN_MENU_IMAGES.has(item.image)) {
    return item.image
  }

  const categoryKey = normalizeImageKey(categoryTitle)
  const itemName = normalizeImageKey(item.name)
  const categoryMatches = PRODUCT_IMAGE_FALLBACKS[categoryKey] ?? []
  const productMatch = categoryMatches.find(({ match }) => match.every((keyword) => itemName.includes(keyword)))

  if (productMatch && KNOWN_MENU_IMAGES.has(productMatch.image)) {
    return productMatch.image
  }

  return getCategoryImage(categoryTitle)
}

const menuCategories: MenuCategory[] = [
  {
    id: 'starters',
    title: 'Starters',
    description: 'Light openers and small dishes to begin the meal.',
    items: [
      { name: 'Miso soup', price: '3.90', image: '/images/products/miso-soup.jpg' },
      { name: 'Edamame', price: '4.50', image: '/images/products/menu-edamame.jpg', popular: true },
      { name: 'Seaweed salad', price: '4.90', image: '/images/products/seaweed-salad.jpg' },
    ],
  },
  {
    id: 'bowls',
    title: 'Bowls',
    description: 'Comforting rice and noodle bowls with house-favorite toppings.',
    items: [
      { name: 'Build your own bowl', price: '15.90', image: '/images/products/build-your-bowl.jpg', popular: true },
      { name: 'Teriyaki chicken bowl', price: '15.50', image: '/images/products/teriyaki-chicken.jpg', popular: true },
      { name: 'Salmon kabayaki bowl', price: '15.90', image: '/images/products/salmon-kabayaki-bowl.jpg' },
      { name: 'Soba bowl', price: '15.90', image: '/images/products/soba-bowl.jpg' },
    ],
  },
  {
    id: 'sashimi',
    title: 'Sashimi',
    description: 'Fresh sliced seafood served simply and cleanly.',
    items: [
      { name: 'Salmon sashimi 4pcs', price: '5.90', image: '/images/products/salmon-sashimi.jpg', popular: true },
      { name: 'Surf clam sashimi 4pcs', price: '5.90', image: '/images/products/surf-clam-sashimi.jpg' },
      { name: 'Prawn sashimi 4pcs', price: '3.90', image: '/images/products/prawn-sashimi.jpg' },
    ],
  },
  {
    id: 'nigiri',
    title: 'Nigiri',
    description: 'Classic nigiri and seared specialties prepared one piece at a time.',
    items: [
      { name: 'Salmon Nigiri', price: '3.90', image: '/images/products/nigiri-salmon.jpg', popular: true },
      { name: 'Seared Salmon Nigiri', price: '4.50', image: '/images/products/seared-salmon-nigiri.jpg' },
      { name: 'Kabayaki Salmon Nigiri', price: '4.50', image: '/images/products/kabayaki-salmon-nigiri.jpg' },
      { name: 'Prawn Nigiri', price: '3.50', image: '/images/products/prawn-nigiri.jpg' },
      { name: 'Seared Prawn Nigiri', price: '3.90', image: '/images/products/seared-prawn-nigiri.jpg' },
      { name: 'Surf Clam Nigiri', price: '4.50', image: '/images/products/surf-clam-nigiri.jpg' },
      { name: 'Grilled Eel Nigiri', price: '4.90', image: '/images/products/grilled-eel-nigiri.jpg', popular: true },
      { name: 'Seared Mackerel Nigiri', price: '3.90', image: '/images/products/seared-mackerel-nigiri.jpg' },
      { name: 'Avocado Nigiri', price: '3.00', image: '/images/products/avocado-nigiri.jpg' },
      { name: 'Inari Tofu Nigiri', price: '3.00', image: '/images/products/inari-tofu-nigiri.jpg' },
      { name: 'California Nigiri', price: '4.50', image: '/images/products/california-nigiri.jpg' },
    ],
  },
  {
    id: 'sushi-sets',
    title: 'Sushi Sets',
    description: 'Balanced sushi combinations for one person to enjoy.',
    items: [
      { name: 'Ume 12pcs', price: '13.90', image: '/images/products/ume-set.jpg' },
      { name: 'Renge (Veggie) 14pcs', price: '14.90', image: '/images/products/renge-veggie-set.jpg' },
      { name: 'Kiku 14pcs', price: '15.90', image: '/images/products/kiku-set.jpg', popular: true },
      { name: 'Momo 14pcs', price: '16.90', image: '/images/products/momo-set.jpg' },
      { name: 'Botan 12pcs', price: '17.90', image: '/images/products/botan-set.jpg' },
      { name: 'Sakura 16pcs', price: '18.90', image: '/images/products/sakura-set.jpg', popular: true },
      { name: 'Grilled Master 16pcs', price: '19.90', image: '/images/products/grilled-master-set.jpg' },
    ],
  },
  {
    id: 'maki-rolls',
    title: 'Maki Rolls',
    description: 'A mix of classic rolls and signature favorites.',
    items: [
      { name: 'Kappamaki', price: '4.90', image: '/images/products/kappamaki.jpg' },
      { name: 'Avocado maki', price: '4.90', image: '/images/products/avocado-maki.jpg' },
      { name: 'Sakemaki', price: '5.90', image: '/images/products/sakemaki.jpg' },
      { name: 'Suricado maki', price: '7.90', image: '/images/products/suricado-maki.jpg' },
      { name: 'Spicy tuna maki', price: '7.90', image: '/images/products/spicy-tuna-maki.jpg' },
      { name: 'Kappasake', price: '8.50', image: '/images/products/kappasake.jpg' },
      { name: 'Florida maki', price: '8.90', image: '/images/products/florida-maki.jpg' },
      { name: 'California maki', price: '8.90', image: '/images/products/california-maki.jpg', popular: true },
      { name: 'Yakisake maki', price: '9.50', image: '/images/products/yakisake-maki.jpg' },
      { name: 'Veggie maki', price: '8.90', image: '/images/products/veggie-maki.jpg' },
      { name: 'Unagi maki', price: '9.90', image: '/images/products/unagi-maki.jpg' },
      { name: 'Kikufuto maki', price: '10.90', image: '/images/products/kikufuto-maki.jpg' },
      { name: 'Green Dragon', price: '12.90', image: '/images/products/green-dragon.jpg' },
      { name: 'Red Dragon', price: '12.90', image: '/images/products/red-dragon.jpg', popular: true },
      { name: 'Black Dragon', price: '13.50', image: '/images/products/black-dragon.jpg' },
    ],
  },
  {
    id: 'soups',
    title: 'Soup',
    description: 'Warming bowls with rich flavor and a little depth.',
    items: [
      { name: 'Tom Kha', price: '15.90', image: '/images/products/tom-kha.jpg', popular: true },
      { name: 'Kimchi Jjigae', price: '16.90', image: '/images/products/kimchi-jjigae.jpg' },
    ],
  },
]

function MenuCard({
  categoryTitle,
  item,
  priority = false,
}: {
  categoryTitle: string
  item: MenuItem
  priority?: boolean
}) {
  const resolvedImage = getProductAwareImage(categoryTitle, item)
  const categoryFallbackImage = getCategoryImage(categoryTitle)
  const [imageSrc, setImageSrc] = useState(resolvedImage)

  useEffect(() => {
    setImageSrc(resolvedImage)
  }, [resolvedImage])

  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          priority={priority}
          onError={() => {
            if (imageSrc !== categoryFallbackImage) {
              setImageSrc(categoryFallbackImage)
            }
          }}
        />
        {item.popular ? (
          <Badge className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.18em]">
            Popular
          </Badge>
        ) : null}
      </div>
      <div className="flex items-end justify-between gap-4 p-4">
        <h3 className="text-sm font-semibold leading-snug text-foreground">{item.name}</h3>
        <p className="shrink-0 text-sm font-semibold text-accent">{item.price} EUR</p>
      </div>
    </article>
  )
}

export function FullMenu() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Menu</p>
          <h1 className="font-serif text-4xl font-bold text-balance text-foreground md:text-5xl">
            Full Menu
          </h1>
        </div>

        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <section key={category.id} id={category.id} className="scroll-mt-24">
              <div className="mb-8 max-w-2xl">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Category</p>
                <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  {category.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
                {category.items.map((item, itemIndex) => (
                  <MenuCard
                    key={item.name}
                    categoryTitle={category.title}
                    item={item}
                    priority={categoryIndex === 0 && itemIndex < 2}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-muted p-6">
          <p className="text-sm text-balance text-muted-foreground">
            All prices are in euros. For special requests, dietary restrictions, or large orders,
            please call us at{' '}
            <a href="tel:+358440551986" className="font-medium text-foreground hover:underline">
              +358 44 0551986
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
