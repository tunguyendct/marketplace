import { Status } from './response.type'

export type ProductTypesResponse = {
  status: Status
  data: {
    total: number
    types: ProductType[]
  }
}

export type ProductType = {
  id: string
  name: string
}
