import { ReactNode } from 'react'
import { ThemesResponse } from '../../types/theme.type'
import { TiersResponse } from '../../types/tier.type'
import { Option } from '../layout/Select'
import FilterContext from './context'
import { FilterLabel } from './Label'
import FilterSelect from './Select'
import FilterSlider from './Slider'

export type FilterData = TiersResponse['data'] | ThemesResponse['data']

type FilterProps = {
  data: {
    label?: string
    placeholder?: string
    value?: string | number[]
    defaultValue?: string
    isError?: boolean
    isLoading?: boolean
    options?: Option[]
  }
  label?: ReactNode
  select?: ReactNode
  slider?: ReactNode
  handleValueChange: (value: string | number | number[]) => void
}

const Filter = ({
  data,
  label,
  select,
  slider,
  handleValueChange,
}: FilterProps) => {
  const { isLoading, isError } = data

  if (isLoading) return <Skeleton />

  if (isError) return <></>

  return (
    <FilterContext.Provider
      value={{
        ...data,
        options: data.options,
        handleValueChange,
      }}
    >
      <div className="flex flex-col gap-y-4">
        {label}
        {select}
        {slider}
      </div>
    </FilterContext.Provider>
  )
}

const Skeleton = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="bg-neutral animate-pulse w-20 h-6"></div>
      <div className="h-11 bg-neutral animate-pulse"></div>
    </div>
  )
}

Filter.Label = FilterLabel
Filter.Select = FilterSelect
Filter.Slider = FilterSlider

export default Filter
