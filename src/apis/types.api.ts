import API from '../constants/api'
import { STATUS } from '../constants/response'
import { ProductTypesResponse } from '../types/product-type.type'

const listTypes = async (): Promise<ProductTypesResponse> => {
  const res = await fetch(`${API.URL}/types`)
  const result = await res.json()

  if (result.status === STATUS.SUCCESS) {
    return result
  }
  throw new Error('Fail to fetch product types')
}

export { listTypes }
