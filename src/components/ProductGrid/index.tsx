/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react'
import useFetchProducts from '../../hooks/useFetchProducts'
import CircleNotchIcon from '../../icons/CircleNotchIcon'
import useFilterStore from '../../stores/filter.store'
import Product from '../Product'
import SkeletonProduct from '../skeleton/Product'

const ProductGrid = () => {
  const { filter } = useFilterStore()

  const { data, hasNextPage, isFetchingNextPage, status, fetchNextPage } =
    useFetchProducts(filter)

  if (status === 'pending') {
    return <Skeleton />
  }

  if (status === 'error' || data.pages.length === 0) {
    return <div className="text-center">Product not found</div>
  }

  return (
    <>
      <div className="grid gap-10 grid-cols-4">
        {data.pages.map((group, i) => (
          <Fragment key={i}>
            {group.products.length > 0 ? (
              group.products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  image={<Product.Image />}
                  name={<Product.Name />}
                  price={<Product.Price />}
                  author={<Product.Author />}
                />
              ))
            ) : (
              <div className="text-center col-end-5 col-start-1">
                Product not found
              </div>
            )}
          </Fragment>
        ))}
      </div>
      {hasNextPage && (
        <div className="text-center !mt-14">
          <a
            className="button bg-primary !h-[4.375rem] !w-80 justify-center"
            onClick={(e) => {
              e.preventDefault()
              !isFetchingNextPage && fetchNextPage()
            }}
            href="#"
          >
            {isFetchingNextPage ? (
              <>
                <CircleNotchIcon className="fill-white animate-spin" /> Loading
              </>
            ) : (
              'View more'
            )}
          </a>
        </div>
      )}
    </>
  )
}

const Skeleton = () => {
  return (
    <div className="grid gap-10 grid-cols-4">
      {Array.from(Array(12), (_, index) => (
        <SkeletonProduct key={index} />
      ))}
    </div>
  )
}

export default ProductGrid
