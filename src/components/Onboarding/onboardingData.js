export const onboardingData = [
  {
    id: 1,
    question: '평소 키오스크를 이용해본 경험이 얼마나 있나요?',
    buttonText: '다음',
    options: [
      { label: '😄 자주 이용해봤어요', color: 'bg-blue-100', score: 3 },
      { label: '🙂 보통이에요', color: 'bg-green-100', score: 2 },
      { label: '😕 거의 이용 안해봤어요', color: 'bg-orange-100', score: 1 },
    ],
  },
  {
    id: 2,
    question: '키오스크 주문 체계에 대해 평소 어떻게 느끼시나요?',
    buttonText: '완료',
    options: [
      { label: '😄 편리하고 유용해요', color: 'bg-blue-100', score: 3 },
      { label: '😐 아무 생각 없어요', color: 'bg-green-100', score: 2 },
      { label: '😟 어렵고 불편해요', color: 'bg-orange-100', score: 1 },
    ],
  },
]
