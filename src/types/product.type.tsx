import { Status } from './response.type'

export type ProductsResponse = {
  status: Status
  data: {
    total: number
    products: Product[]
  }
}

export type Product = {
  id: string
  name: string
  image: string
  price: number
  author: {
    avatar: string
    name: string
    verified: boolean
  }
  type: { name: string }
  theme: { name: string }
  tier: { name: string }
}
