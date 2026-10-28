'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from './team.module.css'

const photos = [
  { file: '06-fishing.webp', width: 1448, height: 1086 },
  { file: '05-prospector.webp', width: 1254, height: 1254 },
  { file: '02-kati.webp', width: 1122, height: 1402, caption: 'Должность обязывает рулить аккуратно' },
  { file: '04-sveta.webp', width: 1254, height: 1254 },
  { file: '03-ulya.webp', width: 1254, height: 1254, caption: 'Ну-ка, ну-ка… кого тут ещё посчитать и зафиксировать?!' },
  { file: '08-yar.webp', width: 1448, height: 1086 },
  { file: '09-sergei.webp', width: 1536, height: 1024 },
  { file: '07-sasha.webp', width: 1254, height: 1254 },
  { file: '10-norik.webp', width: 1254, height: 1254 },
  { file: '11-dany.webp', width: 1151, height: 1366 },
  { file: '12-sovet.webp', width: 1448, height: 1086 },
  { file: '01-vir.webp', width: 1122, height: 1402, caption: 'ВИР - Как ни крути буквы — дело одно.' },
]
const groups = [[0, 1], [2, 3, 4], [5, 6, 7], [8, 9], [10], [11]]

export default function TeamPage() {
  const [active, setActive] = useState<number | null>(null)
  const wall = useRef<HTMLDivElement>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const opener = useRef<HTMLButtonElement | null>(null)
  const touch = useRef<{ x: number; y: number } | null>(null)
  const [bonusOpen, setBonusOpen] = useState(false)
  const bonusDialog = useRef<HTMLDialogElement>(null)
  const bonusOpener = useRef<HTMLButtonElement>(null)
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
  useEffect(() => {
    if (!bonusOpen) return
    const modal = bonusDialog.current
    modal?.showModal()
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      modal?.close()
      document.body.style.overflow = overflow
      bonusOpener.current?.focus({ preventScroll: true })
    }
  }, [bonusOpen])
  const photo = active === null ? null : photos[active]
  return <main className={styles.teamPage}>
    <div className={styles.backgroundRoute} aria-hidden="true" />
    <div className={styles.backgroundNote} aria-hidden="true">внутренняя линия</div>
    <header className={styles.teamHeader}>
      <Link href="/" className={styles.teamBrand} aria-label="ВИР-ТРАНС, главная"><Image src="/brand/vir-trans-logo-cropped.png" alt="" width={2139} height={471} priority sizes="(min-width: 768px) 220px, 175px" /></Link>
      <Link href="/" className={styles.backLink}>← Вернуться на сайт</Link>
    </header>
    <section className={styles.intro} aria-labelledby="team-title">
      <p className={styles.eyebrow}><span className={styles.orange}>За кулисами</span> ВИР-ТРАНС</p>
      <h1 id="team-title">Всем привет! <svg className={styles.greetingLamp} viewBox="0 0 112 100" role="img" aria-label="Дружелюбная оранжевая лампа приветствует вас">
        <g stroke="#282825" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M48 84 29 54 57 31" fill="none" strokeWidth="6" />
          <path d="M48 84 29 54 57 31" fill="none" stroke="#E86F1C" strokeWidth="3" />
          <circle cx="29" cy="54" r="4.5" fill="#E86F1C" />
          <path d="M27 90c1-9 11-13 22-13s21 4 22 13Z" fill="#E86F1C" />
          <path d="M58 23c5-13 27-16 36-3 5 7 7 18 7 28-14 7-34 7-49 0 0-10 1-18 6-25Z" fill="#E86F1C" />
          <path d="M53 48c13 5 33 5 47 0" fill="none" stroke="#AE4C13" />
          <circle cx="67" cy="32" r="6.5" fill="#FFFCF2" strokeWidth="1.7" />
          <circle cx="86" cy="32" r="6.5" fill="#FFFCF2" strokeWidth="1.7" />
          <path d="m62 26-3-3m8 2-1-4m24 5 3-3m-8 2 1-4" fill="none" strokeWidth="1.7" />
          <circle cx="68.5" cy="33" r="3" fill="#282825" stroke="none" />
          <circle cx="87.5" cy="33" r="3" fill="#282825" stroke="none" />
          <circle cx="69.5" cy="31.8" r="1.1" fill="white" stroke="none" />
          <circle cx="88.5" cy="31.8" r="1.1" fill="white" stroke="none" />
          <path d="M71 43q6 7 12 0" fill="none" strokeWidth="2" />
          <path d="M60 17q8-6 16-4" fill="none" stroke="#FFC58F" strokeWidth="3" />
        </g>
      </svg></h1>
      <p className={styles.lead}><span className={styles.orange}>Знакомьтесь</span>, это <strong>те, кто обычно остаются за кадром — люди, на которых всё держится.</strong></p>
    </section>
    <section className={styles.members} aria-label="Коллектив Вир-Транс">
      <div ref={wall} className={styles.wall}>{groups.map((group, groupIndex) => <div key={groupIndex} data-group className={`${styles.group} ${group.length === 1 ? styles.solo : group.length === 3 ? styles.trio : styles.pair}`}>
        {groupIndex === groups.length - 1 && <div className={styles.virPhrase} aria-label="ВИР - Как ни крути буквы — дело одно.">
          <div className={styles.letters} aria-hidden="true">{['В', 'И', 'Р'].map(letter => <span className={styles.dancer} key={letter}><span className={styles.glyph}>{letter}</span></span>)}</div>
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
      <section className={styles.secretNote} aria-labelledby="secret-note-title">
        <span className={styles.pin} aria-hidden="true" />
        <h2 id="secret-note-title">Любопытство окупается!</h2>
        <p>Раз уж вы добрались до конца нашего закулисья, для вас кое-что припасено.</p>
        <button ref={bonusOpener} type="button" className={styles.bonusButton} aria-haspopup="dialog" onClick={() => setBonusOpen(true)}>Забрать секретный бонус на первую перевозку</button>
      </section>
      <dialog ref={bonusDialog} className={styles.bonusDialog} aria-labelledby="bonus-title" aria-describedby="bonus-terms bonus-unavailable" onCancel={event => { event.preventDefault(); setBonusOpen(false) }} onKeyDown={event => {
        if (event.key !== 'Tab') return
        const controls = event.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), textarea:not(:disabled)')
        const first = controls[0]; const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }}>
        {bonusOpen && <div className={styles.bonusContent}>
          <button type="button" autoFocus className={styles.bonusClose} aria-label="Закрыть окно бонуса" onClick={() => setBonusOpen(false)}>×</button>
          <h2 id="bonus-title">Ваш секретный бонус!</h2>
          <div id="bonus-terms"><p>Вам полагается скидка на первый рейс в размере 20% от согласованной ставки.</p><p>Скидка действует в течение 30 дней с момента регистрации.</p></div>
          <form className={styles.bonusForm} onSubmit={event => event.preventDefault()}>
            <label htmlFor="bonus-inn">ИНН компании — обязательно<input id="bonus-inn" name="inn" type="text" inputMode="numeric" pattern="[0-9]{10}|[0-9]{12}" maxLength={12} required aria-describedby="bonus-inn-help" /><small id="bonus-inn-help">10 или 12 цифр</small></label>
            <label htmlFor="bonus-company">Название компании — обязательно<input id="bonus-company" name="company" type="text" required autoComplete="organization" /></label>
            <label htmlFor="bonus-email">Электронная почта — обязательно<input id="bonus-email" name="email" type="email" required autoComplete="email" aria-describedby="bonus-email-help" /><small id="bonus-email-help">На этот адрес отправим номер регистрации вашего бонуса</small></label>
            <label htmlFor="bonus-shipment">Предполагаемая перевозка — необязательно<textarea id="bonus-shipment" name="shipment" placeholder="Маршрут, груз — если уже известны" /></label>
            <p className={styles.bonusPrivacy} id="bonus-privacy">Данные нужны для регистрации бонуса и связи по предполагаемой перевозке. Сейчас они не отправляются и не сохраняются. Политика конфиденциальности и полный текст согласия пока не опубликованы; до их публикации регистрация недоступна.</p>
            <label className={styles.bonusConsent}><input type="checkbox" name="consent" required disabled aria-describedby="bonus-privacy" />Я согласен на обработку указанных данных ВИР-ТРАНС для регистрации бонуса и связи по предполагаемой перевозке.</label>
            <p className={styles.bonusPrivacy} id="bonus-unavailable">Регистрация станет доступна после подключения отправки и сохранения заявки. До этого бонус не регистрируется и 30-дневный срок не начинается.</p>
            <button type="submit" className={styles.bonusButton} disabled aria-describedby="bonus-unavailable bonus-privacy">Зарегистрировать бонус</button>
          </form>
        </div>}
      </dialog>
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
