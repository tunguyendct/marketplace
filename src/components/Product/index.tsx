import { ReactNode } from 'react'
import { Product as ProductType } from '../../types/product'
import ProductAuthor from './Author1'
import ProductContext from './context'
import ProductImage from './Image1'
import ProductName from './Name1'
import ProductPrice from './Price1'

type ProductProps = {
  product: ProductType
  image?: ReactNode
  name?: ReactNode
  price?: ReactNode
  author?: ReactNode
}

const Product = ({ product, image, name, price, author }: ProductProps) => {
  return (
    <ProductContext.Provider value={{ product }}>
      <div className="rounded-[0.625rem] bg-slate/60 p-4 space-y-6">
        {image}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            {name}
            {price}
          </div>
          {author}
        </div>
      </div>
    </ProductContext.Provider>
  )
}

Product.Image = ProductImage
Product.Name = ProductName
Product.Price = ProductPrice
Product.Author = ProductAuthor

export default Product
