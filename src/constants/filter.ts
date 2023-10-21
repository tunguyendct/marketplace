import { Sort } from '../types/filter.type'

type SortOption = {
  value: Sort
  text: string
}

export const SORT_OPTIONS: SortOption[] = [
  {
    value: 'created-desc',
    text: 'Date, new to old',
  },
  {
    value: 'created-asc',
    text: 'Date, old to new',
  },
  {
    value: 'price-asc',
    text: 'Price, low to high',
  },
  {
    value: 'price-desc',
    text: 'Price, high to low',
  },
  {
    value: 'name-asc',
    text: 'Alphabetically, A-Z',
  },
  {
    value: 'name-desc',
    text: 'Alphabetically, Z-A',
  },
]

const PRICE = { MIN_PRICE: 0.01, MAX_PRICE: 200 }
export { PRICE }
