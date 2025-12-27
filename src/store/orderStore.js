import { create } from 'zustand'

export const useOrderStore = create((set, get) => ({
  mission: null,
  orderType: null,
  orders: [],
  accuracy: null,
  selectedMenu: null,
  selectedHotIce: null,
  selectedTaste: null,
  quantity: 1,
  practiceStart: null,
  practiceTime: 0,
  practiceStep: 0,
  showAiButton: false,
  level: 1,
  isFinished: false,

  setLevel: (level) => set({ level }),
  setMission: (mission) => set({ mission }),
  setOrderType: (type) => set({ orderType: type }),
  setPracticeStep: (step) => set({ practiceStep: step }),
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
  setShowAiButton: (value) => set({ showAiButton: value }),
  updateOrder: (index, order) =>
    set((state) => {
      const updated = [...state.orders]
      updated[index] = order
      return { orders: updated }
    }),
  setAccuracy: (accuracy) => set({ accuracy }),
  parseMission: () => {
    const missionStr = get().mission
    if (!missionStr) return null

    const temp = missionStr.includes('뜨거운') ? 'HOT' : 'ICE'
    const name = missionStr.match(/\[(.*?)\]/)?.[1] || ''
    const quantity = Number(missionStr.match(/(\d+)개/)?.[1]) || 1
    const place = missionStr.includes('포장') ? 'takeout' : 'here'
    const taste = missionStr.includes('진하게')
      ? '진하게'
      : missionStr.includes('연하게')
        ? '연하게'
        : '기본'

    return { temp, name, quantity, place, taste }
  },

  calculateAccuracy: () => {
    const { orders, orderType, mission } = get()
    const order = orders?.[0]
    if (!mission || !order) return 0

    const missionText = typeof mission === 'string' ? mission : mission?.content || ''

    const temp = missionText.includes('뜨거운')
      ? 'HOT'
      : missionText.includes('차가운')
        ? 'ICE'
        : null

    const nameMatch = missionText.match(/\[(.*?)\]/)
    const name = nameMatch ? nameMatch[1] : null

    const qtyMatch = missionText.match(/(\d+)개/)
    const quantity = qtyMatch ? Number(qtyMatch[1]) : null

    const place = missionText.includes('포장')
      ? '포장주문'
      : missionText.includes('매장')
        ? '매장주문'
        : null

    let score = 0
    if (order.hotIce === temp) score += 25
    if (order.name === name) score += 25
    if (order.quantity === quantity) score += 25
    if (orderType === place) score += 25

    set({ accuracy: score })
    return score
  },

  finishPractice: () => {
    const start = get().practiceStart
    if (!start) return

    const timeTaken = Date.now() - start
    set({ practiceTime: timeTaken, practiceStart: null, isFinished: true })

    get().calculateAccuracy()
  },
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),
  setSelectedHotIce: (value) => set({ selectedHotIce: value }),
  setSelectedTaste: (value) => set({ selectedTaste: value }),

  increaseQty: () => set((state) => ({ quantity: state.quantity + 1 })),
  decreaseQty: () =>
    set((state) => ({
      quantity: state.quantity > 1 ? state.quantity - 1 : 1,
    })),

  updateOrderQuantity: (index, change) =>
    set((state) => {
      const updated = [...state.orders]
      const newQty = updated[index].quantity + change
      updated[index].quantity = newQty > 0 ? newQty : 1
      return { orders: updated }
    }),

  resetOptions: () =>
    set({
      selectedHotIce: null,
      selectedTaste: null,
      quantity: 1,
    }),

  reset: () =>
    set({
      isFinished: false,
      mission: null,
      orders: [],
      orderType: null,
      accuracy: null,
      quantity: 1,
      selectedMenu: null,
      selectedHotIce: null,
      selectedTaste: null,
      practiceStart: null,
      practiceTime: 0,
    }),

  removeOrder: (index) =>
    set((state) => ({
      orders: state.orders.filter((_, i) => i !== index),
    })),

  getTotalCount: () => get().orders.reduce((sum, item) => sum + item.quantity, 0),

  getTotalPrice: () =>
    get().orders.reduce((sum, item) => sum + item.quantity * parseInt(item.price), 0),

  startPracticeTimer: () => {
    set({ practiceStart: Date.now(), practiceTime: 0 })
  },

  getElapsedTime: () => {
    const start = get().practiceStart
    if (!start) return 0
    return Date.now() - start
  },
}))
