import { createContext, useContext } from 'react'
import { Option } from '../layout/Select'

const FilterContext = createContext<{
  label?: string
  placeholder?: string
  options?: Option[]
} | null>(null)

export const useFilterContext = () => {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error(
      'Filter.* component must be rendered as child of Filter component'
    )
  }
  return context
}

export default FilterContext
