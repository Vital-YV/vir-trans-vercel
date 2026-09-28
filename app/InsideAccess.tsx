'use client'

import { createContext, type ReactNode, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

type InsideAccessContextValue = {
  openDialog: (opener: HTMLElement) => void
}

const InsideAccessContext = createContext<InsideAccessContextValue | null>(null)

export function InsideAccessProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)
  const redirectTimerRef = useRef<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<'error' | 'success' | null>(null)
  const [showHint, setShowHint] = useState(false)

  const closeDialog = useCallback(() => {
    if (redirectTimerRef.current) window.clearTimeout(redirectTimerRef.current)
    redirectTimerRef.current = null
    setIsOpen(false)
    setPassword('')
    setMessage(null)
    setShowHint(false)
    window.requestAnimationFrame(() => openerRef.current?.focus())
  }, [])

  const openDialog = useCallback((opener: HTMLElement) => {
    openerRef.current = opener
    setPassword('')
    setMessage(null)
    setShowHint(false)
    setIsOpen(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 0)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeDialog()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.clearTimeout(focusTimer)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, closeDialog])

  useEffect(() => () => {
    if (redirectTimerRef.current) window.clearTimeout(redirectTimerRef.current)
  }, [])

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password.trim().toLocaleLowerCase('ru-RU') !== 'поехали с вир-транс') {
      setMessage('error')
      return
    }

    setMessage('success')
    redirectTimerRef.current = window.setTimeout(() => {
      setIsOpen(false)
      router.push('/team')
    }, 800)
  }

  return (
    <InsideAccessContext.Provider value={{ openDialog }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4" onMouseDown={(event) => event.currentTarget === event.target && closeDialog()}>
          <section role="dialog" aria-modal="true" aria-labelledby="inside-access-title" className="w-full max-w-md rounded-[var(--radius-md)] border border-black/10 bg-brand-background p-6 text-brand-primary shadow-xl sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <h2 id="inside-access-title" className="text-2xl font-extrabold tracking-[-0.04em] sm:text-3xl">Служебный вход</h2>
              <button type="button" onClick={closeDialog} className="-mr-2 -mt-2 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl transition-colors hover:bg-black/5" aria-label="Закрыть окно">×</button>
            </div>

            <form className="mt-7" onSubmit={submit}>
              <label className="sr-only" htmlFor="inside-password">Введите пароль</label>
              <input
                ref={inputRef}
                id="inside-password"
                type="text"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                  if (message) setMessage(null)
                }}
                placeholder="Введите пароль"
                className="min-h-14 w-full rounded-[var(--radius-sm)] border border-black/20 bg-white px-4 text-base outline-none transition-colors placeholder:text-brand-primary/45 focus:border-brand-accent"
              />
              <button type="submit" className="mt-3 inline-flex min-h-14 w-full items-center justify-center rounded-[var(--radius-sm)] bg-brand-accent px-6 text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent-orange-hover)]">Войти</button>
            </form>

            {message === 'error' && <p className="mt-4 text-sm text-brand-secondary">Не тот пароль.</p>}
            {message === 'success' && <p className="mt-4 text-sm font-semibold text-brand-secondary">Ну вот. Теперь можно.</p>}

            <button type="button" className="mt-5 text-sm text-brand-primary/65 underline decoration-brand-accent/70 underline-offset-4 transition-colors hover:text-brand-accent" onClick={() => setShowHint((visible) => !visible)}>
              Не знаете пароль?
            </button>
            {showHint && <p className="mt-3 text-sm leading-6 text-brand-primary/70">Только никому 🤐 Пароль — внизу сайта.</p>}
          </section>
        </div>
      )}
    </InsideAccessContext.Provider>
  )
}

type InsideAccessLinkProps = {
  children: ReactNode
  className?: string
  onOpen?: () => void
}

export function InsideAccessLink({ children, className = '', onOpen }: InsideAccessLinkProps) {
  const context = useContext(InsideAccessContext)

  if (!context) throw new Error('InsideAccessLink must be used inside InsideAccessProvider')

  return (
    <button
      type="button"
      className={`text-left ${className}`}
      onClick={(event) => {
        onOpen?.()
        context.openDialog(event.currentTarget)
      }}
    >
      {children}
    </button>
  )
}

export function useInsideAccess() {
  const context = useContext(InsideAccessContext)

  if (!context) throw new Error('useInsideAccess must be used inside InsideAccessProvider')

  return context
}
