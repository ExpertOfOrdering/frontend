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
  calculateAccuracy: () => {
    const { mission, orders, orderType } = get()
    if (!mission) return 0

    const order = orders[0]
    if (!order) return 0

    let score = 0
    if (order.hotIce === mission.temp) score += 25
    if (order.name === mission.name) score += 25
    if (order.quantity === mission.quantity) score += 25
    if (orderType === mission.place) score += 25

    set({ accuracy: score })
    return score
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

  finishPractice: () => {
    const start = get().practiceStart
    if (!start) return
    const timeTaken = Date.now() - start
    set({ practiceTime: timeTaken, practiceStart: null })
  },
}))
