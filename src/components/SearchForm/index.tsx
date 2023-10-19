import MagnifyingGlassIcon from "../../icons/MagnifyingGlassIcon"

const SearchForm = () => {
  return (
    <div className="flex h-11 px-[1.125rem] gap-x-3 py-3 items-center rounded border border-solid border-neutral text-neutral">
      <MagnifyingGlassIcon className="text-neutral" />
      <input
        className="w-full bg-transparent outline-none"
        placeholder="Quick search"
      />
    </div>
  )
}

export default SearchForm
