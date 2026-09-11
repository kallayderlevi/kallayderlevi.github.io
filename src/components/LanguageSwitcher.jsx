import { useLanguage } from '../i18n'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-xs font-semibold">
      <button type="button" onClick={() => setLanguage('en')} className={`rounded-full px-3 py-1.5 transition ${language === 'en' ? 'bg-[#73b744] text-white' : 'text-slate-600 hover:bg-slate-50'}`}>EN</button>
      <button type="button" onClick={() => setLanguage('hu')} className={`rounded-full px-3 py-1.5 transition ${language === 'hu' ? 'bg-[#73b744] text-white' : 'text-slate-600 hover:bg-slate-50'}`}>HU</button>
    </div>
  )
}
