import Link from 'next/link'
import styles from './digest.module.css'

const observations = [
  { number: '01', title: 'Ставки выросли. Но не везде одинаково.', text: 'На 24 сентября общий индекс ATI.SU для FTL 20 т вырос на 20,2% за шесть месяцев и на 21,6% за год. Но отдельные направления движутся совершенно по-разному.', conclusion: 'Средняя цифра по рынку всё меньше помогает в конкретной заявке. Смотреть нужно маршрут и максимально свежие данные.', source: 'ATI.SU · 24.09.2026' },
  { number: '02', title: 'ЭТрН стала частью самой перевозки', text: 'После 1 сентября большинство практических вопросов к ГИС ЭПД поступает от экспедиторов: роли участников, принятие груза во владение, ЛОП, взаимодействие с клиентом, перевозчиком и оператором.', conclusion: 'Документы теперь приходится продумывать вместе со схемой рейса, а не разбирать после него.', source: 'Минтранс России · 11.09.2026' },
  { number: '03', title: '«Мы подключены» ещё не значит «мы готовы»', text: 'После массового подключения на первый план вышли сквозное прохождение документов, роуминг и нестандартные сценарии.', conclusion: 'Лучший тест — один реальный рейс целиком с конкретными контрагентами.', source: 'Практика рынка · сентябрь 2026' },
]

const experiments = [
  { number: '01', title: 'ИИ в работе логиста', text: 'Поиск, история контактов и разбор результата — чтобы понимать не только что сделали, но и что сработало.' },
  { number: '02', title: 'Автоматический разбор документов', text: 'Связать входящие документы ЭДО с конкретным рейсом и ответственным логистом.' },
  { number: '03', title: 'Внутренние данные без ручного поиска', text: 'Свести историю клиентов, перевозчиков и рабочих решений в один понятный рабочий контур.' },
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
        <p className={styles.issue}>СВОДКА № 01 <b>·</b> СЕНТЯБРЬ 2026</p>
        <h1 id="digest-title">Секретная сводка<br />Вир-Транс</h1>
        <p className={styles.lead}>То, что показалось нам важным, странным или полезным.</p>
      </section>

      <div className={styles.content}>
        <article className={`${styles.feature} ${styles.reveal}`}>
          <div className={styles.sectionTop}><p className={styles.label}>ГЛАВНОЕ</p><span className={styles.record}>МАТЕРИАЛ 01 / 05</span></div>
          <div className={styles.featureBody}>
            <h2>ЭТрН: подключиться оказалось проще, чем пройти рейс целиком</h2>
            <div>
              <p>За первые 10 дней обязательного режима через ГИС ЭПД прошло более 11 млн документов.</p>
              <p>Но основные практические вопросы уже сместились от самого подключения к сквозному прохождению документа: кто и когда подписывает, как работает роуминг и что делать, когда обычная схема перевозки ломается.</p>
              <p className={styles.conclusion}>Наш вывод: проверять нужно не факт подключения, а один полный рейс — от создания ЭТрН до завершения.</p>
              <Link href="/etrn">Разобраться <span>→</span></Link>
              <small className={styles.source}>Минтранс России · 11.09.2026</small>
            </div>
          </div>
        </article>

        <section className={`${styles.observations} ${styles.reveal}`} aria-labelledby="observations-title">
          <div className={styles.sectionHeading}><p className={styles.label}>НАБЛЮДЕНИЕ</p><h2 id="observations-title">Три вещи, которые мы заметили</h2></div>
          <ol className={styles.observationList}>
            {observations.map((item) => (
              <li key={item.number}>
                <span>{item.number}</span>
                <div className={styles.observationCopy}><h3>{item.title}</h3><p>{item.text}</p><p className={styles.observationConclusion}>{item.conclusion}</p><small className={styles.source}>{item.source}</small></div>
              </li>
            ))}
          </ol>
        </section>

        <section className={`${styles.experiments} ${styles.reveal}`} aria-labelledby="experiments-title">
          <div className={styles.experimentIntro}>
            <div className={styles.sectionTop}><p className={styles.label}>ЭКСПЕРИМЕНТ</p><span className={styles.status}>В РАБОТЕ</span></div>
            <h2 id="experiments-title">Что мы сейчас пробуем</h2>
            <p>Не теория ради теории — интересует только то, что реально сокращает ручную работу или помогает принимать решения.</p>
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
          <div><p>№ 01 <b>·</b> СЕНТЯБРЬ 2026</p><small>Данные выпуска проверены 27.09.2026</small></div>
          <span className={styles.archiveSoon}>Архив секретных сводок — скоро</span>
        </footer>
      </div>
    </main>
  )
}
