'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './HomeSections.module.css'

const regions = ['ЯНАО', 'ХМАО', 'Норильск', 'Бодайбо', 'Якутия', 'Воркута']

const extraRegions = ['Дудинка', 'Тикси', 'Певек', 'Анадырь', 'Диксон', 'Сабетта', 'Мирный', 'Ленск', 'Игарка', 'Усинск']

export default function ExperienceRange() {
  const hintRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const el = hintRef.current
    if (!el) return
    const media = matchMedia('(prefers-reduced-motion: reduce)')
    let stopped = false, visible = false
    let timer: ReturnType<typeof setTimeout> | undefined
    let pulseEnd: ReturnType<typeof setTimeout> | undefined
    const pause = () => {
      clearTimeout(timer)
      clearTimeout(pulseEnd)
      el.removeAttribute('data-demo')
    }
    const eligible = () => !stopped && visible && !document.hidden && !media.matches
    const pulse = () => {
      if (!eligible()) return
      el.setAttribute('data-demo', 'true')
      pulseEnd = setTimeout(() => el.removeAttribute('data-demo'), 700)
      timer = setTimeout(pulse, 3000)
    }
    const schedule = () => {
      pause()
      if (eligible()) timer = setTimeout(pulse, 1000)
    }
    const cancel = () => { stopped = true; pause() }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= .95
      schedule()
    }, { threshold: [0, .95] })
    observer.observe(el)
    const events = ['pointerdown', 'focus', 'keydown', 'click'] as const
    events.forEach(event => el.addEventListener(event, cancel))
    media.addEventListener('change', schedule)
    document.addEventListener('visibilitychange', schedule)
    return () => {
      observer.disconnect()
      pause()
      events.forEach(event => el.removeEventListener(event, cancel))
      media.removeEventListener('change', schedule)
      document.removeEventListener('visibilitychange', schedule)
    }
  }, [])

  const [regionIndex, setRegionIndex] = useState(-1)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!visible) return
    const timer = window.setTimeout(() => setVisible(false), 5500)
    return () => window.clearTimeout(timer)
  }, [regionIndex, visible])
  return (
    <section id="опыт" className={styles.graphite} aria-labelledby="experience-range-title">
      <div className="content-container py-[clamp(2.5rem,5vw,4.5rem)]">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-extrabold tracking-[0.12em] text-[var(--color-text-secondary-content)]">ПРАКТИКА</p>
            <h2 id="experience-range-title" className="mt-4 max-w-md text-[clamp(2.1rem,4vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-brand-primary">
              Сложные маршруты. Особые грузы.
            </h2>
          </div>

          <div className="border-l-2 border-brand-accent pl-6 sm:pl-8">
            <h3 className="text-2xl font-bold tracking-[-0.04em] text-brand-primary sm:text-3xl">
              Под задачу, а не по шаблону
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-secondary-content)] md:leading-relaxed lg:text-lg">
              Учитываем особенности груза, дорожные условия, сезонность и необходимость смены транспорта — ещё до начала перевозки.
            </p>
          </div>
        </div>

        <div className="mt-8 border-y border-brand-border py-6 sm:mt-10 sm:py-8">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[clamp(1.8rem,4vw,4.75rem)] font-extrabold leading-none tracking-[-0.06em] text-brand-primary">
            {regions.map((region, index) => (
              <span key={region} className={index === 0 ? 'text-brand-accent' : ''}>{region}</span>
            ))}
            <span className={styles.moreRegions}>
              <span className="text-[var(--color-text-secondary-content)]">и ещё</span>
              <button type="button" ref={hintRef} className={styles.regionButton}
                aria-label={visible ? `${extraRegions[regionIndex]}. Следующий город` : 'Другие города'}
                onClick={() => { setRegionIndex(index => (index + 1) % extraRegions.length); setVisible(true) }}>
                  <svg viewBox="0 0 48 56" aria-hidden="true">
                    <path d="M24 53S5 33 5 22a19 19 0 0 1 38 0c0 11-19 31-19 31Z" fill="none" stroke="currentColor" strokeWidth="3" />
                    <path d="M24 13v18M15 22h18" stroke="#E86F1C" strokeWidth="5" strokeLinecap="round" />
                  </svg>
              </button>
              <span className={styles.regionSlot} aria-live="polite">
                {visible && <span key={regionIndex} className={styles.regionValue}>{extraRegions[regionIndex]}</span>}
              </span>
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:mt-8 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0">
            <h3 className="text-xl font-bold leading-tight tracking-[-0.04em] text-brand-primary sm:text-2xl">
              Груз задаёт условия
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-text-secondary-content)]">
              Крупногабаритные, тяжеловесные и наливные грузы — подбираем транспорт и схему перевозки под их особенности.
            </p>
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-bold leading-tight tracking-[-0.04em] text-brand-accent sm:text-2xl">
              Не все маршруты заканчиваются асфальтом
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-text-secondary-content)]">
              Самара — Мирный: до порта Осетрово (Усть-Кут) — автомобилем, по Лене до Ленска — речным транспортом, затем снова автомобилем. С учётом сезона навигации.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
