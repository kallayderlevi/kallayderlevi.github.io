import { useLanguage } from '../i18n'

const options = [
  ['friends', 'Friends'],
  ['socialMedia', 'Social media'],
  ['flyers', 'Flyers'],
  ['poster', 'Poster'],
  ['googleSearch', 'Google search'],
  ['university', 'University'],
  ['other', 'Other'],
]

export default function HowDidYouHear() {
  const { t } = useLanguage()

  return (
    <label className="mt-4 grid gap-2 text-sm text-slate-700">
      {t('heardAboutUs')}
      <select name="heard_about_us" required defaultValue="" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none">
        <option value="" disabled>{t('selectOne')}</option>
        {options.map(([value, label]) => <option key={value} value={label}>{t(value)}</option>)}
      </select>
    </label>
  )
}
