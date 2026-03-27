"use client"

import { useEffect, useRef } from "react"

export function BookingWidget({ restaurant }: { restaurant: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const script = document.createElement("script")
    script.src = "https://booking.klarsystems.com/widget.js"
    script.setAttribute("data-restaurant", restaurant)
    containerRef.current.appendChild(script)
    return () => {
      script.remove()
    }
  }, [restaurant])

  return <div ref={containerRef} />
}
