import { Product } from '../types/product'

const product: Product = {
  id: '1',
  name: 'The DJ',
  price: 2.75,
  imageSrc: 'the-dj.png',
  author: {
    avatar: 'author-avatar.png',
    name: 'Ghozali_Ghozalu',
  },
  type: 'Upper Body',
  theme: 'Halloween',
  tier: 'Epic',
}

export const products: Product[] = Array.from(
  Array(10),
  (item, index) =>
    (item = {
      ...product,
      id: (index + 1).toString(),
    })
)
