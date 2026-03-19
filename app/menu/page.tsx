import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FullMenu } from '@/components/full-menu'

export const metadata = {
  title: 'Full Menu - Kiku86 | Sushi & Japanese Restaurant Helsinki',
  description: 'Browse our complete menu of sushi, nigiri, maki rolls, bowls, sashimi, and more at Kiku86 in Helsinki.',
}

export default function MenuPage() {
  return (
    <main>
      <Navbar />
      <FullMenu />
      <Footer />
    </main>
  )
}
