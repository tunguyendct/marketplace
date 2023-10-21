/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useMemo, useReducer } from 'react'
import { useQuery } from '@tanstack/react-query'
import { listThemes } from '../../apis/theme.api'
import { listTiers } from '../../apis/tiers.api'
import CrossCircledIcon from '../../icons/CrossCircledIcon'
import useFilterStore from '../../stores/filter.store'
import { FilterType, Sort as SortType } from '../../types/filter.type'
import Filter from '../Filter'
import SearchForm from '../SearchForm'
import Sort from '../Sort'

type Payload = string | SortType | null | number
type ActionType =
  | 'SET_SEARCH_TERM'
  | 'SET_TIER'
  | 'SET_THEME'
  | 'SET_SORT'
  | 'SET_GTE_PRICE'
  | 'SET_LTE_PRICE'
  | 'SET_INITIAL'

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

  const reducer = (
    state: FilterType,
    action: { type: ActionType; payload: Payload }
  ) => {
    switch (action.type) {
      case 'SET_SEARCH_TERM':
        return {
          ...state,
          searchTerm: action.payload as string,
        }
      case 'SET_TIER':
        return {
          ...state,
          tier: action.payload as string,
        }
      case 'SET_THEME':
        return {
          ...state,
          theme: action.payload as string,
        }
      case 'SET_SORT':
        return {
          ...state,
          sort: action.payload as SortType,
        }
      case 'SET_GTE_PRICE':
        return {
          ...state,
          gte_price: action.payload as number,
        }
      case 'SET_LTE_PRICE':
        return {
          ...state,
          lte_price: action.payload as number,
        }
      case 'SET_INITIAL':
        return {}
      default:
        return state
    }
  }

  const [filter, dispatch] = useReducer(reducer, {})

  const { filter: filterStore, setFilter, resetFilter } = useFilterStore()

  useEffect(() => {
    console.log({ filterStore })
  }, [filterStore])

  const tierOptions = useMemo(() => {
    if (dataTiers && dataTiers.data) {
      const options = dataTiers.data.tiers.map((tier) => ({
        value: tier.id,
        text: tier.name,
      }))
      options.unshift({
        value: 'all',
        text: 'All',
      })
      return options
    } else return []
  }, [dataTiers])

  const themeOptions = useMemo(() => {
    if (dataThemes && dataThemes.data) {
      const options = dataThemes.data.themes.map((theme) => ({
        value: theme.id,
        text: theme.name,
      }))
      options.unshift({
        value: 'all',
        text: 'All',
      })
      return options
    } else return []
  }, [dataThemes])

  const handleResetFilter = () => {
    dispatch({ type: 'SET_INITIAL', payload: null })
    resetFilter()
  }

  const handleSubmitFilter = () => {
    setFilter({ ...filterStore, ...filter })
  }

  return (
    <div className="space-y-8">
      <SearchForm
        handleChange={(value) => {
          dispatch({ type: 'SET_SEARCH_TERM', payload: value })
        }}
      />
      <Filter
        data={{
          label: 'Price',
        }}
        handleValueChange={(value) => {
          if (Array.isArray(value) && !isNaN(value[0])) {
            dispatch({ type: 'SET_GTE_PRICE', payload: value[0] })
          }
          if (Array.isArray(value) && !isNaN(value[1])) {
            dispatch({ type: 'SET_LTE_PRICE', payload: value[1] })
          }
        }}
        label={<Filter.Label />}
        slider={<Filter.Slider />}
      />
      <Filter
        data={{
          label: 'Tier',
          placeholder: 'Select a Tier',
          isLoading: isTiersLoading,
          isError: isTiersError,
          options: tierOptions,
        }}
        handleValueChange={(value) => {
          dispatch({ type: 'SET_TIER', payload: value as string })
        }}
        label={<Filter.Label />}
        select={<Filter.Select />}
      />
      <Filter
        data={{
          label: 'Theme',
          placeholder: 'Select a Theme',
          isLoading: isThemesLoading,
          isError: isThemesError,
          options: themeOptions,
        }}
        handleValueChange={(value) => {
          dispatch({ type: 'SET_THEME', payload: value as string })
        }}
        label={<Filter.Label />}
        select={<Filter.Select />}
      />
      <Sort
        handleValueChange={(value) => {
          dispatch({ type: 'SET_SORT', payload: value as string })
        }}
      />
      <div className="flex gap-x-10">
        <a
          className="button !pl-0"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            handleResetFilter()
          }}
        >
          <CrossCircledIcon className="" />
          Reset filter
        </a>
        <a
          href="#"
          className="button !px-12 bg-primary"
          onClick={(e) => {
            e.preventDefault()
            handleSubmitFilter()
          }}
        >
          Search
        </a>
      </div>
    </div>
  )
}

export default Sidebar
