import { Link } from 'react-router-dom'

export default function ApplicationConsent() {
  return (
    <label className="mt-5 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
      <input
        name="privacy_consent"
        type="checkbox"
        value="I consent to the processing of my personal data for recruitment purposes."
        required
        className="mt-1 h-4 w-4 shrink-0 accent-[#73b744]"
      />
      <span>
        I consent to the processing of my personal data for recruitment purposes as described in the{' '}
        <Link to="/privacy-policy" target="_blank" rel="noreferrer" className="brand-link-hover rounded-sm font-semibold text-[#5d9f35] underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </span>
    </label>
  )
}
