import { useProductContext } from './context'

const ProductAuthor = () => {
  const {product} = useProductContext()

  return (
    <div className="flex items-center gap-x-3">
      <span className="relative w-8 h-8 block">
        <img
          width={32}
          height={32}
          src={product.author.avatar}
          className="rounded-full"
          alt={product.author.name}
        />
        <img
          src="credit-badge.svg"
          width={12}
          height={12}
          className="w-3 h-3 absolute right-0 bottom-0 z-1"
          alt="author-badge"
        />
      </span>
      <span className="text-xs">{product.author.name}</span>
    </div>
  )
}
export default ProductAuthor
