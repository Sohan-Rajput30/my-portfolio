import { useEffect, useState } from 'react'

// Reading-progress bar at the top and a back-to-top button.
function ScrollUI() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      <div
        className="progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <a
        href="#home"
        className={`to-top${progress > 0.12 ? ' show' : ''}`}
        aria-label="Back to top"
        tabIndex={progress > 0.12 ? 0 : -1}
      >
        ↑
      </a>
    </>
  )
}

export default ScrollUI
