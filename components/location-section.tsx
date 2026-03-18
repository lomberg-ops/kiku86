export function LocationSection() {
  const address = 'Maneesikatu 4 A, 00170 Helsinki, Finland'
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
  const embedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.5023838576!2d25.0024!3d60.1675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc84c3f4a4f%3A0x9e99c6e0f0700d36!2sManeesikatu%204a%2C%2000170%20Helsinki%2C%20Finland!5e0!3m2!1sen!2sfi!4v1700000000000'

  return (
    <section id="location" className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Find Us</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            Location
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Address card */}
          <div className="flex-shrink-0 w-full md:w-64">
            <p className="text-sm text-foreground font-medium leading-relaxed mb-6">
              Maneesikatu 4 A<br />
              00170 Helsinki<br />
              Finland
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-6 py-3 rounded"
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
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Get Directions
            </a>
          </div>

          {/* Map embed */}
          <div className="flex-1 w-full rounded overflow-hidden border border-border aspect-video">
            <iframe
              title="Kiku86 location map"
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
