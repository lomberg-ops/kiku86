const carouselImages = [
  { src: '/images/carousel/cranes.png', alt: 'Japanese cranes' },
  { src: '/images/carousel/koi-fish.png', alt: 'Koi fish' },
  { src: '/images/carousel/great-wave.png', alt: 'Great wave' },
  { src: '/images/carousel/geisha.png', alt: 'Geisha with parasol' },
  { src: '/images/carousel/japan-street.png', alt: 'Japanese street scene' },
  { src: '/images/carousel/torii-gate.png', alt: 'Torii gate' },
  { src: '/images/carousel/moon-waves.png', alt: 'Moon over waves' },
  { src: '/images/carousel/japan-village.png', alt: 'Japanese village' },
  { src: '/images/carousel/ramen-cat.png', alt: 'Ramen cat' },
  { src: '/images/carousel/fuji-bridge.png', alt: 'Mount Fuji bridge' },
  { src: '/images/carousel/torii-sakura.png', alt: 'Torii gate with sakura' },
  { src: '/images/carousel/sushi-cat.png', alt: 'Sushi cat' },
]

export function ImageCarousel() {
  return (
    <div
      className="overflow-hidden"
      style={{
        background: '#8B7355',
        borderTop: '3px solid #6B5740',
        borderBottom: '3px solid #6B5740',
      }}
    >
      <div className="carousel-track flex">
        {/* Render images twice for seamless loop */}
        {[...carouselImages, ...carouselImages].map((img, i) => (
          <img
            key={`${img.alt}-${i}`}
            src={img.src}
            alt={img.alt}
            className="h-[280px] w-auto flex-shrink-0"
            style={{ borderRight: '3px solid #6B5740' }}
          />
        ))}
      </div>
    </div>
  )
}
