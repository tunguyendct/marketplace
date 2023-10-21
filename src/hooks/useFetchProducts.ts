import { useInfiniteQuery } from '@tanstack/react-query'
import { searchProducts, SearchProductsProps } from '../apis/product.api'
import { PAGE_LIMIT } from '../constants'

const useFetchProducts = ({
  limit,
  type,
  theme,
  tier,
  gte_price,
  lte_price,
}: SearchProductsProps) => {
  return useInfiniteQuery({
    queryKey: ['search/products', type, tier, theme, gte_price, lte_price],
    queryFn: async ({ pageParam = 1 }) => {
      const controller = new AbortController()

      setTimeout(() => {
        controller.abort()
      }, 5000)

      const result = await searchProducts({
        page: pageParam,
        limit,
        type,
        theme,
        tier,
        gte_price,
        lte_price,
      })
      const {
        data: { total, products },
      } = result
      const pages = Math.ceil(total / PAGE_LIMIT)

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
    refetchInterval: 60000,
  })
}

export default useFetchProducts
