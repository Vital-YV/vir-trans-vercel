'use client'

import { useState } from 'react'
import Image from 'next/image'

const heroUpdate = {
  label: 'АКТУАЛЬНО',
  title: 'Переход на ЭТрН?',
  action: 'Разобраться →',
}

const navigation = [
  { label: 'Перевозки', href: '#перевозки' },
  { label: 'Опыт', href: '#опыт' },
  { label: 'О компании', href: '#о-компании' },
  { label: 'Контакты', href: '#контакты' },
]

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openRequestForm = () => {
    document.querySelector<HTMLButtonElement>('#delivery-request button')?.click()
  }

  return (
    <section id="vir-trans" className="relative overflow-hidden bg-brand-background">
      <div className="relative overflow-hidden lg:flex lg:h-[calc(100svh-132px)] lg:min-h-0 lg:flex-col">
        <div className="absolute inset-0 bg-[linear-gradient(112deg,#f7f5f1_0%,#f7f5f1_42%,#746d66_62%,#2a2a28_78%,#1d1d1c_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-[linear-gradient(0deg,rgba(241,236,229,0.82),rgba(241,236,229,0))]" />

        <div className="content-container relative z-20 flex items-center justify-between pt-7 sm:pt-9 lg:!w-full lg:!px-[clamp(4.375rem,4.7vw,4.5rem)]">
          <a href="#vir-trans" className="text-[1.5rem] font-extrabold tracking-[-0.06em] sm:text-[2rem]" aria-label="ВИР-ТРАНС">
            ВИР-ТРАНС
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white xl:flex xl:-translate-x-[clamp(6rem,9vw,9rem)]" aria-label="Основная навигация">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition-opacity hover:opacity-70">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="relative z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white/60 text-xl xl:hidden"
            aria-label={isMenuOpen ? 'Закрыть навигацию' : 'Открыть навигацию'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{isMenuOpen ? '×' : '☰'}</span>
          </button>

          {isMenuOpen && (
            <nav className="absolute right-[var(--content-padding)] top-[4.75rem] z-30 flex w-52 flex-col rounded-[var(--radius-md)] border border-black/10 bg-white p-3 text-sm font-semibold shadow-xl xl:hidden" aria-label="Основная навигация">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="rounded px-3 py-2 hover:bg-black/5" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>

        <div className="content-container relative z-10 flex items-center pb-10 pt-16 sm:pt-20 lg:min-h-0 lg:flex-1 lg:!w-full lg:!px-[clamp(4.375rem,4.7vw,4.5rem)] lg:pb-24">
          <div className="relative z-20 max-w-[43rem] lg:max-w-[44rem] xl:max-w-[54rem]">
            <h1 className="max-w-[12ch] text-[clamp(3rem,5.4vw,5.8rem)] font-extrabold leading-[0.92] tracking-[-0.065em] text-brand-primary lg:max-w-none lg:whitespace-nowrap">
              Ваш груз —<br />в центре внимания
            </h1>
            <p className="mt-7 max-w-[36rem] text-lg leading-[1.45] text-brand-primary sm:text-xl lg:mt-9 lg:text-[1.45rem]">
              Организуем автомобильные перевозки по России — от регулярных загрузок до задач с особыми условиями.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-5 lg:mt-10">
              <a href="#контакты" className="inline-flex min-h-14 items-center justify-center rounded-[var(--radius-sm)] bg-brand-accent px-7 text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent-orange-hover)] sm:px-8 sm:text-lg">
                Обсудить задачу
              </a>
              <button type="button" onClick={openRequestForm} className="inline-flex min-h-14 items-center justify-center rounded-[var(--radius-sm)] border border-brand-primary bg-brand-background px-7 text-base font-semibold text-brand-primary transition-colors hover:bg-white/70 sm:px-8 sm:text-lg lg:bg-white/30">
                Запросить стоимость
              </button>
            </div>
          </div>
        </div>

        <div className="pointer-events-none relative z-10 flex h-[clamp(14.375rem,64vw,17.5rem)] w-full items-center justify-center bg-[radial-gradient(ellipse_at_50%_78%,rgba(240,193,111,0.34),rgba(68,65,61,0.18)_46%,transparent_72%)] lg:absolute lg:inset-y-0 lg:right-0 lg:z-10 lg:mt-0 lg:flex lg:h-auto lg:w-[min(68vw,1100px)] lg:items-end lg:justify-end lg:bg-none">
          <Image
            src="/hero/lamp-crate.png"
            alt="Лампа освещает деревянный ящик с грузом"
            width={1448}
            height={1086}
            priority
            className="block h-full w-full object-contain lg:h-[92%] lg:w-auto lg:max-w-full"
          />
        </div>
      </div>

      <div className="relative z-30 isolate w-full border-y border-black/10 bg-[#f7f5f1] shadow-[0_-10px_30px_rgba(41,39,35,0.04)]">
        <div className="content-container flex min-h-[132px] flex-col justify-center gap-4 py-7 sm:flex-row sm:items-center sm:gap-8 lg:!w-full lg:!px-[clamp(4.375rem,4.7vw,4.5rem)]">
          <span className="text-xs font-extrabold tracking-wide text-brand-secondary">{heroUpdate.label}</span>
          <span className="hidden h-10 w-px bg-black/30 sm:block" aria-hidden="true" />
          <p className="text-2xl font-bold tracking-[-0.04em] text-brand-primary sm:text-3xl">{heroUpdate.title}</p>
          <a href="#вопросы---ответы" className="text-base font-semibold text-brand-primary underline decoration-black/60 underline-offset-8 sm:ml-auto sm:text-lg">
            {heroUpdate.action}
          </a>
        </div>
      </div>
    </section>
  )
}
