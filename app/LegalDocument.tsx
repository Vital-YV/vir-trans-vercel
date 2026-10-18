import Link from 'next/link'
import { approvedTexts } from '@/lib/legal/approved-texts'

function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) =>
    part.startsWith('**') ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part.startsWith('*') ? <em key={index}>{part.slice(1, -1)}</em> : part,
  )
}

export default function LegalDocument({ document }: { document: keyof typeof approvedTexts }) {
  return <main className="bg-brand-background text-brand-primary">
    <article data-approved-legal-text className="mx-auto max-w-[54rem] px-[var(--content-padding)] pb-12 pt-6 text-base leading-[1.7] [overflow-wrap:anywhere] sm:pb-20 sm:pt-10">
      {approvedTexts[document].trim().split(/\r?\n\s*\r?\n/).map((block, index) => {
        if (block.startsWith('# ')) return <h1 key={index} className="mb-7 whitespace-pre-line text-[clamp(1.75rem,3.5vw,2.7rem)] font-extrabold leading-[1.15] tracking-[-0.035em]">{block.slice(2)}</h1>
        if (block.startsWith('## ')) return <h2 key={index} className="mb-4 mt-9 text-xl font-bold leading-[1.3] sm:text-2xl">{block.slice(3)}</h2>
        return <p key={index} className="mb-4 whitespace-pre-line">{inline(block)}</p>
      })}
      {document !== 'privacy.md' && <nav aria-label="Документы по обработке данных" className="mt-8 border-t border-brand-border pt-5"><Link href="/privacy" className="underline decoration-brand-accent underline-offset-4 hover:text-brand-accent">Политика обработки персональных данных</Link></nav>}
    </article>
  </main>
}
