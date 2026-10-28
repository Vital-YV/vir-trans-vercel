import Link from 'next/link'
import styles from './digest.module.css'

const observations = [
  { number: '01', title: 'Одна страна — разные ставки', text: 'Общий индекс ATI.SU отражает динамику ставок по 100 популярным направлениям. Но средняя картина не показывает цену именно вашего рейса.', conclusion: 'Наш вывод: считать нужно конкретный маршрут и смотреть свежие данные. Средняя температура по рынку машину не загрузит.', source: 'ATI.SU · методика индекса', sourceHref: 'https://help.ati.su/price-index' },
  { number: '02', title: 'ЭТрН стала частью самой перевозки', text: 'Минтранс отмечает: склады и получатели нередко задерживают подпись, и накладная остаётся незавершённой.', conclusion: 'Наш вывод: ещё до рейса важно понимать, кто и когда подписывает документ. После выгрузки искать этого человека обычно сложнее.', source: 'Минтранс России · 05.10.2026', sourceHref: 'https://mintrans.gov.ru/press-center/news/13023' },
  { number: '03', title: '«Мы подключены» ещё не значит «мы готовы»', text: 'Подключение к сервису — только начало. Важно проверить, что документ проходит весь путь между участниками рейса.', conclusion: 'Наш вывод: лучший тест — один реальный рейс целиком с конкретными контрагентами.', source: 'Вывод редакции по материалу Минтранса · 05.10.2026', sourceHref: 'https://mintrans.gov.ru/press-center/news/13023' },
]

const experiments = [
  { number: '01', title: 'ИИ в работе логиста', text: 'Хотим проверить, поможет ли ИИ быстрее искать контакты и разбирать результаты работы.' },
  { number: '02', title: 'Автоматический разбор документов', text: 'Планируем проверить привязку документов ЭДО к рейсу и ответственному логисту.' },
  { number: '03', title: 'Внутренние данные без ручного поиска', text: 'Хотим проверить поиск по истории клиентов, перевозчиков и рабочих решений — без обхода папок.' },
]

export default function SecretDigestPage() {
  return (
    <main className={styles.page}>
      <div className={styles.stars} aria-hidden="true" />
      <div className={styles.route} aria-hidden="true"><span /> <i /> <span /></div>

      <header className={styles.header}>
        <p className={styles.eyebrow}>7% — TOP SECRET</p>
        <nav className={styles.navigation} aria-label="Навигация секретной сводки">
          <Link href="/top-secret">← К звёздному небу</Link>
          <Link href="/">На главный сайт →</Link>
        </nav>
      </header>

      <section className={styles.hero} aria-labelledby="digest-title">
        <div className={styles.heroMeta}><span>INTERNAL</span></div>
        <p className={styles.issue}>СВОДКА № 01 <b>·</b> ОКТЯБРЬ 2026</p>
        <h1 id="digest-title">Секретная сводка<br />Вир-Транс</h1>
        <p className={styles.lead}>То, что показалось нам важным, странным или полезным.</p>
      </section>

      <div className={styles.content}>
        <article className={`${styles.feature} ${styles.reveal}`}>
          <div className={styles.sectionTop}><p className={styles.label}>ГЛАВНОЕ</p><span className={styles.record}>МАТЕРИАЛ 01 / 05</span></div>
          <div className={styles.featureBody}>
            <h2>ЭТрН заработала. А подписать её до конца — отдельное приключение</h2>
            <div>
              <p>За сентябрь через ГИС ЭПД прошло более 39 млн электронных перевозочных документов. К обмену подключились свыше 545 тысяч компаний.</p>
              <p>Но первый месяц показал: главные сложности часто возникают не в самой системе, а между участниками перевозки. Например, груз уже выгрузили, а склад ещё не подписал свою часть накладной.</p>
              <p className={styles.conclusion}>Наш вывод: проверить нужно не просто подключение к сервису, а весь путь документа — от погрузки до последней подписи.</p>
              <Link href="/etrn">Разобраться <span>→</span></Link>
              <small className={styles.source}><a href="https://mintrans.gov.ru/press-center/news/13023" style={{ font: 'inherit', color: 'inherit', display: 'inline', margin: 0 }}>Минтранс России · 05.10.2026</a></small>
            </div>
          </div>
        </article>

        <section className={`${styles.observations} ${styles.reveal}`} aria-labelledby="observations-title">
          <div className={styles.sectionHeading}><p className={styles.label}>НАБЛЮДЕНИЕ</p><h2 id="observations-title">Три вещи, которые мы заметили</h2></div>
          <ol className={styles.observationList}>
            {observations.map((item) => (
              <li key={item.number}>
                <span>{item.number}</span>
                <div className={styles.observationCopy}><h3>{item.title}</h3><p>{item.text}</p><p className={styles.observationConclusion}>{item.conclusion}</p><small className={styles.source}><a href={item.sourceHref}>{item.source}</a></small></div>
              </li>
            ))}
          </ol>
        </section>

        <section className={`${styles.experiments} ${styles.reveal}`} aria-labelledby="experiments-title">
          <div className={styles.experimentIntro}>
            <div className={styles.sectionTop}><p className={styles.label}>ЭКСПЕРИМЕНТ</p><span className={styles.status}>ГОТОВИМ</span></div>
            <h2 id="experiments-title">Что хотим проверить на практике</h2>
            <p>ИИ интересен нам не ради моды. Хотим проверить, где он действительно сокращает ручную работу или помогает принимать решения.</p>
          </div>
          <ol className={styles.experimentList}>
            {experiments.map((item) => <li key={item.number}><span>TEST {item.number}</span><div><p>{item.title}</p><small>{item.text}</small></div></li>)}
          </ol>
        </section>

        <div className={styles.lowerGrid}>
          <article className={`${styles.fieldNote} ${styles.reveal}`}>
            <p className={styles.label}>НА ПОЛЯХ</p><p className={styles.noteNumber}>ЗАПИСКА 04</p>
            <h2>Не совсем про логистику. Но почему-то полезно.</h2>
            <h3>Почему странное запоминается лучше правильного?</h3>
            <p>В психологии это называют эффектом изоляции: элемент, который отличается от однотипного окружения, часто запоминается лучше.</p>
            <p>Важна не странность сама по себе, а контраст с привычным.</p>
            <p className={styles.conclusion}>Поэтому 93% этого сайта стараются быть полезными. Оставшиеся 7% — чтобы было за что зацепиться.</p>
            <small className={styles.source}>Эффект фон Ресторфф / isolation effect</small>
          </article>

          <aside className={`${styles.weeklyOddity} ${styles.reveal}`}>
            <p className={styles.label}>СТРАННОСТЬ НЕДЕЛИ</p>
            <blockquote>«Самая цифровая проблема недели: груз уже приняли, а право подписи осталось в другом кабинете.»</blockquote>
            <p>Ничего не утверждаем. Просто наблюдаем.</p>
          </aside>
        </div>

        <footer className={styles.archive}>
          <div><p>№ 01 <b>·</b> ОКТЯБРЬ 2026</p><small>Данные проверены 28.10.2026</small></div>
          <span className={styles.archiveSoon}>Архив секретных сводок — скоро</span>
        </footer>
      </div>
    </main>
  )
}
