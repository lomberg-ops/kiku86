export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-serif text-xl font-bold tracking-tight text-foreground">
          Kiku86
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Menu', href: '/menu' },
            { label: 'About', href: '#about' },
            { label: 'Hours', href: '#hours' },
            { label: 'Location', href: '#location' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:0440551986"
          className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded"
        >
          Call Now
        </a>
      </div>
    </header>
  )
}
