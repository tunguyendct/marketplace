import { create } from 'zustand'

type Store = {
  isFilterOpen: boolean
  setIsFilterOpen: (value: boolean) => void
}

const useStore = create<Store>((set) => ({
  isFilterOpen: false,
  setIsFilterOpen: (state) => set(() => ({ isFilterOpen: state })),
}))

export default useStore
