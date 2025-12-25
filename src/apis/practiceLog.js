import { api } from '@/apis/auth.js'

export const getUserLog = async (month) => {
  const res = await api.get('/api/mypage', {
    params: { month },
  })
  return res.data
}
