import Image from 'next/image'
import styles from './team.module.css'

type TeamMember = {
  id: string
  name: string
  image: string
  quote: string
  variant: 'routeSheet' | 'polaroid'
}

const teamMembers: TeamMember[] = [
  {
    id: 'yaroslav',
    name: 'Ярослав',
    image: '/team/yaroslav.png',
    quote: 'Почти готово.',
    variant: 'routeSheet',
  },
  {
    id: 'tolya',
    name: 'Толя',
    image: '/team/tolya.png',
    quote: 'Разберёмся по ходу.',
    variant: 'polaroid',
  },
]

function TeamMemberCard({ member }: { member: TeamMember }) {
  const isRouteSheet = member.variant === 'routeSheet'

  return (
    <article className={`${styles.member} ${styles[member.variant]}`}>
      {isRouteSheet ? (
        <>
          <span className={styles.paperClip} aria-hidden="true" />
          <span className={styles.routeLine} aria-hidden="true"><i /><i /><i /></span>
          <span className={styles.workMark}>в работе</span>
        </>
      ) : (
        <>
          <span className={styles.tape} aria-hidden="true" />
          <span className={styles.pin} aria-hidden="true" />
          <span className={styles.contactMark}>на связи</span>
        </>
      )}

      <div className={styles.imageFrame}>
        <Image src={member.image} alt={`Шарж сотрудника ${member.name}`} width={1254} height={1254} priority />
      </div>
      <div className={styles.memberCopy}>
        <p>«{member.quote}»</p>
      </div>
    </article>
  )
}

export default function TeamPage() {
  return (
    <main className={styles.teamPage}>
      <div className={styles.backgroundRoute} aria-hidden="true" />
      <div className={styles.backgroundNote} aria-hidden="true">внутренняя линия</div>

      <header className={styles.teamHeader}>
        <a href="/" className={styles.teamBrand} aria-label="ВИР-ТРАНС, главная">ВИР-ТРАНС</a>
        <a href="/" className={styles.backLink}>← Вернуться на сайт</a>
      </header>

      <section className={styles.intro} aria-labelledby="team-title">
        <p className={styles.eyebrow}>режим: внутренний</p>
        <h1 id="team-title">Ну раз вы всё-таки вошли…</h1>
        <p className={styles.lead}>Те, кто обычно остаются за кадром — люди, на которых всё держится.</p>
      </section>

      <section className={styles.members} aria-label="Коллектив Вир-Транс">
        {teamMembers.map((member) => <TeamMemberCard key={member.id} member={member} />)}
      </section>
    </main>
  )
}
