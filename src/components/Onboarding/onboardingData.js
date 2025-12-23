export const onboardingData = [
  {
    id: 1,
    question: '평소 키오스크를 이용해본\n경험이 얼마나 있나요?',
    buttonText: '다음',
    options: [
      {
        id: 1,
        label: '😄 자주 이용해봤어요',
        color: 'text-[#004354]',
        bgColor: 'bg-[#CFF0F8]',
        score: 3,
      },
      { id: 2, label: '🙂 보통이에요', color: 'text-[#1F3F00]', bgColor: 'bg-[#E3F8CF]', score: 2 },
      {
        id: 3,
        label: '😕 거의 이용 안해봤어요',
        color: 'text-[#4E2B00]',
        bgColor: 'bg-[#FFE9CE]',
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: '키오스크 주문 체계에 대하여\n평소 어떻게 느끼시나요?',
    buttonText: '완료',
    options: [
      {
        id: 4,
        label: '😄 편리하고 유용해요',
        color: 'text-[#004354]',
        bgColor: 'bg-[#CFF0F8]',
        score: 3,
      },
      {
        id: 5,
        label: '😐 아무 생각 없어요',
        color: 'text-[#1F3F00]',
        bgColor: 'bg-[#E3F8CF]',
        score: 2,
      },
      {
        id: 6,
        label: '😟 어렵고 불편해요',
        color: 'text-[#4E2B00]',
        bgColor: 'bg-[#FFE9CE]',
        score: 1,
      },
    ],
  },
]
