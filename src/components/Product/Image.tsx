import HeartFilledIcon from '../../icons/HeartFilledIcon'
import { useProductContext } from './context'

const ProductImage = () => {
  const { product } = useProductContext()

  const { tier } = product

  const tierClassName = tier.name.toLowerCase() || 'common'

  return (
    <div
      className={`rounded overflow-hidden relative before:block pt-[100%] bg-${tierClassName}`}
    >
      <span className="absolute rounded bg-[rgba(49,59,69,0.5)] py-1 px-4 text-xs leading-5 top-2 left-2">
        {tier.name}
      </span>
      <img
        src={product.image}
        alt={product.name}
        className="object-contain absolute bottom-0 left-1/2 -translate-x-1/2"
      />
      <HeartFilledIcon className="absolute top-3 right-3" />
    </div>
  )
}
export default ProductImage
