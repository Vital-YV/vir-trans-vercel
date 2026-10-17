import LegalDocument from '../LegalDocument'
import { publicMetadata } from '../site'
export const metadata = publicMetadata({ title: 'Политика обработки персональных данных — ВИР-ТРАНС', description: 'Политика ООО «ВИР-ТРАНС» в отношении обработки персональных данных посетителей сайта.', path: '/privacy' })
export default function PrivacyPage() { return <LegalDocument document="privacy.md" /> }
