import { DeliveryRequestForm } from './DeliveryRequest'
import styles from './HomeSections.module.css'

export default function FinalContact() {
  return (
    <section id="контакты" className={styles.graphite} aria-labelledby="final-contact-title">
      <div className="content-container section-spacing grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div>
          <p className="text-xs font-extrabold tracking-[0.12em] text-brand-accent">НАЧАТЬ РАЗГОВОР</p>
          <h2 id="final-contact-title" className="mt-4 max-w-xl text-[clamp(2.4rem,4.6vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-brand-primary">
            Есть задача? Давайте разберёмся.
          </h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-[var(--color-text-secondary-content)]">
            Опишите перевозку в нескольких словах — остальное уточнит менеджер.
          </p>
        </div>

        <div className="border-t-2 border-brand-accent pt-7 lg:pt-9">
          <DeliveryRequestForm variant="inline" />
          <div className="mt-12 border-t border-brand-border pt-7">
            <p className="text-base font-semibold text-brand-primary sm:whitespace-nowrap">Удобнее по телефону? Звоните: <a href="tel:+78004440097" className="border-b border-brand-accent transition-colors hover:text-brand-accent">+7 (800) 444-00-97</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
