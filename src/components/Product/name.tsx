import { useProductContext } from './context'

const ProductName = () => {
  const { product } = useProductContext()

  return <h4 className="font-semibold">{product.name}</h4>
}
export default ProductName
