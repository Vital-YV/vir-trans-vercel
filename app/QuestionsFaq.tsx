'use client'

import { useState } from 'react'

const questions = [
  {
    question: 'Как понять, возьмётесь ли вы за нашу перевозку?',
    answer: 'Расскажите о грузе, маршруте и условиях. Разберём задачу и скажем, можем ли предложить решение.',
  },
  {
    question: 'Как защищена ответственность за груз?',
    answer: 'Ответственность Вир-Транс застрахована минимум на 8 млн ₽. Для более высокой стоимости условия страхования согласовываются отдельно.',
  },
  {
    question: 'Работаете с ЭДО и ЭТрН?',
    answer: 'Да. Электронный документооборот и ЭТрН уже используются в нашей работе; конкретную схему согласуем с клиентом.',
  },
]

export default function QuestionsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-[#34332f] text-[var(--color-background)]" aria-labelledby="questions-faq-title">
      <div className="content-container grid gap-12 py-[clamp(4rem,7vw,6.5rem)] lg:grid-cols-[minmax(16rem,0.65fr)_minmax(0,1.35fr)] lg:gap-20">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold tracking-[0.12em] text-[#c8c1b7]">FAQ</p>
          <h2 id="questions-faq-title" className="mt-4 text-[clamp(2.1rem,4vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-[var(--color-background)]">
            Остались вопросы?
          </h2>
        </div>

        <div className="border-y border-[#5b5853]">
          {questions.map((item, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`

            return (
              <div key={item.question} className={index === 0 ? '' : 'border-t border-[#5b5853]'}>
                <button
                  type="button"
                  className="grid w-full grid-cols-[auto_1fr_auto] items-start gap-x-5 py-7 text-left sm:gap-x-7 md:grid-cols-[4.5rem_minmax(0,0.95fr)_minmax(0,1.05fr)_auto] md:py-8"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`mt-1 h-2.5 w-2.5 rounded-full ${isOpen ? 'bg-brand-accent' : 'bg-[#817b72]'}`} aria-hidden="true" />
                  <span className="text-xl font-bold leading-snug tracking-[-0.035em] text-[var(--color-background)] md:text-2xl">
                    {item.question}
                  </span>
                  <span className="col-start-2 mt-4 text-base leading-relaxed text-[#c8c1b7] md:col-start-3 md:mt-0 md:self-center">
                    {isOpen ? item.answer : ''}
                  </span>
                  <span className={`col-start-3 row-start-1 text-2xl leading-none md:col-start-4 ${isOpen ? 'text-brand-accent' : 'text-[#c8c1b7]'}`} aria-hidden="true">
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
