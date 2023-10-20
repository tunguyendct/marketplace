import { ReactNode } from 'react'
import { useQuery } from '@tanstack/react-query'
import { listTypes } from '../../apis/types.api'

const FilterType = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['types'],
    queryFn: () => {
      const controller = new AbortController()
      setTimeout(() => {
        controller.abort()
      }, 5000)

      return listTypes()
    },
  })

  if (isLoading) return <Skeleton />

  if (
    isError ||
    data?.status === 'error' ||
    data?.status === 'fail' ||
    !data?.data.total
  )
    return <></>

  return (
    <div className="flex gap-6">
      <TypeItem>All</TypeItem>
      {data?.data.types.map((type) => (
        <TypeItem key={type.id}>{type.name}</TypeItem>
      ))}
    </div>
  )
}

const TypeItem = ({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) => {
  return (
    <span
      className={`px-4 h-11 items-center flex font-semibold bg-primary/40 rounded ${
        className || ''
      }`.trim()}
    >
      {children}
    </span>
  )
}

const Skeleton = () => {
  return (
    <div className="flex gap-6">
      {Array.from(Array(12), (_, index) => (
        <TypeItem key={index} className="!bg-neutral animate-pulse w-20" />
      ))}
    </div>
  )
}

export default FilterType
