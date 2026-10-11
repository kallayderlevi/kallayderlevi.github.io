const collectedInformation = [
  'Name / Username',
  'Phone Numbers',
  'Email Addresses',
  'Job Titles / Academic & Professional Details (including CVs, cover letters, and application responses)',
]

const dataUses = [
  'To evaluate job and membership applications and conduct our recruitment processes.',
  'To send newsletters, updates, and informational emails to the provided email addresses.',
  'To send periodic emails regarding updates or application status.',
]

const rights = [
  ['Right to information', 'The right to receive concise, transparent, intelligible, and easily accessible information about processing before it begins.'],
  ['Right of access', 'The right to obtain confirmation of whether personal data concerning you are being processed and, where applicable, access to that data and the information specified in the GDPR.'],
  ['Right to rectification', 'The right to obtain the rectification of inaccurate personal data without undue delay.'],
  ['Right to erasure', 'The right to obtain erasure of personal data without undue delay where the statutory grounds apply.'],
  ['Right to restriction of processing', 'The right to obtain restriction of processing where one of the applicable statutory grounds applies.'],
  ['Right to data portability', 'The right to receive provided personal data in a structured, commonly used, machine-readable format and transmit it to another controller.'],
  ['Right to object', 'The right to object, on grounds relating to your particular situation, at any time to processing based on legitimate interests or public interest.'],
]

function Section({ title, children }) {
  return (
    <section className="border-t border-slate-200 pt-10">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">{children}</div>
    </section>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-24">
      <header className="border-b border-slate-200 pb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5d9f35]">Legal</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-500">Updated October 12th, 2026</p>
      </header>

      <div className="mt-10 space-y-10">
        <Section title="Data Controller Details">
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Name:</strong> 180 Degrees Consulting Budapest Egyesület</li>
            <li><strong>Registered seat and mailing address:</strong> 1022 Budapest, Bimbó út 48-50. A ép. 3. ajtó</li>
            <li><strong>E-mail address:</strong> budapest@180dc.org</li>
            <li><strong>Phone number:</strong> 00 36 20 333 9888</li>
            <li><strong>Representative:</strong> Kállay Dér Levente</li>
            <li><strong>Website:</strong> www.180dcbudapest.org</li>
          </ul>
        </Section>

        <Section title="Purpose of the Policy">
          <p>This Policy explains how 180 Degrees Consulting Budapest Egyesület manages its records, conducts statistical data collection, processes data, provides information services, and handles personal data in compliance with applicable laws and European Union regulations. We apply heightened diligence during data processing to prevent data protection incidents.</p>
        </Section>

        <Section title="General Provisions and Cookies">
          <p>This Policy applies Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, known as the GDPR.</p>
          <p>Our website, 180dcbudapest.org, provides information about data protection and cookies. Most browsers accept cookies by default, but users can refuse, disable, or delete them through browser settings. Where cookies require consent and processing begins upon visiting the site, we inform users and request consent on their first visit.</p>
          <p>We do not use or permit cookies that allow third parties to collect data without the user’s consent. Acceptance of cookies is not mandatory, but we cannot guarantee that the website will function as expected if cookies are disabled.</p>
        </Section>

        <Section title="Legal Basis">
          <p>Our data management practices are governed, in their currently effective forms, by the GDPR, the Fundamental Law of Hungary, Act V of 2013 on the Civil Code (Ptk.), and Act CXII of 2011 on the Right to Informational Self-Determination and Freedom of Information (Info tv.).</p>
        </Section>

        <Section title="Scope of the Policy">
          <p>This Policy binds the entire organisation, all organisational units, every member of its operational team, and any person or entity engaged in personal data processing in a contractual or other relationship with 180 Degrees Consulting Budapest Egyesület. It also extends to data flows directed toward data processors engaged by the Data Controller and covers all personal data and processing operations handled by the organisation.</p>
        </Section>

        <Section title="What Information Do We Collect?">
          <ul className="list-disc space-y-2 pl-6">{collectedInformation.map((item) => <li key={item}>{item}</li>)}</ul>
        </Section>

        <Section title="How Do We Use the Information We Collect?">
          <ul className="list-disc space-y-2 pl-6">{dataUses.map((item) => <li key={item}>{item}</li>)}</ul>
        </Section>

        <Section title="How Long Do We Keep Your Information?">
          <p>We keep your information only as long as needed to fulfil the purposes described in this Policy, including our legal or regulatory obligations.</p>
          <p>For applicants, if an application is unsuccessful, personal data including CVs and application forms will be securely deleted or destroyed within 30 to 60 days following the conclusion of the recruitment cycle. If an applicant is accepted, their data will be transferred to our internal member database under our internal data governance policies.</p>
        </Section>

        <Section title="Personal Data Definitions">
          <p>Under the GDPR, personal data means information relating to an identified or identifiable natural person, and processing means any operation performed on personal data, including collection, recording, organisation, storage, use, disclosure, restriction, erasure, or destruction. A controller determines the purposes and means of processing; a processor processes data on the controller’s behalf; and consent must be freely given, specific, informed, and unambiguous.</p>
          <p>We process personal data of members, employees, mandated agents, contractual partners, and natural persons acting on behalf of clients, partners, cooperating educational institutions, and public institutions. All processing follows the general principles of Regulation (EU) 2016/679.</p>
        </Section>

        <Section title="Your Rights">
          <dl className="space-y-5">{rights.map(([term, description]) => <div key={term}><dt className="font-semibold text-slate-900">{term}</dt><dd>{description}</dd></div>)}</dl>
        </Section>

        <Section title="Legal Remedies">
          <p>In the event of a violation of your rights, you may turn to the Fővárosi Törvényszék / Budapest Capital Regional Court, 1055 Budapest, Markó u. 27., <a className="text-[#5d9f35] underline" href="https://fovarositorvenyszek.birosag.hu">fovarositorvenyszek.birosag.hu</a>, or initiate an investigation with the Hungarian National Authority for Data Protection and Freedom of Information (NAIH), 1125 Budapest, Szilágyi Erzsébet fasor 22/C, ugyfelszolgalat@naih.hu.</p>
        </Section>

        <Section title="Contact Us">
          <p>For questions regarding this Privacy Policy or the handling of your data, contact budapest@180dc.org, 1022 Budapest, Bimbó út 48-50. A ép. 3. ajtó, Hungary, or 00 36 30 718 9227.</p>
        </Section>
      </div>
    </article>
  )
}
