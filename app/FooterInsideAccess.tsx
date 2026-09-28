'use client'

import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { useInsideAccess } from './InsideAccess'

export default function FooterInsideAccess() {
  const { openDialog } = useInsideAccess()
  const resetTimerRef = useRef<number | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => () => {
    if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current)
  }, [])

  const copyPassword = async (event: MouseEvent<HTMLButtonElement>) => {
    const opener = event.currentTarget
    let copiedSuccessfully = false

    try {
      await navigator.clipboard.writeText('Поехали с Вир-Транс')
      copiedSuccessfully = true
    } catch {
      const fallback = document.createElement('textarea')
      try {
        fallback.value = 'Поехали с Вир-Транс'
        fallback.style.position = 'fixed'
        fallback.style.opacity = '0'
        document.body.appendChild(fallback)
        fallback.select()
        copiedSuccessfully = document.execCommand('copy')
      } catch {
        copiedSuccessfully = false
      } finally {
        fallback.remove()
      }
    }

    if (copiedSuccessfully) {
      setCopied(true)
      if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current)
      resetTimerRef.current = window.setTimeout(() => setCopied(false), 1250)
    }

    openDialog(opener)
  }

  return (
    <div className="mt-3 text-xs leading-5 text-[var(--color-text-secondary-on-graphite)]">
      <p>Пароль: <span className="text-white">Поехали с Вир-Транс</span>{' '}<button type="button" onClick={copyPassword} className="text-brand-accent underline decoration-brand-accent/60 underline-offset-2 transition-colors hover:text-white">{copied ? 'Скопировано' : 'Скопировать'}</button></p>
    </div>
  )
}
