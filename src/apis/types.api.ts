import API from '../constants/api'
import { ProductTypesResponse } from '../types/product-type.type'

const listTypes = async (): Promise<ProductTypesResponse> => {
  const res = await fetch(`${API.URL}/types`)
  return res.json()
}

export { listTypes }
