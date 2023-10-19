import HeartFilledIcon from '../../icons/HeartFilledIcon'
import { Product as ProductType } from '../../types/product'

const Product = (product: ProductType) => {
  return (
    <div className="rounded-[0.625rem] bg-slate/60 p-4 space-y-6">
      <div className="rounded overflow-hidden relative bg-purple-500 before:block pt-[100%]">
        <span className="absolute rounded bg-[rgba(49,59,69,0.5)] py-1 px-4 text-xs leading-5 top-2 left-2">
          {product.tier}
        </span>
        <img
          src={product.imageSrc}
          alt={product.name}
          className="object-contain absolute bottom-0 left-1/2 -translate-x-1/2"
        />
        <HeartFilledIcon className="absolute top-3 right-3" />
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">{product.name}</h4>
          <div className="flex gap-x-2 justify-center">
            <img src="eth-logo.svg" width={8} height={14} alt="ETH" />
            <span className="text-sm">{product.price}</span>
          </div>
        </div>
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
              alt='author-badge'
            />
          </span>
          <span className="text-xs">{product.author.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Product
