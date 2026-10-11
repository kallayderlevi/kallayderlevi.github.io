export async function submitApplicationForm(form) {
  const endpoint = import.meta.env.VITE_APPWRITE_FUNCTION_ENDPOINT
  if (!endpoint) return { handled: false }

  const response = await fetch(endpoint, {
    method: 'POST',
    body: new FormData(form),
  })
  if (!response.ok) throw new Error('The application could not be sent. Please try again.')
  return { handled: true }
}
