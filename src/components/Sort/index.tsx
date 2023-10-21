import { SORT_OPTIONS } from '../../constants/filter'
import Filter from '../Filter'

const Sort = ({
  handleValueChange,
}: {
  handleValueChange: (value: string | number | number[]) => void
}) => {
  return (
    <Filter
      data={{
        label: 'Order by',
        placeholder: 'Date, new to old',
        defaultValue:'created-desc',
        options: SORT_OPTIONS,
      }}
      label={<Filter.Label />}
      select={<Filter.Select />}
      handleValueChange={handleValueChange}
    />
  )
}

export default Sort
