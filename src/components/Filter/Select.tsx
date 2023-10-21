import Select from '../layout/Select'
import { useFilterContext } from './context'

const FilterSelect = () => {
  const { options, placeholder, value, handleValueChange } = useFilterContext()

  if (!options) return <></>

  return (
  <Select
      value={value as string}
      options={options}
      placeholder={placeholder}
      handleValueChange={handleValueChange}
    />
  )
}

export default FilterSelect
