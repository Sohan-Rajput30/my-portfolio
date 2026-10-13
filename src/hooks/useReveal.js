import { useEffect } from 'react'

// Fades in any element with the `reveal` class once, as it scrolls into view.
export default function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const root = document.documentElement

    if (!('IntersectionObserver' in window)) return

    root.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    items.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [])
}
