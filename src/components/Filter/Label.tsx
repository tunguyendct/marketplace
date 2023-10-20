import Label from '../layout/Label'
import { useFilterContext } from './context'

export const FilterLabel = () => {
  const { label } = useFilterContext()
  return <Label>{label}</Label>
}
