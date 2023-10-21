export type FilterType = {
  searchTerm?: string | null
  type?: string | null
  theme?: string | null
  tier?: string | null
  gte_price?: number | null
  lte_price?: number | null
  sort?: Sort | null
}

export type Sort =
  | 'created-asc'
  | 'created-desc'
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'
