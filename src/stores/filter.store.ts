import { create } from 'zustand'
import { FilterType } from '../types/filter.type'
import { PRICE } from '../constants/filter'
const {MIN_PRICE, MAX_PRICE} = PRICE

const initialFilter = {
  searchTerm: null,
  type: null,
  theme: null,
  tier: null,
  gte_price: MIN_PRICE,
  lte_price: MAX_PRICE,
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
