'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

type DeliveryFormData = {
  source: 'delivery'
  contact: string
  message: string
  website: string
}

const initialFormData: DeliveryFormData = { source: 'delivery', contact: '', message: '', website: '' }

export function DeliveryRequestForm({ variant = 'floating' }: { variant?: 'floating' | 'inline' }) {
  const pathname = usePathname()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState<DeliveryFormData>(initialFormData)

  const reset = () => setFormData(initialFormData)
  const closeModal = () => {
    setIsModalOpen(false)
    setIsSubmitted(false)
    setSubmitError('')
    reset()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitError('')
    try {
      const response = await fetch('/api/delivery-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error('Delivery request failed')
      setIsSubmitted(true)
      reset()
      if (variant === 'floating') window.setTimeout(closeModal, 3000)
    } catch {
      setSubmitError('Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь с нами по телефону.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const fields = (
    <>
      <label className="sr-only" aria-hidden="true">Не заполняйте это поле<input name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" /></label>
      <label className="block min-w-0">
        <span className="mb-2 block text-sm font-semibold text-brand-primary">Контакт</span>
        <input name="contact" value={formData.contact} onChange={handleChange} required placeholder="Телефон, Telegram или e-mail" className="min-h-14 w-full min-w-0 rounded-[var(--radius-sm)] border border-[var(--color-form-border)] bg-transparent px-4 text-base text-brand-primary outline-none transition-colors placeholder:text-[var(--color-text-secondary-content)] focus:border-brand-primary" />
      </label>
      <label className="block min-w-0">
        <span className="mb-2 block text-sm font-semibold text-brand-primary">Что нужно?</span>
        <textarea name="message" value={formData.message} onChange={handleChange} required maxLength={3000} rows={5} placeholder="Например: Самара → Казань, 12 тонн, загрузка на следующей неделе." className="w-full min-w-0 resize-y rounded-[var(--radius-sm)] border border-[var(--color-form-border)] bg-transparent px-4 py-3 text-base leading-6 text-brand-primary outline-none transition-colors placeholder:text-[var(--color-text-secondary-content)] focus:border-brand-primary" />
      </label>
    </>
  )

  if (variant === 'inline') {
    if (isSubmitted) return <p className="border-l-2 border-brand-accent py-3 pl-4 text-base leading-relaxed text-brand-primary">Ваша заявка принята. Скоро с вами свяжутся.</p>
    return <form onSubmit={handleSubmit} className="grid min-w-0 gap-5"><>{fields}</><button type="submit" disabled={isSubmitting} className="inline-flex min-h-14 w-full items-center justify-center rounded-[var(--radius-sm)] bg-brand-accent px-8 text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent-orange-hover)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:text-lg">{isSubmitting ? 'Отправляем…' : 'Написать нам'}</button>{submitError && <p className="text-sm leading-6 text-brand-primary" role="alert">{submitError}</p>}</form>
  }

  const hidden = pathname === '/' || pathname === '/service' || pathname === '/forClients' || pathname === '/vacancy' || pathname === '/etrn' || pathname === '/top-secret' || pathname === '/top-secret/digest'
  return <div><button type="button" onClick={() => setIsModalOpen(true)} className={`${hidden ? 'hidden' : ''} flex items-center justify-center rounded-full bg-gradient-to-r from-[#219EBC] to-[#3b82f6] px-5 py-3 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:scale-105 hover:from-[#1b7a91] hover:to-[#2563eb] md:px-6`}><span className="text-xl font-bold md:hidden">?</span><span className="hidden md:block">Задать вопрос</span></button>{isModalOpen && <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4" onMouseDown={(event) => event.currentTarget === event.target && closeModal()}><div className="my-8 w-full max-w-md rounded-lg bg-white p-6"><button type="button" onClick={closeModal} className="float-right -mr-2 -mt-2 h-10 w-10 rounded-full text-xl hover:bg-black/5" aria-label="Закрыть">×</button>{isSubmitted ? <div className="py-8 text-center"><h2 className="text-xl font-bold">Ваша заявка принята в работу</h2><p className="mt-3">Скоро с вами свяжутся.</p></div> : <><h2 className="mb-5 text-xl font-bold">Напишите нам</h2><form onSubmit={handleSubmit} className="grid min-w-0 gap-5"><>{fields}</><div className="flex flex-wrap gap-3"><button type="button" onClick={closeModal} className="min-h-11 rounded border px-4 hover:bg-gray-100">Отмена</button><button type="submit" disabled={isSubmitting} className="min-h-11 rounded bg-[#219EBC] px-4 text-white hover:bg-[#3b457c] disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? 'Отправляем…' : 'Написать нам'}</button></div>{submitError && <p className="text-sm text-red-700" role="alert">{submitError}</p>}</form></>}</div></div>}</div>
}
