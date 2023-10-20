import API from '../constants/api'
import { ProductsResponse } from '../types/product.type'

const listProducts = async (): Promise<ProductsResponse> => {
  const res = await fetch(`${API.URL}/products`)
  return res.json()
}

export { listProducts }
