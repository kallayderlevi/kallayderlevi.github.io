export async function submitApplicationForm(form) {
  const endpoint = import.meta.env.VITE_APPWRITE_FUNCTION_ENDPOINT || 'https://formsubmit.co/ajax/budapest@180dc.org'

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: new FormData(form),
  })
  if (!response.ok) throw new Error('The application could not be sent. Please try again.')
  return { handled: true }
}
