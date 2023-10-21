import { ReactNode, useEffect } from 'react'
import { Cross1Icon } from '@radix-ui/react-icons'
import useStore from '../../stores/index.store'

const DrawerFilter = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  const { isFilterOpen, setIsFilterOpen } = useStore()

  useEffect(() => {
    if (document) {
      if (isFilterOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
  }, [isFilterOpen])

  return (
    <div
      className={`fixed top-0 bottom-0 left-full w-full z-10 ${
        className || ''
      }`.trim()}
    >
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 w-[calc(100%-1.75rem)] max-w-md bg-white text-neutral z-[2] duration-300 transition-all${
          isFilterOpen ? ' visible -translate-x-full' : ' invisible'
        }`}
      >
        <div className="flex flex-col relative overflow-hidden h-full">
          <div className="py-3 pr-4 flex items-center justify-between border-b border-solid border-b-neutral/50">
            <button
              className="rounded-full flex justify-center items-center w-10 h-10"
              onClick={() => {
                setIsFilterOpen(false)
              }}
            >
              <Cross1Icon className="w-5 h-5" />
            </button>
            <h4 className="text-xl font-semibold text-center">Filter</h4>
            <div className="w-10 h-10"></div>
          </div>
          <div className="p-4 h-full overflow-x-visible overflow-y-auto">
            {children}
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 bottom-0 left-0 z-[1] bg-black/80 duration-300 transition-all${
          isFilterOpen
            ? ' !pointer-events-auto visible opacity-100'
            : ' pointer-events-none invisible opacity-0'
        }`}
      ></div>
    </div>
  )
}

export default DrawerFilter
