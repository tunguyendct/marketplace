const FilterType = () => {
  return <div className="flex gap-6">{
    Array.from(Array(10), () => <TypeItem />)
    }</div>
}

const TypeItem = () => {
  return <span className="px-4 h-11 items-center flex font-semibold bg-pink-400 rounded">All</span>
}

export default FilterType