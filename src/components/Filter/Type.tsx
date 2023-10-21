import { ReactNode } from 'react'
import { useQuery } from '@tanstack/react-query'
import { listTypes } from '../../apis/types.api'
import useFilterStore from '../../stores/filter.store'

const FilterType = () => {
  const { filter, setFilter } = useFilterStore()

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
    <div className="flex overflow-x-auto py-2 gap-6 no-scrollbar sm:py-0">
      <TypeItem
        isActive={filter.type === null}
        onClick={() => {
          setFilter({
            ...filter,
            type: null,
          })
        }}
      >
        All
      </TypeItem>
      {data?.data.types.map((type) => (
        <TypeItem
          isActive={filter.type === type.id}
          onClick={() => {
            setFilter({
              ...filter,
              type: type.id,
            })
          }}
          key={type.id}
        >
          {type.name}
        </TypeItem>
      ))}
    </div>
  )
}

const TypeItem = ({
  isActive,
  children,
  className,
  onClick,
}: {
  isActive?: boolean
  children?: ReactNode
  className?: string
  onClick?: () => void
}) => {
  return (
    <span
      onClick={onClick}
      className={`px-4 h-11 items-center flex whitespace-nowrap font-semibold bg-primary/40 rounded cursor-pointer${
        isActive ? ' !bg-primary' : ''
      } ${className || ''}`.trim()}
    >
      {children}
    </span>
  )
}

const Skeleton = () => {
  return (
    <div className="flex gap-6 overflow-x-auto">
      {Array.from(Array(12), (_, index) => (
        <TypeItem key={index} className="!bg-neutral animate-pulse w-20" />
      ))}
    </div>
  )
}

export default FilterType
