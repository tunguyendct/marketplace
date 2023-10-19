import Label from '../layout/Label'
import Select from '../layout/Select'

const FilterSelect = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <Label>Tier</Label>
      <Select />
    </div>
  )
}

export default FilterSelect
