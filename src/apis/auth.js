import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

export const signup = async ({ name, username, password }) => {
  const res = await api.post('/api/auth/signup', { name, username, password })

  return res.data
}

export const login = async ({ username, password }) => {
  const res = await api.post('/api/auth/login', { username, password })

  return { ...res.data }
}
