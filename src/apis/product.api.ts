import API from '../constants/api'
import { STATUS } from '../constants/response'
import { FilterType } from '../types/filter.type'
import { ProductsResponse } from '../types/product.type'

type ListProductsProps = {
  limit?: number
  page?: number
}

const listProducts = async ({
  limit = 20,
  page = 1,
}: ListProductsProps): Promise<ProductsResponse> => {
  const res = await fetch(`${API.URL}/products?limit=${limit}&page=${page}`)
  const result = await res.json()

  if (result.status === STATUS.SUCCESS) {
    return result
  }
  throw new Error('Fail to fetch product author')
}

export type SearchProductsProps = {
  limit?: number
  page?: number
} & FilterType

const searchProducts = async ({
  limit = 20,
  page = 1,
  type,
  searchTerm,
  theme,
  tier,
  gte_price,
  lte_price,
  sort,
}: SearchProductsProps): Promise<ProductsResponse> => {
  const filterKeys = { type, theme, tier, gte_price, lte_price, sort }

  let query = Object.keys(filterKeys).reduce((acc, filter) => {
    if (
      !!filter &&
      !!filterKeys[filter as keyof Omit<FilterType, 'searchTerm'>]
    ) {
      acc += `&${filter}=${
        filterKeys[filter as keyof Omit<FilterType, 'searchTerm'>]
      }`
    }
    return acc
  }, '')

  if (!!searchTerm) {
    query += `&q=${searchTerm}`
  }

  const res = await fetch(
    `${API.URL}/search/products?limit=${limit}&page=${page}${query}`
  )
  const result = await res.json()

  if (result.status === STATUS.SUCCESS) {
    return result
  }
  throw new Error('Fail to fetch products')
}

export { listProducts, searchProducts }
