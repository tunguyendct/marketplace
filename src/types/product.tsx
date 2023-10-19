export type Product = {
  id: string
  name: string
  imageSrc: string
  price: number
  author: {
    avatar: string
    name: string
  }
  type: string
  theme: string
  tier: string
}