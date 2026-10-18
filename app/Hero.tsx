'use client'
import Image from 'next/image'
import SiteNavigation from './SiteNavigation'
import styles from './Hero.module.css'
import HeroTrust from './HeroTrust'

export default function Hero() {
  return (
    <section id="vir-trans" className="relative overflow-hidden bg-brand-background">
      <div className={`relative overflow-hidden ${styles.hero}`}>
        <div className="absolute inset-0 bg-[linear-gradient(112deg,#f7f5f1_0%,#f7f5f1_42%,#746d66_62%,#2a2a28_78%,#1d1d1c_100%)]" />
        <div className={`${styles.floor} absolute inset-x-0 bottom-0 h-[30%] bg-[linear-gradient(0deg,rgba(241,236,229,0.82),rgba(241,236,229,0))]`} />

        <SiteNavigation hero />

        <div className={styles.leftPanel}>
        <div className={`content-container relative z-10 flex items-center pb-10 pt-12 sm:pt-20 xl:!w-full xl:!px-[clamp(4.375rem,4.7vw,4.5rem)] ${styles.copy}`}>
          <div className="relative z-20 max-w-[43rem] xl:max-w-[44rem] xl:max-w-[54rem]">
            <h1 className="max-w-[12ch] text-[clamp(3rem,5.4vw,5.8rem)] font-extrabold leading-[0.92] tracking-[-0.065em] text-brand-primary xl:max-w-none xl:whitespace-nowrap">
              Ваш груз —<br />в центре внимания
            </h1>
            <p className="mt-7 max-w-[36rem] text-lg leading-[1.45] text-brand-primary sm:text-xl xl:mt-9 xl:text-[1.45rem]">
              Организуем перевозки по России и за её пределами — от регулярных автомобильных рейсов до сложных маршрутов.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-5 xl:mt-10">
              <a href="#контакты" className="inline-flex min-h-14 items-center justify-center rounded-[var(--radius-sm)] primary-cta bg-brand-accent px-7 text-center text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent-orange-hover)] sm:px-8 sm:text-lg">
                Узнать стоимость перевозки
              </a>
            </div>
          </div>
        </div>

        <HeroTrust />
        </div>

        <div className={`${styles.scene} pointer-events-none relative z-10 flex h-[clamp(14.375rem,64vw,17.5rem)] w-full items-center justify-center bg-[radial-gradient(ellipse_at_50%_78%,rgba(240,193,111,0.34),rgba(68,65,61,0.18)_46%,transparent_72%)] xl:absolute xl:inset-y-0 xl:right-0 xl:z-10 xl:mt-0 xl:flex xl:h-auto xl:w-[min(68vw,1100px)] xl:items-end xl:justify-end xl:bg-none`}>
          <div className={`relative h-full max-w-full aspect-[4/3] xl:h-[92%] ${styles.illustration}`}>
            <Image
              src="/hero/lamp-only.png"
              alt="Лампа освещает деревянный ящик с грузом"
              width={1448}
              height={1086}
              priority
              className="absolute inset-0 h-full w-full"
            />
            <Image
              src="/hero/crate-clean.png"
              alt=""
              aria-hidden="true"
              width={1254}
              height={1254}
              priority
              className={`${styles.crate} absolute left-[31.1%] top-[34%] w-[41.8%] max-w-none`}
            />
            <Image
              src="/hero/fragile-flask.png"
              alt=""
              aria-hidden="true"
              width={1536}
              height={1024}
              priority
              className={styles.flask}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
