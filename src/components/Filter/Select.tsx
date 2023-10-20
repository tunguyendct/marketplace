import Select from '../layout/Select'
import { useFilterContext } from './context'

const FilterSelect = () => {
  const { options, placeholder } = useFilterContext()

  if (!options) return <></>

  return <Select options={options} placeholder={placeholder} />
}

export default FilterSelect
