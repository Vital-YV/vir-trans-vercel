'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './top-secret.module.css'

// Coordinates belong to the source artwork (1672 × 941), so the lights always
// follow the truck as the scene scales.
const ACTIVE_STAR = { x: 1585, y: 443 }

export default function TopSecretPage() {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const transitionTimer = useRef<number | null>(null)

  useEffect(() => () => {
    if (transitionTimer.current !== null) window.clearTimeout(transitionTimer.current)
  }, [])

  const openDigest = () => {
    if (transitionTimer.current !== null) return

    setIsUnlocked(true)
    transitionTimer.current = window.setTimeout(() => {
      router.push('/top-secret/digest')
    }, 400)
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerCopy}>
          <p>7% — TOP SECRET</p>
          <span className={styles.headerHint}>Нажмите на самую яркую</span>
        </div>
        <Link href="/">← Вернуться на сайт</Link>
      </header>

      <section className={styles.sky} aria-label="Секретный вход среди звёзд">
        <div className={`${styles.scene} ${isHovered ? styles.sceneActive : ''} ${isUnlocked ? styles.sceneUnlocked : ''}`}>
          <img src="/top-secret/top-secret-sky-clean.png" alt="" className={styles.skyImage} />
          <div className={styles.truckComposition}>
          <img src="/top-secret/top-secret-truck.png" alt="" className={styles.truckLayer} aria-hidden="true" />
          <button
            type="button"
            className={styles.headlightButton}
            style={{ left: `${(ACTIVE_STAR.x / 1672) * 100}%`, top: `${(ACTIVE_STAR.y / 941) * 100}%` }}
            aria-label="Открыть секретный вход"
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            onClick={openDigest}
          >
            <span className={styles.mainStar} aria-hidden="true" />
          </button>
          </div>
        </div>

      </section>
    </main>
  )
}
