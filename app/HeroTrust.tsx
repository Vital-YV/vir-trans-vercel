import styles from './HeroTrust.module.css'

export default function HeroTrust() {
  return <div className={styles.strip} aria-label="Факты о компании">
    <dl className={`content-container ${styles.facts}`}>
      <div><dt>С 2008 года</dt><dd>Опыт организации перевозок</dd></div>
      <div><dt>20&nbsp;млн&nbsp;₽</dt><dd>Страховая защита</dd></div>
      <div><dt><a href="https://ati.su/firms/865279/info" target="_blank" rel="noreferrer">ATI.SU <span aria-hidden="true">↗</span></a></dt><dd>Открытая репутация</dd></div>
      <div className={styles.etrn}><dt><a href="/etrn">ЭТрН <span className={styles.etrnAttention} aria-hidden="true">!</span><span aria-hidden="true">↗</span></a></dt><dd>Практические советы</dd></div>
    </dl>
  </div>
}
