import { Status } from './response.type'

export type TiersResponse = {
  status: Status
  data: {
    total: number
    tiers: Tier[]
  }
}

export type Tier = {
  id: string
  name: string
}
