export default function RequestConsent() {
  return <label style={{ fontWeight: 400 }} className="flex min-w-0 items-start gap-3 text-sm font-normal leading-5 text-brand-primary">
    <input type="checkbox" name="consent" required style={{ width: 18, height: 18, padding: 0, marginTop: 2, display: 'inline-block' }} className="shrink-0 accent-[#E86F1C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent" />
    <span>Даю <a href="/consent/request" target="_blank" rel="noopener noreferrer" className="underline decoration-brand-accent underline-offset-3 hover:text-brand-accent">согласие на обработку персональных данных</a>.</span>
  </label>
}
