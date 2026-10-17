import LegalDocument from '../../LegalDocument'
import { consentRobots, publicMetadata } from '../../site'
export const metadata = {
  ...publicMetadata({ title: 'Согласие на обработку данных заявки на бонус — ВИР-ТРАНС', description: 'Согласие на обработку персональных данных для заявки на секретный бонус ООО «ВИР-ТРАНС».', path: '/consent/bonus' }),
  robots: consentRobots,
}
export default function BonusConsentPage() { return <LegalDocument document="bonus-consent.md" /> }
