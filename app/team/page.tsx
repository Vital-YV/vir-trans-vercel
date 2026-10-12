'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './team.module.css'

const photos = [
  { file: '02-kati.webp', width: 1122, height: 1402, caption: 'Должность обязывает рулить аккуратно' },
  { file: '03-ulya.webp', width: 1254, height: 1254, caption: 'Ну-ка, ну-ка… кого тут ещё посчитать и зафиксировать?!' },
  { file: '04-sveta.webp', width: 1254, height: 1254 },
  { file: '05-prospector.webp', width: 1254, height: 1254 },
  { file: '06-fishing.webp', width: 1448, height: 1086 },
  { file: '07-sasha.webp', width: 1254, height: 1254 },
  { file: '08-yar.webp', width: 1448, height: 1086 },
  { file: '09-sergei.webp', width: 1536, height: 1024 },
  { file: '10-norik.webp', width: 1254, height: 1254 },
  { file: '11-dany.webp', width: 1151, height: 1366 },
  { file: '12-sovet.webp', width: 1448, height: 1086 },
  { file: '01-vir.webp', width: 1122, height: 1402, caption: 'ВИР - Как ни крути буквы — дело одно.' },
]
const groups = [[0, 1, 2], [3, 4], [5, 6, 7], [8, 9], [10], [11]]

export default function TeamPage() {
  const [active, setActive] = useState<number | null>(null)
  const wall = useRef<HTMLDivElement>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const opener = useRef<HTMLButtonElement | null>(null)
  const touch = useRef<{ x: number; y: number } | null>(null)
  const isOpen = active !== null
  const move = (direction: number) => setActive(current => current === null ? null : (current + direction + photos.length) % photos.length)
  useEffect(() => {
    const nodes = wall.current?.querySelectorAll<HTMLElement>('[data-group]')
    if (!nodes || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove(styles.waiting); entry.target.classList.add(styles.revealed); observer.unobserve(entry.target) }
    }), { threshold: 0.08 })
    nodes.forEach(node => { node.classList.add(styles.waiting); observer.observe(node) })
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (!isOpen) return
    const modal = dialog.current
    modal?.showModal()
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { modal?.close(); document.body.style.overflow = overflow; opener.current?.focus({ preventScroll: true }) }
  }, [isOpen])
  const photo = active === null ? null : photos[active]
  return <main className={styles.teamPage}>
    <div className={styles.backgroundRoute} aria-hidden="true" />
    <div className={styles.backgroundNote} aria-hidden="true">внутренняя линия</div>
    <header className={styles.teamHeader}>
      <a href="/" className={styles.teamBrand} aria-label="ВИР-ТРАНС, главная"><Image src="/brand/vir-trans-logo-cropped.png" alt="" width={2139} height={471} priority sizes="(min-width: 768px) 220px, 175px" /></a>
      <a href="/" className={styles.backLink}>← Вернуться на сайт</a>
    </header>
    <section className={styles.intro} aria-labelledby="team-title">
      <p className={styles.eyebrow}>режим: внутренний</p>
      <h1 id="team-title">Ну раз вы <span className={styles.orange}>всё-таки</span> вошли…</h1>
      <p className={styles.lead}>Те, кто обычно остаются за кадром — люди, на которых всё держится.</p>
    </section>
    <section className={styles.members} aria-label="Коллектив Вир-Транс">
      <div ref={wall} className={styles.wall}>{groups.map((group, groupIndex) => <div key={groupIndex} data-group className={`${styles.group} ${group.length === 1 ? styles.solo : group.length === 3 ? styles.trio : styles.pair}`}>
        {groupIndex === groups.length - 1 && <div className={styles.virPhrase} aria-label="ВИР - Как ни крути буквы — дело одно.">
          <div className={styles.letters} aria-hidden="true"><span>В</span><span>И</span><span>Р</span></div>
          <p aria-hidden="true">Как ни <span className={styles.orange}>крути</span> буквы — дело одно.</p>
        </div>}
        {group.map(index => <figure key={photos[index].file} className={`${styles.photo} ${styles[`photo${Number(photos[index].file.slice(0, 2))}`]}`}>
          <span className={styles.pin} aria-hidden="true" />
          <button className={styles.photoButton} aria-label={`Открыть шарж ${index + 1} из 12`} onClick={event => { opener.current = event.currentTarget; setActive(index) }}>
            <Image src={`/team/${photos[index].file}`} alt={`Шарж ${index + 1} из коллектива ВИР-ТРАНС`} width={photos[index].width} height={photos[index].height} priority={index === 0} sizes={group.length === 1 ? '(min-width: 768px) 800px, 90vw' : group.length === 3 ? '(min-width: 768px) 380px, 90vw' : '(min-width: 768px) 580px, 90vw'} />
          </button>
          {photos[index].caption && index !== photos.length - 1 && <figcaption>{photos[index].caption}</figcaption>}
        </figure>)}
      </div>)}</div>
    </section>
    <dialog ref={dialog} className={styles.lightbox} aria-label="Просмотр шаржей коллектива" onCancel={event => { event.preventDefault(); setActive(null) }} onClick={event => { if (event.target === event.currentTarget) setActive(null) }} onKeyDown={event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1) }
    }}>
      {photo && <div className={styles.viewer}>
        <button autoFocus className={styles.close} aria-label="Закрыть изображение" onClick={() => setActive(null)}>×</button>
        <div className={styles.counter} aria-live="polite" aria-atomic="true">{(active ?? 0) + 1} / 12</div>
        <button className={styles.previous} aria-label="Предыдущее изображение" onClick={() => move(-1)}>←</button>
        <div className={styles.largeImage} onTouchStart={event => { const point = event.touches[0]; touch.current = { x: point.clientX, y: point.clientY } }} onTouchCancel={() => { touch.current = null }} onTouchEnd={event => {
          const start = touch.current; touch.current = null
          if (!start) return
          const point = event.changedTouches[0]; const dx = point.clientX - start.x; const dy = point.clientY - start.y
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) move(dx < 0 ? 1 : -1)
        }}>
          <Image key={photo.file} src={`/team/${photo.file}`} alt={`Шарж ${(active ?? 0) + 1} из коллектива ВИР-ТРАНС`} width={photo.width} height={photo.height} sizes="100vw" />
        </div>
        <button className={styles.next} aria-label="Следующее изображение" onClick={() => move(1)}>→</button>
        {photo.caption && <p className={styles.viewerCaption}>{photo.caption}</p>}
      </div>}
    </dialog>
  </main>
}
