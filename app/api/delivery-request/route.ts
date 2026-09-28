import { Resend } from 'resend'
import { NextResponse } from 'next/server'

type FormSource = 'delivery' | 'etrn'
type FormPayload = Record<string, unknown> & { source?: unknown; website?: unknown }

const MAX_LENGTHS: Record<string, number> = {
  name: 120,
  contact: 160,
  message: 3000,
  situation: 3000,
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function text(value: unknown, maxLength = 0) {
  if (typeof value !== 'string') return ''

  const sanitized = value
    .replace(/<[^>]*>/g, '')
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  return maxLength > 0 ? sanitized.slice(0, maxLength) : sanitized
}

function field(payload: FormPayload, name: keyof typeof MAX_LENGTHS) {
  return text(payload[name], MAX_LENGTHS[name])
}

function hasOverlongField(payload: FormPayload) {
  return Object.entries(MAX_LENGTHS).some(([name, maxLength]) =>
    typeof payload[name] === 'string' && payload[name].trim().length > maxLength,
  )
}

function isSource(value: unknown): value is FormSource {
  return value === 'delivery' || value === 'etrn'
}

function invalid(message: string) {
  return NextResponse.json({ message }, { status: 400 })
}

export async function POST(request: Request) {
  let payload: FormPayload

  try {
    const body: unknown = await request.json()
    if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('Invalid payload')
    payload = body as FormPayload
  } catch {
    return invalid('Некорректные данные формы.')
  }

  if (text(payload.website, 200)) {
    return NextResponse.json({ message: 'Спасибо. Сообщение отправлено.' })
  }

  if (!isSource(payload.source)) return invalid('Неизвестный тип обращения.')
  if (hasOverlongField(payload)) return invalid('Одно из полей слишком длинное.')

  const contact = field(payload, 'contact')
  if (!contact) return invalid('Укажите контакт для связи.')
  if (contact.includes('@') && !EMAIL_PATTERN.test(contact)) return invalid('Проверьте адрес электронной почты.')

  const source = payload.source
  const name = field(payload, 'name')
  const submittedAt = new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'medium',
    timeStyle: 'medium',
    timeZone: 'Europe/Moscow',
  }).format(new Date())

  let subject: string
  let lines: string[]

  if (source === 'etrn') {
    const situation = field(payload, 'situation')
    if (!name || !situation) return invalid('Заполните обязательные поля.')

    subject = 'Вопрос по ЭТрН с сайта Вир-Транс'
    lines = [
      'Тип обращения: ЭТрН',
      `Имя: ${name}`,
      `Контакт: ${contact}`,
      `Описание ситуации: ${situation}`,
      'Страница: /etrn',
      `Дата и время отправки: ${submittedAt}`,
    ]
  } else {
    const message = field(payload, 'message')
    if (!message) return invalid('Заполните обязательные поля.')

    subject = 'Новая заявка с сайта Вир-Транс'
    lines = [
      'Тип обращения: Заявка с сайта',
      `Контакт: ${contact}`,
      `Сообщение: ${message}`,
      `Дата и время отправки: ${submittedAt}`,
    ]
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.FORM_TO_EMAIL
  const from = process.env.FORM_FROM_EMAIL

  if (!apiKey || !to || !from) {
    console.error('Form email is not configured')
    return NextResponse.json({ message: 'Сервис отправки временно недоступен.' }, { status: 503 })
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      text: lines.join('\n'),
      ...(EMAIL_PATTERN.test(contact) ? { replyTo: contact } : {}),
    })

    if (error) {
      console.error('Resend rejected form email', error.name)
      return NextResponse.json({ message: 'Сервис отправки временно недоступен.' }, { status: 503 })
    }
  } catch {
    console.error('Form email delivery failed')
    return NextResponse.json({ message: 'Сервис отправки временно недоступен.' }, { status: 503 })
  }

  return NextResponse.json({ message: 'Спасибо. Сообщение отправлено.' })
}
