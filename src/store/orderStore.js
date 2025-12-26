import { create } from 'zustand'

export const useOrderStore = create((set) => ({
  mission: null,
  orderType: null,
  orders: [],
  accuracy: null,
  selectedMenu: null,

  setMission: (mission) => set({ mission }),
  setOrderType: (type) => set({ orderType: type }),
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
  updateOrder: (index, order) =>
    set((state) => {
      const updated = [...state.orders]
      updated[index] = order
      return { orders: updated }
    }),
  setAccuracy: (accuracy) => set({ accuracy }),
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),

  reset: () =>
    set({
      mission: null,
      orders: [],
      orderType: null,
      accuracy: null,
    }),
}))
