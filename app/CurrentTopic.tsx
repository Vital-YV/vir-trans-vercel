'use client'

import { useEffect, useId, useRef, useState, type RefObject } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'

// Для смены темы достаточно обновить эти данные.
const topic = {
  title: 'Есть вопросы по оформлению ЭТрН?',
  description: 'Мы собрали самое важное. Возможно, здесь вы найдёте ответы.',
  action: 'Разобраться с ЭТрН →',
  href: '/etrn',
}

export default function CurrentTopic({ placement = 'below', className = '', onNavigate, panelHost }: { placement?: 'above' | 'below' | 'inline'; className?: string; onNavigate?: () => void; panelHost?: RefObject<HTMLDivElement | null> }) {
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLDivElement>(null)
  const id = useId()
  useEffect(() => {
    if (!open) return
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node) && !panel.current?.contains(event.target as Node)) setOpen(false) }
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { event.stopImmediatePropagation(); setOpen(false); button.current?.focus() } }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', escape, true)
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape, true) }
  }, [open])
  const card = <div ref={panel} id={id} data-current-panel className={`${panelHost || placement === 'inline' ? 'relative my-3 w-full max-w-[22rem]' : `absolute right-0 z-50 w-[min(20rem,calc(100vw-3.5rem))] ${placement === 'above' ? 'bottom-full mb-3' : 'top-full mt-3'}`} whitespace-normal rounded-[var(--radius-md)] border border-black/10 bg-brand-background p-5 text-left text-sm leading-6 text-brand-primary shadow-lg`}>
    <p className="font-extrabold">{topic.title}</p>
    <p className="mt-2 font-normal">{topic.description}</p>
    <Link href={topic.href} className="mt-3 inline-block font-bold text-brand-accent hover:underline" onClick={() => { setOpen(false); onNavigate?.() }}>{topic.action}</Link>
  </div>
  return <div ref={root} className="relative min-w-0">
    <button ref={button} type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)} className={className}>Актуальное</button>
    {open && (panelHost?.current ? createPortal(card, panelHost.current) : card)}
  </div>
}
