import { useEffect, useState } from 'react'
import { getContent, saveContent } from '../data/branchContent'
import { loadRemoteContent, saveRemoteContent, uploadImage } from '../data/appwriteContent'
import { account, appwriteEnabled } from '../lib/appwrite'

function ImageField({ value, onChange }) {
  const [uploadError, setUploadError] = useState('')

  const handleFile = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    setUploadError('')
    if (appwriteEnabled) {
      uploadImage(file).then(onChange).catch((error) => setUploadError(`Upload failed: ${error.message}`))
      return
    }
    const reader = new FileReader()
    reader.onload = () => onChange(reader.result)
    reader.readAsDataURL(file)
  }

  return (
    <div className="grid gap-2 text-sm text-slate-700">
      Photo
      <input type="file" accept="image/*" onChange={handleFile} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm" />
      {value && <img src={value} alt="Preview" className="h-24 w-24 rounded-xl object-cover" />}
      {uploadError && <p className="text-sm text-red-600">{uploadError}</p>}
    </div>
  )
}

function PersonFields({ person, onChange, onRemove }) {
  const update = (field, value) => onChange({ ...person, [field]: value })
  const imageClass = `${person.imageFit === 'contain' ? 'object-contain bg-slate-100' : 'object-cover'} ${person.imagePosition === 'top' ? 'object-top' : person.imagePosition === 'bottom' ? 'object-bottom' : 'object-center'}`

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-700">Name<input value={person.name} onChange={(event) => update('name', event.target.value)} className="rounded-xl border border-slate-200 px-3 py-2" /></label>
        <label className="grid gap-2 text-sm text-slate-700">Role<input value={person.role} onChange={(event) => update('role', event.target.value)} className="rounded-xl border border-slate-200 px-3 py-2" /></label>
        <label className="grid gap-2 text-sm text-slate-700 sm:col-span-2">Background<textarea rows="3" value={person.background} onChange={(event) => update('background', event.target.value)} className="rounded-xl border border-slate-200 px-3 py-2" /></label>
        <label className="grid gap-2 text-sm text-slate-700">Email<input type="email" value={person.email} onChange={(event) => update('email', event.target.value)} className="rounded-xl border border-slate-200 px-3 py-2" /></label>
        <ImageField value={person.image} onChange={(value) => update('image', value)} />
        <label className="grid gap-2 text-sm text-slate-700">Photo fit<select value={person.imageFit || 'cover'} onChange={(event) => update('imageFit', event.target.value)} className="rounded-xl border border-slate-200 px-3 py-2"><option value="cover">Fill frame</option><option value="contain">Show full photo</option></select></label>
        <label className="grid gap-2 text-sm text-slate-700">Photo position<select value={person.imagePosition || 'center'} onChange={(event) => update('imagePosition', event.target.value)} className="rounded-xl border border-slate-200 px-3 py-2"><option value="top">Top</option><option value="center">Center</option><option value="bottom">Bottom</option></select></label>
        {person.image && <img src={person.image} alt="Photo preview" className={`h-32 w-full rounded-xl ${imageClass} sm:col-span-2`} />}
      </div>
      {onRemove && <button type="button" onClick={onRemove} className="mt-4 text-sm font-semibold text-red-600 hover:text-red-700">Remove member</button>}
    </article>
  )
}

export default function BranchAdminPage() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [content, setContent] = useState(getContent)
  const [savedContent, setSavedContent] = useState(getContent)
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!appwriteEnabled) return

    account.get().then(() => {
      setLoggedIn(true)
    }).catch(() => {
      setLoggedIn(false)
    })
  }, [])

  useEffect(() => {
    if (!loggedIn || !appwriteEnabled) return

    loadRemoteContent().then((remoteContent) => {
      setContent(remoteContent)
      setSavedContent(remoteContent)
    }).catch((loadError) => setError(loadError.message))
  }, [loggedIn])

  const login = (event) => {
    event.preventDefault()
    if (!appwriteEnabled) {
      setError('Appwrite is not configured. Check your VITE_APPWRITE values.')
      return
    }
    account.createEmailPasswordSession({ email, password }).then(() => {
      setLoggedIn(true)
      setError('')
    }).catch((loginError) => setError(`Login failed: ${loginError.message || 'check your Appwrite email and password.'}`))
  }

  const updateBoard = (index, person) => setContent({ ...content, board: content.board.map((item, itemIndex) => itemIndex === index ? person : item) })
  const updateConsultant = (index, person) => setContent({ ...content, consultants: content.consultants.map((item, itemIndex) => itemIndex === index ? person : item) })
  const updatePost = (index, post) => setContent({ ...content, posts: content.posts.map((item, itemIndex) => itemIndex === index ? post : item) })
  const save = () => {
    setSaving(true)
    setError('')
    const saveOperation = appwriteEnabled ? saveRemoteContent(content) : Promise.resolve(saveContent(content))
    saveOperation.then((updatedContent) => {
      const nextContent = updatedContent || content
      setContent(nextContent)
      setSavedContent(nextContent)
      setSaved(true)
      window.setTimeout(() => setSaved(false), 2500)
    }).catch((saveError) => setError(`Save failed: ${saveError.message}`)).finally(() => setSaving(false))
  }

  if (!loggedIn) {
    return (
      <section className="mx-auto max-w-md px-6 py-24">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-glow sm:p-10">
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">Private area</p>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900">Branch admin</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">Use the Appwrite email and password created under Auth → Users.</p>
          <form onSubmit={login} className="mt-8 grid gap-4">
            <label className="grid gap-2 text-sm text-slate-700">Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="rounded-xl border border-slate-200 px-3 py-3" autoFocus /></label>
            <label className="grid gap-2 text-sm text-slate-700">Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="rounded-xl border border-slate-200 px-3 py-3" /></label>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button className="rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700">Log in</button>
          </form>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">Private area</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">Branch admin</h1>
          <p className="mt-3 text-slate-600">Changes are saved in this browser and appear on the public site immediately.</p>
        </div>
        <div className="flex gap-3">
          <button type="button" onClick={save} disabled={saving} className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-wait disabled:opacity-60">{saving ? 'Saving…' : saved ? 'Saved' : 'Save changes'}</button>
          <button type="button" onClick={() => { setContent(savedContent); setError('') }} className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">Reset</button>
        </div>
      </div>

      {error && <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">{error}</p>}

      <div className="mt-12 space-y-12">
        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div><p className="text-xs font-semibold uppercase section-kicker text-slate-500">Executive committee</p><h2 className="mt-2 text-2xl font-semibold text-slate-900">Board members</h2></div>
            <button type="button" onClick={() => setContent({ ...content, board: [...content.board, { id: `board-${Date.now()}`, role: 'New executive role', name: 'New member', background: '', email: 'budapest@180dc.org', image: '' }] })} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-white">Add board member</button>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {content.board.map((person, index) => <PersonFields key={person.id} person={person} onChange={(value) => updateBoard(index, value)} onRemove={() => setContent({ ...content, board: content.board.filter((_, itemIndex) => itemIndex !== index) })} />)}
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase section-kicker text-slate-500">Additional team</p><h2 className="mt-2 text-2xl font-semibold text-slate-900">Consultants</h2></div><button type="button" onClick={() => setContent({ ...content, consultants: [...content.consultants, { id: `consultant-${Date.now()}`, role: 'Consultant', name: 'New consultant', background: '', email: 'budapest@180dc.org', image: '' }] })} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-white">Add consultant</button></div>
          <div className="grid gap-5 lg:grid-cols-2">{content.consultants.map((person, index) => <PersonFields key={person.id} person={person} onChange={(value) => updateConsultant(index, value)} onRemove={() => setContent({ ...content, consultants: content.consultants.filter((_, itemIndex) => itemIndex !== index) })} />)}</div>
          {content.consultants.length === 0 && <p className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">No consultants added yet.</p>}
        </section>

        <section>
          <div className="mb-5 flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase section-kicker text-slate-500">Publishing</p><h2 className="mt-2 text-2xl font-semibold text-slate-900">Blog posts</h2></div><button type="button" onClick={() => setContent({ ...content, posts: [...content.posts, { id: `post-${Date.now()}`, title: 'New update', copy: '', date: new Date().toISOString().slice(0, 10) }] })} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-white">Add post</button></div>
          <div className="grid gap-5 lg:grid-cols-2">{content.posts.map((post, index) => <article key={post.id} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="grid gap-4"><label className="grid gap-2 text-sm text-slate-700">Title<input value={post.title} onChange={(event) => updatePost(index, { ...post, title: event.target.value })} className="rounded-xl border border-slate-200 px-3 py-2" /></label><label className="grid gap-2 text-sm text-slate-700">Summary<textarea rows="4" value={post.copy} onChange={(event) => updatePost(index, { ...post, copy: event.target.value })} className="rounded-xl border border-slate-200 px-3 py-2" /></label><label className="grid gap-2 text-sm text-slate-700">Date<input type="date" value={post.date} onChange={(event) => updatePost(index, { ...post, date: event.target.value })} className="rounded-xl border border-slate-200 px-3 py-2" /></label><button type="button" onClick={() => setContent({ ...content, posts: content.posts.filter((_, itemIndex) => itemIndex !== index) })} className="justify-self-start text-sm font-semibold text-red-600">Delete post</button></div></article>)}</div>
        </section>
      </div>
    </section>
  )
}
