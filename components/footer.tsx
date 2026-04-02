export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 justify-between">
        {/* Brand */}
        <div>
          <p className="font-serif text-xl font-bold text-white mb-2">Kiku86</p>
          <p className="text-sm text-white/50">Sushi and Japanese dishes in Helsinki</p>
        </div>

        {/* Address */}
        <div>
          <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Address</p>
          <address className="not-italic text-sm text-white/70 leading-relaxed">
            Maneesikatu 4a<br />
            00170 Helsinki<br />
            Finland
          </address>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Contact</p>
          <a
            href="tel:0440551986"
            className="text-sm text-white/70 hover:text-white"
          >
            044 0551986
          </a>
        </div>

        {/* Hours */}
        <div>
          <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Hours</p>
          <ul className="text-sm text-white/70 space-y-1">
            <li>Mon – Thu: 11:00 – 22:00</li>
            <li>Fri: 11:00 – 23:00</li>
            <li>Sat: 12:00 – 23:00</li>
            <li>Sun: 12:00 – 22:00</li>
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="text-xs text-white/30">
          &copy; {new Date().getFullYear()} Kiku86. All rights reserved.
        </p>
        <nav className="flex gap-4" aria-label="Footer navigation">
          {[
            { label: 'Menu', href: '#menu' },
            { label: 'Location', href: '#location' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-white/30 hover:text-white/70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
