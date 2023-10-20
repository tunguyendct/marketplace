import { useQuery } from '@tanstack/react-query'
import { listThemes } from '../../apis/theme.api'
import { listTiers } from '../../apis/tiers.api'
import CrossCircledIcon from '../../icons/CrossCircledIcon'
import Filter from '../Filter'
import Button from '../layout/Button'
import SearchForm from '../SearchForm'

const Sidebar = () => {
  const {
    data: dataTiers,
    isLoading: isTiersLoading,
    isError: isTiersError,
  } = useQuery({
    queryKey: ['tiers'],
    queryFn: () => {
      const controller = new AbortController()
      setTimeout(() => {
        controller.abort()
      }, 5000)

      return listTiers()
    },
  })

  const {
    data: dataThemes,
    isLoading: isThemesLoading,
    isError: isThemesError,
  } = useQuery({
    queryKey: ['themes'],
    queryFn: () => {
      const controller = new AbortController()
      setTimeout(() => {
        controller.abort()
      }, 5000)

      return listThemes()
    },
  })

  return (
    <div className="space-y-8">
      <SearchForm />
      <Filter
        type="price"
        data={{
          label: 'Price',
        }}
        label={<Filter.Label />}
        slider={<Filter.Slider />}
      />
      <Filter
        type="tier"
        data={{
          label: 'Tier',
          placeholder: 'Select a Tier',
          isLoading: isTiersLoading,
          isError: isTiersError,
          filterOptions: dataTiers?.data,
        }}
        label={<Filter.Label />}
        select={<Filter.Select />}
      />
      <Filter
        type="theme"
        data={{
          label: 'Theme',
          placeholder: 'Select a Theme',
          isLoading: isThemesLoading,
          isError: isThemesError,
          filterOptions: dataThemes?.data,
        }}
        label={<Filter.Label />}
        select={<Filter.Select />}
      />
      <div className="flex gap-x-10">
        <Button className="pl-0">
          <CrossCircledIcon className="" />
          Reset filter
        </Button>
        <Button className="px-12 bg-primary">Search</Button>
      </div>
    </div>
  )
}

export default Sidebar
