import React from 'react'
import Button from '../layout/Button'
import SearchForm from '../SearchForm'
import PriceRange from './PriceRange'
import FilterSelect from './Select'
import CrossCircledIcon from '../../icons/CrossCircledIcon'

const Filter = () => {
  return (
    <div className='space-y-8'>
      <SearchForm />
      <PriceRange />
      <FilterSelect />
      <FilterSelect />
      <div className='flex justify-between'>
        <Button className="pl-0">
          <CrossCircledIcon className="" />
          Reset filter
        </Button>
        <Button className=" bg-pink-500">Search</Button>
      </div>
    </div>
  )
}

export default Filter
