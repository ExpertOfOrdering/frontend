import { api } from './auth'

export const setInitialDifficulty = async ({ userId, score }) => {
  const res = await api.post('/api/difficulty/initial', {
    userId: Number(userId),
    score,
  })
  return res.data
}

export const getCurrentDifficulty = async (userId) => {
  const uid = Number(userId)

  if (!uid || isNaN(uid)) {
    throw new Error('userId가 유효하지 않습니다.')
  }

  const res = await api.get(`/api/difficulty/current`, {
    params: { userId: uid },
  })
  return res.data.currentRecommendedDifficulty
}
