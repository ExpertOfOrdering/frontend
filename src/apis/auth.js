import axios, { AxiosHeaders } from 'axios'
import { tokenStore } from '@/store/tokenStore'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  const url = config.url ?? ''
  const isAuthRoute = url.startsWith('/api/auth/')
  const token = tokenStore.get()

  config.headers = AxiosHeaders.from(config.headers ?? {})

  if (!isAuthRoute && token) {
    // 토큰 문자열에 'Bearer '가 이미 들어있으면 중복 방지
    config.headers.Authorization = token.startsWith('Bearer ') ? token : `Bearer ${token}`
  } else {
    delete config.headers.Authorization
  }

  return config
})

export const signup = async ({ name, username, password }) => {
  const res = await api.post('/api/auth/signup', { name, username, password })

  const token = res.data?.accessToken
  if (token) tokenStore.set(token)

  return res.data
}

export const getUserName = async (token) => {
  const res = await api.get('/api/users/me', {
    headers: { Authorization: `Bearer ${token}` },
  })
  const name = res.data?.name ?? ''
  localStorage.setItem('userName', name)
  return name
}

export const login = async ({ username, password }) => {
  const res = await api.post('/api/auth/login', { username, password })

  const token = res.data?.accessToken
  if (token) tokenStore.set(token)

  let name = ''
  try {
    if (token) name = await getUserName(token)
  } catch (e) {
    console.error(e)
  }

  return { ...res.data, name }
}
