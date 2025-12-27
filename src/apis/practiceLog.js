import { api } from '@/apis/auth'

export const getUserLog = async (month) => {
  const userId = localStorage.getItem('userId')
  const res = await api.get('/api/mypage', {
    params: { month: Number(month), userId: Number(userId) },
  })
  return res.data
}
