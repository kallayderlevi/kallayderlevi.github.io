export const defaultBoard = [
  { id: 'president', role: 'President', name: 'Founding team member', background: 'Chapter leadership, strategy, and external representation.', email: 'budapest@180dc.org', image: '' },
  { id: 'vice-president', role: 'Vice President', name: 'Founding team member', background: 'Internal coordination, planning, and chapter development.', email: 'budapest@180dc.org', image: '' },
  { id: 'client-relations', role: 'Director of Client Relations', name: 'Founding team member', background: 'Client conversations, project scoping, and relationship management.', email: 'budapest@180dc.org', image: '' },
  { id: 'partnerships', role: 'Director of Partnerships', name: 'Founding team member', background: 'University, corporate, and community partnerships.', email: 'budapest@180dc.org', image: '' },
  { id: 'people-culture', role: 'Director of People & Culture', name: 'Founding team member', background: 'Recruitment, consultant experience, and team development.', email: 'budapest@180dc.org', image: '' },
  { id: 'finance-operations', role: 'Director of Finance & Operations', name: 'Founding team member', background: 'Operations, finance, governance, and responsible growth.', email: 'budapest@180dc.org', image: '' },
  { id: 'marketing', role: 'Director of Marketing', name: 'Founding team member', background: 'Communications, events, and the Budapest branch identity.', email: 'budapest@180dc.org', image: '' },
  { id: 'legal', role: 'Director of Legal', name: 'Founding team member', background: 'Legal foundation, compliance, and organisational support.', email: 'budapest@180dc.org', image: '' },
]

export const defaultConsultants = []

export const defaultPosts = [
  { id: 'launch', title: '180DC Officially Launches in Budapest', copy: 'A milestone update introducing the new chapter, its vision, and the first opportunities for students and partners.', date: '2026-09-10' },
  { id: 'recruitment', title: 'Spring Recruitment Now Open', copy: 'We are looking for ambitious students who want consulting experience, mentorship, and a real seat at the table.', date: '2026-09-10' },
  { id: 'ngo-consulting', title: 'What It’s Like Consulting for an NGO', copy: 'A short preview of the kinds of challenges our teams will tackle and the skills students will build along the way.', date: '2026-09-10' },
]

const storageKey = '180dc-budapest-content'

export function getContent() {
  try {
    const stored = localStorage.getItem(storageKey)
    return stored ? JSON.parse(stored) : { board: defaultBoard, consultants: defaultConsultants, posts: defaultPosts }
  } catch {
    return { board: defaultBoard, consultants: defaultConsultants, posts: defaultPosts }
  }
}

export function saveContent(content) {
  localStorage.setItem(storageKey, JSON.stringify(content))
  window.dispatchEvent(new Event('180dc-content-updated'))
}

export function resetContent() {
  const content = { board: defaultBoard, consultants: defaultConsultants, posts: defaultPosts }
  saveContent(content)
  return content
}
