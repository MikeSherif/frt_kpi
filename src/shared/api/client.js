const API_BASE_URL = import.meta.env.VITE_API_URL ?? '/api'

export async function apiClient(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
    ...options,
  })

  if (!response.ok) {
    const error = new Error(`API error ${response.status}: ${path}`)
    error.status = response.status
    throw error
  }

  if (response.status === 204) return null
  return response.json()
}
