'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'

const cities = [
  { name: 'Калининград', zone: 'Europe/Kaliningrad' },
  { name: 'Москва', zone: 'Europe/Moscow' },
  { name: 'Самара', zone: 'Europe/Samara' },
  { name: 'Новосибирск', zone: 'Asia/Novosibirsk' },
  { name: 'Владивосток', zone: 'Asia/Vladivostok' },
  { name: 'Екатеринбург', zone: 'Asia/Yekaterinburg' },
  { name: 'Омск', zone: 'Asia/Omsk' },
  { name: 'Иркутск', zone: 'Asia/Irkutsk' },
  { name: 'Якутск', zone: 'Asia/Yakutsk' },
  { name: 'Петропавловск-Камчатский', zone: 'Asia/Kamchatka' },
].map(city => ({
  ...city,
  parts: new Intl.DateTimeFormat('ru-RU', {
    timeZone: city.zone, hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23',
  }),
  display: new Intl.DateTimeFormat('ru-RU', {
    timeZone: city.zone, hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }),
}))

const extraCities = cities.filter(city => !['Europe/Kaliningrad', 'Asia/Vladivostok'].includes(city.zone))

export default function CityClocks() {
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

  // Сервер и первый клиентский рендер совпадают; время появляется после mount.
  const [now, setNow] = useState<Date | null>(null)
  useEffect(() => {
    const update = () => setNow(new Date())
    update()
    const timer = window.setInterval(update, 1000)
    return () => window.clearInterval(timer)
  }, [])
  const [extraIndex, setExtraIndex] = useState(-1)
  const [extraVisible, setExtraVisible] = useState(false)
  useEffect(() => {
    if (!extraVisible) return
    const timer = window.setTimeout(() => setExtraVisible(false), 5500)
    return () => window.clearTimeout(timer)
  }, [extraIndex, extraVisible])
  const renderClock = (city: typeof cities[number]) => {
      const parts = now ? city.parts.formatToParts(now) : []
      const value = (type: Intl.DateTimeFormatPartTypes) => Number(parts.find(part => part.type === type)?.value ?? 0)
      const hours = value('hour'), minutes = value('minute'), seconds = value('second')
      return <div key={city.name} className={styles.clock} data-clock-zone={city.zone}>
        <svg viewBox="0 0 64 64" width="48" height="48" className={styles.clockFace} aria-hidden="true">
          <rect x="3.5" y="3.5" width="57" height="57" rx="16.5" fill="#fff" stroke="#282825" strokeWidth="5" />
          {Array.from({ length: 12 }, (_, index) => <line key={index} x1="32" y1="7" x2="32" y2={index % 3 === 0 ? '11' : '9'} stroke="#282825" strokeWidth="1.6" transform={`rotate(${index * 30} 32 32)`} />)}
          {now && <g strokeLinecap="round">
            <line data-hand="hour" x1="32" y1="32" x2="32" y2="19" stroke="#282825" strokeWidth="3.5" transform={`rotate(${(hours % 12) * 30 + minutes / 2 + seconds / 120} 32 32)`} />
            <line data-hand="minute" x1="32" y1="32" x2="32" y2="12" stroke="#282825" strokeWidth="2.5" transform={`rotate(${minutes * 6 + seconds / 10} 32 32)`} />
            <line data-hand="second" x1="32" y1="36" x2="32" y2="11" stroke="#e86f1c" strokeWidth="0.9" transform={`rotate(${seconds * 6} 32 32)`} />
          </g>}
          <circle cx="32" cy="32" r="1.8" fill="#e86f1c" />
        </svg>
        <span>{city.name}</span>
        <time className="sr-only" dateTime={now?.toISOString()}>{now ? city.display.format(now) : '—:—'}</time>
      </div>
  }
  return <div className={styles.clocks} aria-label="Местное время">
    {renderClock(cities[0])}
    <div className={styles.clockMore}>
      <button type="button" ref={hintRef} className={styles.clockPlus} aria-label="Следующий часовой пояс" aria-expanded={extraVisible} aria-controls="extra-city-clock"
        onClick={() => { setExtraIndex(index => (index + 1) % extraCities.length); setExtraVisible(true) }}>
        <svg viewBox="0 0 64 64" className={styles.clockFace} aria-hidden="true">
          <rect x="3.5" y="3.5" width="57" height="57" rx="16.5" fill="#fff" stroke="#282825" strokeWidth="5" />
          <path d="M32 19v26M19 32h26" stroke="#e86f1c" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </button>
      <div id="extra-city-clock" className={styles.clockPopup} hidden={!extraVisible} aria-live="polite">
        {extraVisible && <div key={extraIndex} className={styles.clockReveal}>{renderClock(extraCities[extraIndex])}</div>}
      </div>
    </div>
    {renderClock(cities[4])}
  </div>
}
