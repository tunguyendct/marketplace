import { ReactNode } from 'react'
import { ThemesResponse } from '../../types/theme.type'
import { TiersResponse } from '../../types/tier.type'
import { Option } from '../layout/Select'
import FilterContext from './context'
import { FilterLabel } from './Label'
import FilterSelect from './Select'
import FilterSlider from './Slider'

export type FilterData = TiersResponse['data'] | ThemesResponse['data']
type FilterType = 'tier' | 'theme' | 'productType' | 'price'

type FilterProps = {
  type: FilterType
  data: {
    label?: string
    placeholder?: string
    isError?: boolean
    isLoading?: boolean
    filterOptions?: FilterData
  }
  label?: ReactNode
  select?: ReactNode
  slider?: ReactNode
}

const Filter = ({ type, data, label, select, slider }: FilterProps) => {
  const { isLoading, isError } = data

  if (isLoading) return <Skeleton />

  if (isError) return <></>

  const { filterOptions } = data

  let options: Option[] = []

  switch (type) {
    case 'tier':
      options = (filterOptions as TiersResponse['data']).tiers.map((tier) => ({
        value: tier.id,
        text: tier.name,
      }))
      break
    case 'theme':
      options = (filterOptions as ThemesResponse['data']).themes.map(
        (theme) => ({
          value: theme.id,
          text: theme.name,
        })
      )
      break
  }

  return (
    <FilterContext.Provider
      value={{
        ...data,
        options,
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
