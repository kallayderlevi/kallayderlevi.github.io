import { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    navVision: 'Our Vision', navClients: 'Clients', navPartners: 'Partners', navStudents: 'Students', navBlog: 'Blog', navContact: 'Contact', navBranch: 'Our Branch', forClients: 'For Clients', joinStudent: 'Join as Student',
    branch: 'Budapest branch', heroTitle: 'Social impact consulting for Budapest, backed by the global 180DC network.', heroCopy: 'We connect top university students with local NGOs, non-profits, social enterprises, and mission-led companies that need practical, affordable consulting support.', forClientsCta: 'For Clients', joinStudentCta: 'Join as Student', strategy: 'Non-profit strategy', development: 'Student development', network: 'Global 180DC network', oneNetwork: 'One network', localPerspective: 'Local perspective, global people, and practical work that moves missions forward.', countries: 'Countries operating in', branches: 'Branches worldwide', projects: 'Consulting projects completed', leaders: 'Social impact leaders trained',
    vision: 'Our vision', visionTitle: 'A world where every organisation can reach its full potential.', visionCopy: '180 Degrees Consulting empowers non-profits and social enterprises through affordable, high-quality strategic and operational support. At the same time, we nurture the next generation of social impact leaders through hands-on consulting experience.', meetBranch: 'Meet our branch',
    pathsEyebrow: 'Clients, partners, and students', pathsTitle: 'Three clear paths for working with the Budapest branch.', pathsCopy: 'Choose the path that fits you. Each one now lives on its own page.', view: 'View', track: 'Track',
    latest: 'Latest announcements', viewAll: 'View all posts', featured: '180DC Budapest', readMore: 'Read more',
    contact: 'Contact', getInTouch: 'Get in touch.', contactCopy: 'All general enquiries can be sent to budapest@180dc.org.', email: 'Email', location: 'Location', findUs: 'Follow 180DC Budapest', socialCopy: 'Find us on social media',
    clients: 'Clients', partners: 'Partners', students: 'Students', ourBranch: 'Our Branch',
    admin: 'Branch admin', login: 'Log in', password: 'Password', save: 'Save changes', saved: 'Saved', reset: 'Reset',
    clientBanner: 'Practical consulting for organisations creating a better future.', clientBannerCopy: 'We work with organisations of every size, from social enterprises with under five employees to international non-profits with more than 1,000 people.', partnerBanner: 'Build the next generation of social impact leaders with us.', partnerBannerCopy: 'Collaborate with 180DC Budapest through events, talent access, mentoring, and real consulting work.', studentBanner: 'Your semester at 180DC Budapest.', studentBannerCopy: 'Learn by doing, work with purpose, and grow with a team of people who want to make consulting more meaningful.',
  },
  hu: {
    navVision: 'Jövőképünk', navClients: 'Ügyfelek', navPartners: 'Partnereink', navStudents: 'Hallgatóknak', navBlog: 'Blog', navContact: 'Kapcsolat', navBranch: 'Csapatunk', forClients: 'Ügyfeleknek', joinStudent: 'Jelentkezés hallgatóknak',
    branch: 'Budapesti kirendeltség', heroTitle: 'Társadalmi hatású tanácsadás Budapesten, a globális 180DC hálózat támogatásával.', heroCopy: 'Kiemelkedő egyetemi hallgatókat kapcsolunk össze helyi civil szervezetekkel, nonprofitokkal, társadalmi vállalkozásokkal és küldetésvezérelt cégekkel, amelyek gyakorlati és megfizethető tanácsadási támogatást keresnek.', forClientsCta: 'Ügyfeleknek', joinStudentCta: 'Jelentkezés hallgatóknak', strategy: 'Nonprofit stratégia', development: 'Hallgatói fejlődés', network: 'Globális 180DC hálózat', oneNetwork: 'Egy hálózat', localPerspective: 'Helyi nézőpont, globális közösség és gyakorlati munka, amely előreviszi a küldetéseket.', countries: 'Országban működünk', branches: 'Kirendeltség világszerte', projects: 'Megvalósult tanácsadási projekt', leaders: 'Képzett társadalmi hatású vezető',
    vision: 'Jövőképünk', visionTitle: 'Egy olyan világ, ahol minden szervezet kibontakoztathatja a benne rejlő lehetőségeket.', visionCopy: 'Az 180 Degrees Consulting megfizethető, magas színvonalú stratégiai és működési támogatással segíti a nonprofitokat és társadalmi vállalkozásokat. Emellett gyakorlati tanácsadási tapasztalaton keresztül neveljük a társadalmi hatás következő generációs vezetőit.', meetBranch: 'Ismerd meg a csapatot',
    pathsEyebrow: 'Ügyfelek, partnerek és hallgatók', pathsTitle: 'Három út a budapesti kirendeltséggel való együttműködéshez.', pathsCopy: 'Válaszd ki a hozzád illő lehetőséget. Mindegyik külön oldalon mutatkozik be.', view: 'Megnézem', track: 'Terület',
    latest: 'Legfrissebb hírek', viewAll: 'Összes bejegyzés', featured: '180DC Budapest', readMore: 'Tovább olvasom',
    contact: 'Kapcsolat', getInTouch: 'Vedd fel velünk a kapcsolatot.', contactCopy: 'Általános kérdéseidet a budapest@180dc.org címre várjuk.', email: 'E-mail', location: 'Helyszín', findUs: 'Kövess minket', socialCopy: 'Találkozz velünk a közösségi médiában',
    clients: 'Ügyfelek', partners: 'Partnerek', students: 'Hallgatók', ourBranch: 'Csapatunk',
    admin: 'Kirendeltségi admin', login: 'Bejelentkezés', password: 'Jelszó', save: 'Módosítások mentése', saved: 'Mentve', reset: 'Visszaállítás',
    clientBanner: 'Gyakorlati tanácsadás a jobb jövőt építő szervezeteknek.', clientBannerCopy: 'Különböző méretű szervezetekkel dolgozunk, az öt főnél kevesebbet foglalkoztató társadalmi vállalkozásoktól az 1000 főnél nagyobb nemzetközi nonprofitokig.', partnerBanner: 'Építsük együtt a társadalmi hatás jövőbeli vezetőit.', partnerBannerCopy: 'Eseményeken, tehetséggondozáson, mentoráláson és valódi tanácsadási projekteken keresztül működünk együtt.', studentBanner: 'A szemesztered az 180DC Budapestnél.', studentBannerCopy: 'Gyakorlati tapasztalaton keresztül tanulhatsz, értéket teremthetsz, és egy olyan közösségben fejlődhetsz, amely hisz a tanácsadás társadalmi szerepében.',
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('180dc-language') || 'en')
  const changeLanguage = (next) => {
    setLanguage(next)
    localStorage.setItem('180dc-language', next)
  }
  const t = (key) => translations[language][key] || translations.en[key] || key
  return <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
