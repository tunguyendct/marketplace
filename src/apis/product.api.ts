import API from '../constants/api'
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
  return res.json()
}

type SearchProductsProps = {
  limit?: number
  page?: number
} & FilterType

const searchProducts = async ({
  limit = 20,
  page = 1,
  type,
  theme,
  tier,
  gte_price,
  lte_price,
  sort,
}: SearchProductsProps): Promise<ProductsResponse> => {
  const filterKeys = { type, theme, tier, gte_price, lte_price, sort }

  const query = Object.keys(filterKeys).reduce((acc, filter) => {
    if (!!filter && !!filterKeys[filter as keyof FilterType]) {
      acc += `&${filter}=${filterKeys[filter as keyof FilterType]}`
    }
    return acc
  }, '')

  const res = await fetch(
    `${API.URL}/search/products?limit=${limit}&page=${page}${query}`
  )
  return res.json()
}

export { listProducts, searchProducts }
