export type FilterType = {
  type?: string
  theme?: string
  tier?: string
  gte_price?: number | string
  lte_price?: number | string
  sort?: Sort
}

type Sort =
  | 'create-asc'
  | 'create-desc'
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'
