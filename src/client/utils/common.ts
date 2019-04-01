export const handleFetch = async <T>(
  url: string,
  options: RequestInit
): Promise<T> => {
  const res = await fetch(url, options)

  const body = await res.json()

  if (!res.ok) {
    let message

    if (body && body.errors) {
      if (typeof body.errors === 'string') {
        message = body.errors
      }
    }

    throw new Error(message || 'Something went wrong, please try again.')
  }

  return body
}
