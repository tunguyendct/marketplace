import { ReactNode } from 'react'
import { Product as ProductType } from '../../types/product.type'
import ProductAuthor from './Author'
import ProductContext from './context'
import ProductImage from './Image'
import ProductName from './Name'
import ProductPrice from './Price'

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
      <div className="rounded-[0.625rem] bg-slate/60 p-4 space-y-6 transition-shadow hover:cursor-pointer hover:shadow-[0px_0px_24px_-1px_rgba(255,255,255,0.2)]">
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
