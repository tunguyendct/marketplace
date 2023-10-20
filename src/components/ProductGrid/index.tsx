import { Fragment } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { searchProducts } from '../../apis/product.api'
import { PAGE_LIMIT } from '../../constants'
import CircleNotchIcon from '../../icons/CircleNotchIcon'
import Button from '../layout/Button'
import Product from '../Product'
import SkeletonProduct from '../skeleton/Product'

const ProductGrid = () => {
  const pageLimit = PAGE_LIMIT

  const { data, hasNextPage, isFetchingNextPage, status, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['search/products'],
      queryFn: async ({ pageParam = 1 }) => {
        const controller = new AbortController()

        setTimeout(() => {
          controller.abort()
        }, 5000)

        const result = await searchProducts({page: pageParam})
        const {
          data: { total, products },
        } = result
        const pages = Math.ceil(total / pageLimit)

        return {
          products,
          total,
          nextPage: pages > pageParam ? pageParam + 1 : undefined,
        }
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage
      },
    })

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
            {group.products.map((product) => (
              <Product
                key={product.id}
                product={product}
                image={<Product.Image />}
                name={<Product.Name />}
                price={<Product.Price />}
                author={<Product.Author />}
              />
            ))}
          </Fragment>
        ))}
      </div>
      {hasNextPage && (
        <div className="text-center !mt-14">
          <Button
            className="bg-primary h-[4.375rem] w-80 justify-center px-8"
            onClick={() => fetchNextPage()}
          >
            
            {isFetchingNextPage ? (
              <>
                <CircleNotchIcon className="fill-white animate-spin" /> Loading
              </>
            ) : (
              'View more'
            )}
          </Button>
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
