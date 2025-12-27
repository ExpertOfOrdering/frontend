// 오늘 날짜를 출석에 저장
export const saveTodayAttendance = () => {
  const today = new Date().toISOString().split('T')[0] // '2025-02-17'
  const saved = JSON.parse(localStorage.getItem('attendanceDates') || '[]')

  if (!saved.includes(today)) {
    localStorage.setItem('attendanceDates', JSON.stringify([...saved, today]))
  }
}

// 연속 출석 일수 계산
export const getStreak = () => {
  const saved = JSON.parse(localStorage.getItem('attendanceDates') || '[]')

  if (saved.length === 0) return 0

  // 최신 날짜 기준으로 정렬
  const sorted = [...saved].sort().reverse()

  let streak = 1
  let prev = new Date(sorted[0])

  for (let i = 1; i < sorted.length; i++) {
    const current = new Date(sorted[i])

    const diffDays = (prev.getTime() - current.getTime()) / (1000 * 60 * 60 * 24)

    if (diffDays === 1) {
      streak++
      prev = current
    } else {
      break
    }
  }

  return streak
}
