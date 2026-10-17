import LegalDocument from '../../LegalDocument'
import { consentRobots, publicMetadata } from '../../site'
export const metadata = {
  ...publicMetadata({ title: 'Согласие на обработку данных обращения — ВИР-ТРАНС', description: 'Согласие на обработку персональных данных при направлении обращения в ООО «ВИР-ТРАНС».', path: '/consent/request' }),
  robots: consentRobots,
}
export default function RequestConsentPage() { return <LegalDocument document="request-consent.md" /> }
