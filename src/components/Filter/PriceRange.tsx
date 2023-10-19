import * as Slider from '@radix-ui/react-slider'
import Label from '../layout/Label'

const PriceRange = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <Label>Price</Label>
        <Slider.Root
          className="relative flex items-center select-none touch-none h-2 bg-slate rounded-sm w-full mt-2"
          defaultValue={[25, 75]}
          max={100}
          step={1}
        >
          <Slider.Track className="relative grow h-full">
            <Slider.Range
              className="absolute rounded-full h-full"
              style={{
                background:
                  'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(218,69,143,1) 50%, rgba(0,0,0,0.5) 100%)',
              }}
            />
          </Slider.Track>
          <SliderThumb />
          <SliderThumb />
        </Slider.Root>
        <div className="flex justify-between mt-2">
          <span>0.01 ETH</span>
          <span>200 ETH</span>
        </div>
      </div>
    </>
  )
}

const SliderThumb = () => {
  return (
    <Slider.Thumb
      className="cursor-pointer block w-6 h-6 bg-black shadow-[0_2px_10px] p-[0.19rem] rounded-full focus:outline-none border border-solid border-white"
      style={{
        filter: 'drop-shadow(0px 0px 16px rgba(218, 64, 163, 0.53))',
      }}
      aria-label="Volume"
    >
      <span
        className="w-4 h-4 block bg-primary rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,69,143,1) 60%)',
        }}
      ></span>
    </Slider.Thumb>
  )
}

export default PriceRange
