import { useEffect } from 'react'
import { useLanguage } from '../i18n'

const translations = {
  'How we help': 'Hogyan segítünk',
  'What to expect': 'Mire számíthatsz',
  'Send an inquiry': 'Küldj megkeresést',
  'Start a collaboration': 'Kezdjünk együttműködést',
  'How projects work': 'Hogyan dolgozunk a projekteken',
  'Communication': 'Kommunikáció',
  'Your benefits': 'A te előnyeid',
  'Why partner with 180DC?': 'Miért legyél az 180DC partnere?',
  'Semester timeline': 'Szemeszter idővonal',
  'Your journey at 180DC Budapest.': 'Az utad az 180DC Budapestnél.',
  'More than a line on your CV.': 'Több, mint egy sor az önéletrajzodban.',
  'Selection process': 'Kiválasztási folyamat',
  'Apply now': 'Jelentkezz most',
  'Send us your CV.': 'Küldd el az önéletrajzodat.',
  'Latest posts': 'Legfrissebb bejegyzések',
  'From the Budapest branch.': 'A budapesti kirendeltségtől.',
  'Our Branch': 'Csapatunk',
  'Meet 180DC Budapest.': 'Ismerd meg az 180DC Budapestet.',
  'The people behind the branch.': 'A kirendeltség mögött álló emberek.',
  'Executive Committee': 'Vezetőség',
  'Contact': 'Kapcsolat',
  'Get in touch.': 'Vedd fel velünk a kapcsolatot.',
  'Clients': 'Ügyfelek',
  'Partners': 'Partnerek',
  'Students': 'Hallgatók',
  'Blog / Updates': 'Blog / Hírek',
  'Latest announcements': 'Legfrissebb hírek',
  'Featured': 'Kiemelt',
  'Read more': 'Tovább olvasom',
  'Send to Budapest': 'Küldés Budapestnek',
  'Submit Application': 'Jelentkezés elküldése',
  'Motivation': 'Motiváció',
  'University': 'Egyetem',
  'CV upload': 'Önéletrajz feltöltése',
  'Name': 'Név',
  'Organisation': 'Szervezet',
  'Email': 'E-mail',
  'Message': 'Üzenet',
}

const originalTextValues = new WeakMap()

export function translateFixedText(value, language) {
  if (language === 'en') return value
  return translations[value] || value
}

export function TranslationLayer() {
  const { language } = useLanguage()

  useEffect(() => {
    const root = document.getElementById('root')
    if (!root) return undefined
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
    const nodes = []
    let node = walker.nextNode()
    while (node) {
      if (node.nodeValue?.trim() && !['SCRIPT', 'STYLE', 'INPUT', 'TEXTAREA'].includes(node.parentElement?.tagName)) nodes.push(node)
      node = walker.nextNode()
    }
    nodes.forEach((textNode) => {
      const original = originalTextValues.get(textNode) || textNode.nodeValue
      originalTextValues.set(textNode, original)
      textNode.nodeValue = translateFixedText(original, language)
    })
    return undefined
  }, [language])

  return null
}

export default function TranslatedText({ children }) {
  const { language } = useLanguage()
  if (language === 'en' || typeof children !== 'string') return children
  return translateFixedText(children, language)
}
