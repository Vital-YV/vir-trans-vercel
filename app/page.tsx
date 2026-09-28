import type { Metadata } from 'next'
import Hero from './Hero'
import InquirySituations from './InquirySituations'
import WorkProcess from './WorkProcess'
import ExperienceRange from './ExperienceRange'
import TrustFacts from './TrustFacts'
import QuestionsFaq from './QuestionsFaq'
import FinalContact from './FinalContact'
import { publicMetadata } from './site'

export const metadata: Metadata = publicMetadata({
  title: 'Вир-Транс — автомобильные грузоперевозки по России',
  description: 'Организуем автомобильные перевозки по России: регулярные загрузки, подбор и проверка перевозчиков, сопровождение рейсов и задачи с особыми условиями.',
  path: '/',
})

export default function Home() {
  return (
    <main>
      <Hero />
      <InquirySituations />
      <WorkProcess />
      <ExperienceRange />
      <TrustFacts />
      <QuestionsFaq />
      <FinalContact />
    </main>
  )
}
