'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { label: 'Menu', href: '/menu' },
    { label: 'About', href: '/#about' },
    { label: 'Hours', href: '/#hours' },
    { label: 'Location', href: '/#location' },
    { label: 'Contact', href: '/#contact' },
  ]

  function handleNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    setMobileOpen(false)

    if (!href.startsWith('/#')) return

    const id = href.slice(2)

    e.preventDefault()

    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = href
    }
  }

  function NavLink({ href, label }: { href: string; label: string }) {
    if (href.startsWith('/#')) {
      return (
        <a
          href={href}
          onClick={(e) => handleNav(e, href)}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          {label}
        </a>
      )
    }
    return (
      <Link href={href} className="text-sm text-muted-foreground hover:text-foreground">
        {label}
      </Link>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight text-foreground">
          Kiku86
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:+358440551986"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded"
          >
            Call Now
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
      )}
    </header>
  )
}
