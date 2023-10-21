import API from '../constants/api'
import { STATUS } from '../constants/response'
import { TiersResponse } from '../types/tier.type'

const listTiers = async (): Promise<TiersResponse> => {
  const res = await fetch(`${API.URL}/tiers`)
  const result = await res.json()

  if (result.status === STATUS.SUCCESS) {
    return result
  }
  throw new Error('Fail to fetch product tiers')
}

export { listTiers }
