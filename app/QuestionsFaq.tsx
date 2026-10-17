'use client'

import { useState } from 'react'
import styles from './HomeSections.module.css'

const questions = [
  {
    question: 'Как рассчитывается стоимость перевозки?',
    answer: 'Учитываем маршрут, характеристики груза, требования к транспорту и условия доставки. Предложение готовим после уточнения деталей.',
  },
  {
    question: 'Можно начать с одной перевозки?',
    answer: 'Конечно. Можно начать с одного рейса, оценить нашу работу и затем обсудить постоянное сотрудничество.',
  },
  {
    question: 'Работаете ли с отсрочкой платежа?',
    answer: 'Да, возможность и срок отсрочки обсуждаем индивидуально, с учётом условий и объёма сотрудничества.',
  },
  {
    question: 'Как оформляются документы?',
    answer: 'Работаем с электронным документооборотом. Формат обмена документами и порядок оформления ЭТрН согласовываем с клиентом.',
  },
  {
    question: 'Гарантируете ли вы налоговую чистоту перевозок?',
    answer: 'Да. Мы проверяем привлекаемых перевозчиков, обеспечиваем прозрачность цепочки перевозки и контролируем документальное оформление каждого рейса. Налоговая добросовестность — один из наших принципов работы.',
  },
]

export default function QuestionsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="вопросы---ответы" className={styles.gray} aria-labelledby="questions-faq-title">
      <div className="content-container grid gap-12 py-[clamp(4rem,7vw,6.5rem)] lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] lg:gap-12">
        <div className="max-w-2xl lg:self-center">
          <p className="text-xs font-extrabold tracking-[0.12em] text-[var(--color-text-secondary-content)]">ВОПРОСЫ И ОТВЕТЫ</p>
          <h2 id="questions-faq-title" className="mt-4 text-[clamp(2.1rem,4vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-brand-primary">
            Остались вопросы?
          </h2>
        </div>

        <div className="border-y border-brand-border">
          {questions.map((item, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`

            return (
              <div key={item.question} className={index === 0 ? '' : 'border-t border-brand-border'}>
                <button
                  type="button"
                  className="grid w-full grid-cols-[auto_1fr_auto] items-start gap-x-5 py-7 text-left sm:gap-x-7 md:grid-cols-[4.5rem_minmax(0,0.95fr)_minmax(0,1.05fr)_auto] md:py-8 lg:py-6"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`mt-1 h-2.5 w-2.5 rounded-full ${isOpen ? 'bg-brand-accent' : 'bg-[#817b72]'}`} aria-hidden="true" />
                  <span className="text-xl font-bold leading-snug tracking-[-0.035em] text-brand-primary md:text-2xl">
                    {item.question}
                  </span>
                  <span className="col-start-2 mt-4 text-base leading-relaxed text-[#514d47] md:col-start-3 md:mt-0 md:self-center">
                    {isOpen ? item.answer : ''}
                  </span>
                  <span className={`col-start-3 row-start-1 text-2xl leading-none md:col-start-4 ${isOpen ? 'text-brand-accent' : 'text-[var(--color-text-secondary-content)]'}`} aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div id={answerId} className="sr-only">{item.answer}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
