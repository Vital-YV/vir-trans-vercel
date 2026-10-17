import CityClocks from './CityClocks'
import styles from './page.module.css'

export default function AboutSection() {
  return <section id="about" className={styles.page} aria-labelledby="about-title">
    <div className={`content-container ${styles.composition}`}>
      <div className={styles.heading}>
        <h2 id="about-title" className={styles.title}>ГРУЗОПЕРЕВОЗКИ</h2>
        <div className={styles.headingClocks}><CityClocks /></div>
      </div>
      <div className={styles.copy}>
        <p className={styles.intro}><span className={styles.experienceSince}>С 2008 года</span> организуем перевозки различной сложности — от стандартной автодоставки до мультимодальных маршрутов с использованием железнодорожного, водного и авиационного транспорта. География нашего опыта выходит за пределы России.</p>
        <div className={styles.reputation}>
          <h3>Репутация открыта для проверки</h3>
          <p>Наша история работы и отзывы контрагентов доступны в открытом профиле ATI.SU. По вашему запросу также предоставим рекомендательные письма от наших клиентов.</p>
          <a href="https://ati.su/firms/865279/info" target="_blank" rel="noreferrer">Посмотреть профиль ATI.SU →</a>
        </div>
        <p className={styles.insurance}>Страховая защита <span>20 млн руб.</span></p>
      </div>
    </div>
  </section>
}
