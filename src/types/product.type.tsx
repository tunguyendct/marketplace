import { Status } from "./response.type"

export type ProductsResponse = {
  status: Status
  data: {
    total: number
    authors: Product[]
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
  }
  type: string
  theme: string
  tier: string
}