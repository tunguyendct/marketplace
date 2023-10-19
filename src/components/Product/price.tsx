import { useProductContext } from './context'

const ProductPrice = () => {
  const { product } = useProductContext()

  return (
    <div className="flex gap-x-2 justify-center">
      <img src="eth-logo.svg" width={8} height={14} alt="ETH" />
      <span className="text-sm">{product.price}</span>
    </div>
  )
}

export default ProductPrice
