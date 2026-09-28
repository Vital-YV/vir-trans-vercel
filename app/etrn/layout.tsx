import type { Metadata } from 'next'
import { publicMetadata } from '../site'

export const metadata: Metadata = publicMetadata({
  title: 'ЭТрН на практике — что делать участникам перевозки | Вир-Транс',
  description: 'Практическая памятка по ЭТрН: роли участников, порядок действий, роуминг и типовые ситуации при погрузке, перевозке и выгрузке.',
  path: '/etrn',
})

export default function EtrnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
