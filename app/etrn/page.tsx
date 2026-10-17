'use client'

import { FormEvent, useState } from 'react'
import styles from './page.module.css'
import RequestConsent from '../RequestConsent'

const roles = [
  { tab: 'Отправитель', title: 'До приезда машины определите три вещи', items: ['Кто создаёт ЭТрН.', 'Кто фактически отвечает за погрузку и сможет подписать документ.', 'Работает ли обмен между операторами участников.'], note: 'Особенно важно для сторонних складов, ночных и выходных погрузок.' },
  { tab: 'Получатель / склад', title: 'Главное — кто подпишет приёмку на месте', items: ['Назначьте сотрудника, который принимает груз.', 'Дайте ему рабочий способ подписания ЭТрН.', 'Не рассчитывайте, что офис подпишет документ «потом».'], note: 'Если получатель не завершил свой шаг, водитель может не получить возможность штатно подтвердить выгрузку.' },
  { tab: 'Экспедитор', title: 'Сначала определите свою роль в конкретном рейсе', items: ['Приняли груз во владение или только организуете перевозку?', 'Экспедитор, только организующий перевозку, не становится автоматически грузоотправителем. Указание экспедитора в этой роли зависит от принятия груза во владение и установленных правил оформления, включая предусмотренные исключения.', 'Кто является фактическим перевозчиком.'], note: 'При транспортной экспедиции оформляется поручение экспедитору; экспедиторская расписка — при принятии груза во владение, складская — при соответствующем приёме на хранение.' },
  { tab: 'Перевозчик / водитель', title: 'До выезда водитель должен понимать три вещи', items: ['Где он увидит ЭТрН.', 'Как подтвердить приём и сдачу груза.', 'Где находится QR-код для дорожной проверки.'], note: 'При плохой связи некоторые сервисы поддерживают отложенное подписание и сохранение QR-кода на устройстве.' },
]

const problems = [
  { q: 'Груз приняли, а получатель не подписал?', parts: [['Сейчас', 'Свяжитесь с ответственным получателя и экспедитором/перевозчиком: электронную цепочку нужно завершить со стороны получателя.'], ['На будущее', 'На каждом складе заранее должен быть человек, способный подтвердить приёмку непосредственно при выгрузке.'], ['Важно', 'Штатный порядок предполагает подписание получателем до подтверждения выгрузки водителем.']] },
  { q: 'Водитель уже вынужден уехать?', label: 'Нештатный сценарий', parts: [['Сейчас', 'Если ожидание невозможно, зафиксируйте фактическую сдачу груза: получите доступное подтверждение склада с датой, временем, количеством груза и замечаниями при их наличии. Сохраните переписку и сведения о причинах незавершённого подписания. Уведомите участников перевозки и согласуйте дальнейшее оформление ЭТрН через оператора.'], ['Важно', 'Бумажное подтверждение сдачи груза само по себе не заменяет завершение ЭТрН.']] },
  { q: 'На складе нет человека с подписью?', parts: [['Сейчас', 'Найдите ответственного, которому организация уже предоставила право работать с ЭТрН.'], ['На будущее', 'Не привязывайте ночную или выходную погрузку к одному сотруднику в офисе. Организуйте подписание непосредственно на складе.']] },
  { q: 'Не работает связь или интернет?', parts: [['Сейчас', 'Проверьте инструкцию своего оператора: офлайн- и отложенные сценарии зависят от сервиса и этапа перевозки.'], ['Важно', 'Отсутствие мобильного интернета само по себе не является основанием для замены ЭТрН бумажной накладной. Бумажное оформление допускается в установленных законодательством случаях.']] },
  { q: 'Контрагенты работают у разных операторов?', parts: [['Сейчас', 'Проверьте именно обмен ЭТрН между конкретными операторами.'], ['На будущее', 'Делайте такую проверку до первого рейса.'], ['Важно', 'Роуминг ЭТрН широко поддерживается, но статус других ЭПД — заказов-заявок и экспедиторских документов — может отличаться.']] },
  { q: 'В ЭТрН обнаружили ошибку?', parts: [['Сейчас', 'Сначала установите, на каком этапе выявлена ошибка и какие сведения требуется изменить. Допустимые исправления выполняются в установленном порядке через оператора ИС ЭПД.'], ['Важно', 'Не создавайте повторную накладную без выяснения статуса первоначальной. Процедура отзыва или аннулирования ЭТрН после её принятия в ГИС ЭПД действующими правилами не предусмотрена.']] },
]

const checks = [['Оператор', 'Все участники подключены к операторам ИС ЭПД.'], ['Роуминг', 'Проверен обмен именно между операторами участников.'], ['Люди', 'Понятно, кто подписывает на погрузке и выгрузке.'], ['Водитель', 'Он знает приложение, порядок действий и где искать QR-код.'], ['Тест', 'Один рейс пройден целиком — от создания ЭТрН до завершения.']]

export default function EtrnPage() {
  const [role, setRole] = useState(0)
  const [open, setOpen] = useState<number | null>(null)
  const [forwarderOpen, setForwarderOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); if (sending) return
    const formElement = e.currentTarget
    if (!formElement.reportValidity()) return
    const form = new FormData(formElement)
    const consent = form.get('consent') === 'on'
    if (!consent) return
    setSending(true); setError('')
    try {
      const r = await fetch('/api/delivery-request', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...Object.fromEntries(form), source: 'etrn', consent }) })
      if (!r.ok) throw new Error(); setSent(true); formElement.reset()
    } catch { setError('Не удалось отправить обращение. Попробуйте ещё раз или свяжитесь с нами по телефону.') } finally { setSending(false) }
  }

  return <main className={styles.page}>
    <section className={`${styles.hero} ${styles.container}`}>
      <p className={styles.eyebrow}>Практический раздел</p><h1>ЭТрН на практике</h1>
      <p className={styles.lead}>Не пересказываем закон. Показываем, кто что делает в реальной перевозке и что проверить, если цепочка остановилась.</p>
      <p className={styles.audience}>Для отправителей, получателей, экспедиторов и перевозчиков.</p>
      <div className={styles.meta}><span>Проверено на 12 октября 2026</span><span>Следим за изменениями и обновляем практику.</span></div>
    </section>

    <section id="etrn-chain" className={`${styles.chainSection} ${styles.container}`}><p className={styles.eyebrow}>Маршрут одного документа</p><h2>Один рейс. Одна цепочка.</h2>
      <ol className={styles.chain}>{['Погрузка', 'Водитель принял', 'Перевозчик подтвердил', 'Рейс', 'Получатель принял', 'Водитель подтвердил выгрузку', 'Перевозчик завершил'].map((s, i) => <li key={s}><b>{String(i + 1).padStart(2, '0')}</b><span>{s}</span></li>)}</ol>
      <p className={styles.note}>Схема показывает общий ход оформления ЭТрН. Фактическая последовательность обмена документами и подписания зависит от роли участников и установленного порядка.</p>
    </section>

    <section id="etrn-roles" className={`${styles.section} ${styles.container}`}><p className={styles.eyebrow}>Выберите роль</p><h2>Что важно именно вам</h2>
      <div className={styles.tabs} role="tablist">{roles.map((item, i) => <button role="tab" aria-selected={role === i} className={role === i ? styles.active : ''} key={item.tab} onClick={() => setRole(i)}>{item.tab}</button>)}</div>
      <div className={styles.rolePanel}><h3>{roles[role].title}</h3><ul>{roles[role].items.map(x => <li key={x}>{x}</li>)}</ul><p>{roles[role].note}</p></div>
    </section>

    <section id="etrn-problems" className={styles.problemSection}><div className={`${styles.container} ${styles.problemContent}`}><p className={styles.quickLabel}>Быстрый ответ</p><p className={styles.eyebrow}>Практика</p><h2>Если что-то пошло не так</h2><p className={styles.subhead}>Выберите ситуацию. Без длинных инструкций.</p>
      <div className={styles.accordion}>{problems.map((problem, i) => <article key={problem.q} className={styles.accordionItem}><button aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}><span>{problem.q}</span><i aria-hidden="true">{open === i ? '−' : '+'}</i></button>{open === i && <div className={styles.answer}>{problem.label && <b className={styles.scenarioLabel}>{problem.label}</b>}{problem.parts.map(([label, text]) => <div key={label}><b>{label}</b><p>{text}</p></div>)}</div>}</article>)}
        <article className={styles.accordionItem}><button aria-expanded={open === 6} onClick={() => setOpen(open === 6 ? null : 6)}><span>В рейсе участвует экспедитор — кто кем считается?</span><i aria-hidden="true">{open === 6 ? '−' : '+'}</i></button>{open === 6 && <div className={styles.answer}><h3>Экспедитор не всегда является грузоотправителем</h3><p>Если экспедитор принял груз во владение — схема одна. Если только организует перевозку — другая. Фактическим перевозчиком в ЭТрН указывается тот, кто реально выполняет перевозку.</p><button className={styles.textButton} onClick={() => setForwarderOpen(!forwarderOpen)}>Разобрать схему с экспедитором →</button>{forwarderOpen && <p className={styles.extra}>Кто будет грузоотправителем, зависит от конкретной схемы и принятия груза экспедитором во владение. Поэтому этот момент лучше определить до формирования документов, а не после приезда машины.</p>}</div>}</article></div></div>
    </section>

    <section className={`${styles.checkSection} ${styles.container}`}><p className={styles.eyebrow}>Перед стартом</p><h2>5 проверок до первого рейса</h2><ol className={styles.checks}>{checks.map(([title, text], i) => <li key={title}><b>{String(i + 1).padStart(2, '0')}</b><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>
    <section className={`${styles.support} ${styles.container}`}><div><p className={styles.eyebrow}>Вир-Транс</p><h2>Не оставляем клиента разбираться одного</h2></div><div><p>Мы сами проходим этот переход вместе с рынком. Проверяем рабочие схемы на реальных перевозках, собираем решения и помогаем связать действия клиента, склада и перевозчика.</p><p className={styles.strong}>Если чего-то ещё не знаем наверняка — сначала проверяем, потом советуем.</p><a href="#etrn-form" className={styles.cta}>Разобрать ситуацию по ЭТрН</a></div></section>
    <section id="etrn-form" className={`${styles.formSection} ${styles.container}`}><p className={styles.eyebrow}>Обращение</p><h2>Что произошло?</h2>{sent ? <p className={styles.success}>Обращение принято. Скоро свяжемся с вами.</p> : <form onSubmit={submit}><label>Имя<input name="name" required /></label><label>Телефон или e-mail<input name="contact" required /></label><label className={styles.full}>Коротко опишите ситуацию<textarea name="situation" required placeholder="Например: груз выгрузили, склад принял, но ЭТрН не подписана, водитель уже уехал." /></label><label className={styles.honeypot}>Не заполняйте это поле<input name="website" autoComplete="off" tabIndex={-1} /></label><div className={styles.full}><RequestConsent /></div><button className={styles.cta} disabled={sending}>{sending ? 'Отправляем…' : 'Разобрать ситуацию'}</button>{error && <p className={styles.error} role="alert">{error}</p>}</form>}</section>
    <section className={`${styles.sources} ${styles.container}`}><details><summary>Источники и нормативная база <span>+</span></summary><ul><li><a href="https://mintrans.gov.ru/activities/376/453">Ответы Минтранса по ЭПД</a></li><li><a href="https://mintrans.gov.ru/activities/376/453/455">Автомобильные перевозки и ЭТрН</a></li><li><a href="https://mintrans.gov.ru/activities/376/453/457">Экспедиторские документы</a></li><li><a href="https://mintrans.gov.ru/activities/376/453/456">Подписание документов</a></li><li><a href="https://mintrans.gov.ru/activities/376/377/378/419">Методические материалы</a></li><li><a href="https://mintrans.gov.ru/activities/214/376/377/378/416">Приказы Минтранса</a></li></ul></details><p>Информация на странице носит справочный характер. Для спорной ситуации проверяем актуальные правила и конкретную схему перевозки.</p></section>
  </main>
}
