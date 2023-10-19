import { createContext, useContext } from 'react'
import { Product } from '../../types/product'

const ProductContext = createContext<{
  product: Product
} | null>(null)

export const useProductContext = () => {
  const context = useContext(ProductContext)

  if (!context) {
    throw new Error(
      'Product.* component must be rendered as child of Product component'
    )
  }
  return context
}

export default ProductContext
