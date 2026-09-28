'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './EtrnStamp.module.css'

const issues = [
  'Роуминг не сработал?',
  'Подтверждение не пришло?',
  'Водитель уже уехал со склада?',
  'Токен не на месте?',
  'Груз сдан, а отметки нет?',
  'Бумага есть, ЭТрН завис?',
  'Что делать экспедитору?',
]

type EtrnStampProps = {
  actionHref: string
}

export default function EtrnStamp({ actionHref }: EtrnStampProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isRevealing, setIsRevealing] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isExpanded) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsExpanded(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isExpanded])

  const openTopic = () => {
    if (isExpanded || isRevealing) return

    const section = sectionRef.current
    if (!section) {
      setIsExpanded(true)
      return
    }

    const viewportHeight = window.visualViewport?.height ?? window.innerHeight
    const targetOffset = viewportHeight * 0.2
    const sectionTop = section.getBoundingClientRect().top
    const targetTop = Math.max(0, Math.min(
      window.scrollY + sectionTop - targetOffset,
      document.documentElement.scrollHeight - viewportHeight,
    ))
    const shouldReposition = sectionTop > viewportHeight * 0.32 && Math.abs(window.scrollY - targetTop) > 2
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!shouldReposition) {
      setIsExpanded(true)
      return
    }

    if (reducedMotion) {
      window.scrollTo({ top: targetTop, behavior: 'auto' })
      setIsExpanded(true)
      return
    }

    setIsRevealing(true)
    window.scrollTo({ top: targetTop, behavior: 'smooth' })

    let settledFrames = 0
    const revealWhenSettled = () => {
      if (Math.abs(window.scrollY - targetTop) <= 2) {
        settledFrames += 1
        if (settledFrames >= 2) {
          setIsRevealing(false)
          setIsExpanded(true)
          return
        }
      } else {
        settledFrames = 0
      }
      window.requestAnimationFrame(revealWhenSettled)
    }
    window.requestAnimationFrame(revealWhenSettled)
  }

  return (
    <section ref={sectionRef} className={`${styles.section}${isExpanded ? ` ${styles.expanded}` : ''}`} aria-label="Актуально: переход на ЭТрН">
      <div className="content-container">
        <div className={styles.inner}>
          <span className={styles.label}>Актуально</span>
          <span className={styles.updated}>Обновлено 28 сентября 2026</span>
          <button
            type="button"
            className={styles.stamp}
            onClick={openTopic}
            disabled={isExpanded || isRevealing}
            aria-expanded={isExpanded}
            aria-label="Открыть актуальные вопросы по ЭТрН"
          >
            <svg className={styles.stampSvg} viewBox="0 0 360 170" aria-hidden="true">
              <path className={styles.outline} d="M35 56L18 35L62 31L53 10L95 22L111 4L139 23L166 8L184 30L223 14L236 38L278 24L275 50L330 54L310 77L343 97L306 111L323 141L277 137L265 160L229 145L205 166L178 146L147 162L129 140L90 153L83 127L38 130L52 103L17 87L48 73Z" />
              <path className={styles.runner} d="M35 56L18 35L62 31L53 10L95 22L111 4L139 23L166 8L184 30L223 14L236 38L278 24L275 50L330 54L310 77L343 97L306 111L323 141L277 137L265 160L229 145L205 166L178 146L147 162L129 140L90 153L83 127L38 130L52 103L17 87L48 73Z" />
            </svg>
            <span className={styles.stampWords}>
              <span className={styles.closedTitle}>Переход на ЭТрН?</span>
              <span className={styles.openPrompt}>Открыть тему →</span>
            </span>
          </button>

          {isExpanded && (
            <div className={styles.scene}>
              <button type="button" className={styles.collapse} onClick={() => setIsExpanded(false)} aria-label="Свернуть вопросы по ЭТрН">×</button>
              <div className={styles.center}>
                <p>Что делать на практике?</p>
                <a href={actionHref}>Разберёмся →</a>
              </div>
              <div className={styles.issues}>
                {issues.map((issue) => <p key={issue} className={styles.issue}>{issue}</p>)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
