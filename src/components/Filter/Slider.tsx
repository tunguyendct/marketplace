import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import * as RadixSlider from '@radix-ui/react-slider'
import { PRICE } from '../../constants/filter'
import { formatMoney } from '../../utils/format-money'
import { useFilterContext } from './context'

const { MIN_PRICE, MAX_PRICE } = PRICE

export type SliderRef = {
  setNewValues: (values: number[]) => void
}

const FilterSlider = forwardRef<SliderRef>((_, ref) => {
  const sliderRef = useRef<RadixSlider.SliderProps & HTMLSpanElement>(null)

  const { handleValueChange: handleValueCommit } = useFilterContext()

  const [minPrice, setMinPrice] = useState(MIN_PRICE)
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE)

  useImperativeHandle(
    ref,
    () => ({
      setNewValues(newValues) {
        setMinPrice(newValues[0])
        setMaxPrice(newValues[1])
      },
    }),
    []
  )

  return (
    <>
      <RadixSlider.Slider
        ref={sliderRef}
        className="relative flex items-center select-none touch-none h-2 bg-slate rounded-sm w-full mt-2"
        value={[minPrice, maxPrice]}
        defaultValue={[MIN_PRICE, MAX_PRICE]}
        max={MAX_PRICE}
        min={MIN_PRICE}
        step={MIN_PRICE}
        onValueChange={([min, max]) => {
          setMinPrice(min)
          setMaxPrice(max)
        }}
        onValueCommit={handleValueCommit}
      >
        <RadixSlider.Track className="relative grow h-full">
          <RadixSlider.Range
            className="absolute rounded-full h-full"
            style={{
              background:
                'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(218,69,143,1) 50%, rgba(0,0,0,0.5) 100%)',
            }}
          />
        </RadixSlider.Track>
        <SliderThumb price={minPrice} />
        <SliderThumb price={maxPrice} />
      </RadixSlider.Slider>
      <div className="flex justify-between mt-2">
        <span>{formatMoney(MIN_PRICE)}</span>
        <span>{formatMoney(MAX_PRICE)}</span>
      </div>
    </>
  )
})

const SliderThumb = ({ price }: { price: number }) => {
  return (
    <RadixSlider.Thumb
      className="cursor-pointer block w-6 h-6 bg-black shadow-[0_2px_10px] p-[3px] rounded-full focus:outline-none border border-solid border-white group"
      style={{
        filter: 'drop-shadow(0px 0px 16px rgba(218, 64, 163, 0.53))',
      }}
      aria-label="Volume"
    >
      <div className="bg-primary text-sm rounded absolute flex w-24 text-white h-10 justify-center items-center bottom-10 left-1/2 -translate-x-1/2 opacity-0 after:w-0 after:h-0 after:border-solid after:border-8 after:border-b-0 after:border-transparent after:border-t-primary after:absolute after:-bottom-2 group-hover:opacity-100 transition-opacity">
        {formatMoney(price)}
      </div>
      <span
        className="w-4 h-4 block bg-primary rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,69,143,1) 60%)',
        }}
      ></span>
    </RadixSlider.Thumb>
  )
}

export default FilterSlider
