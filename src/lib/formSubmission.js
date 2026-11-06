async function encodeFile(file) {
  const bytes = new Uint8Array(await file.arrayBuffer())
  let binary = ''
  for (let index = 0; index < bytes.length; index += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000))
  }
  return btoa(binary)
}

export async function submitApplicationForm(form) {
  const appwriteEndpoint = import.meta.env.VITE_APPWRITE_ENDPOINT?.replace(/\/$/, '')
  const endpoint = import.meta.env.VITE_APPWRITE_FUNCTION_ENDPOINT
    || (appwriteEndpoint ? `${appwriteEndpoint}/functions/6aed9ecd002c8b1bc746/executions` : '')
  if (!endpoint) throw new Error('The application service is not configured.')

  const formData = new FormData(form)
  const cv = formData.get('cv')
  const payload = {
    name: formData.get('name'),
    email: formData.get('email'),
    yearsOfStudy: formData.get('years_of_study'),
    degree: formData.get('degree'),
    motivation: formData.get('message'),
    heardAboutUs: formData.get('heard_about_us'),
    cv: cv instanceof File && cv.size > 0
      ? { name: cv.name, type: cv.type, content: await encodeFile(cv) }
      : null,
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Appwrite-Project': import.meta.env.VITE_APPWRITE_PROJECT_ID,
    },
    body: JSON.stringify({ body: JSON.stringify(payload), async: false }),
  })
  const result = await response.json().catch(() => ({}))
  let functionBody = result.responseBody
  if (typeof functionBody === 'string') {
    try {
      functionBody = JSON.parse(functionBody)
    } catch {
      functionBody = null
    }
  }
  if (!response.ok || result.status === 'failed' || functionBody?.error) {
    throw new Error(functionBody?.error || result.responseBody || 'The application could not be sent. Please try again.')
  }
  return result
}
