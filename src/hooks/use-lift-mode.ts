import { create } from "zustand"
import { persist } from "zustand/middleware"

interface LiftModeState {
  chunks: string[]
  toggleLiftMode: (name: string) => void
}

const useLiftModeStore = create(
  persist<LiftModeState>(
    (set) => ({
      chunks: [],
      toggleLiftMode: (name) =>
        set((state) => ({
          chunks: state.chunks.includes(name)
            ? state.chunks.filter((n) => n !== name)
            : [...state.chunks, name],
        })),
    }),
    {
      name: "lift-mode",
    }
  )
)

export function useLiftMode(name: string) {
  const chunks = useLiftModeStore((state) => state.chunks)
  const toggleLiftMode = useLiftModeStore((state) => state.toggleLiftMode)

  return {
    isLiftMode: chunks.includes(name),
    toggleLiftMode,
  }
}
