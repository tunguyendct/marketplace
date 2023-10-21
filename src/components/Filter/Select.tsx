import Select from '../layout/Select'
import { useFilterContext } from './context'

const FilterSelect = () => {
  const { options, placeholder, handleValueChange } = useFilterContext()

  

  if (!options) return <></>

  return (
    <Select
      options={options}
      placeholder={placeholder}
      handleValueChange={handleValueChange}
    />
  )
}

export default FilterSelect
