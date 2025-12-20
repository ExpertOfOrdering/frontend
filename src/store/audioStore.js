import { create } from 'zustand'

export const useAudioStore = create((set) => ({
  bgm: 50,
  sfx: 50,
  setBgm: (v) => set({ bgm: v }),
  setSfx: (v) => set({ sfx: v }),
}))
