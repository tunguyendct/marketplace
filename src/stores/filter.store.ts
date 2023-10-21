import { create } from 'zustand'
import { FilterType } from '../types/filter.type'

const initialFilter = {
  searchTerm: null,
  type: null,
  theme: null,
  tier: null,
  gte_price: null,
  lte_price: null,
  sort: null,
}

type FilterState = {
  filter: FilterType
  setFilter: (filter: FilterType) => void
  resetFilter: () => void
}

const useFilterStore = create<FilterState>((set) => ({
  filter: initialFilter,
  setFilter: (state) => set(() => ({ filter: { ...state } })),
  resetFilter: () => set(() => ({ filter: { ...initialFilter } })),
}))

export default useFilterStore
