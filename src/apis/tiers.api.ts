import API from '../constants/api'
import { TiersResponse } from '../types/tier.type'

const listTiers = async (): Promise<TiersResponse> => {
  const res = await fetch(`${API.URL}/tiers`)
  return res.json()
}

export { listTiers }
