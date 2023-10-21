import { CaretDownIcon } from '@radix-ui/react-icons'
import Navigation from '../Navigation'

const Header = () => {
  return (
    <div className="sticky top-0 left-0 width-0 h-[5.25rem] bg-[rgba(23,22,26,0.7)] z-10">
      <div className="container flex w-full justify-between items-center h-full">
        <div className='flex'>
          <div className="w-32"></div>
          <Navigation />
        </div>
        <div className="flex gap-x-11">
          <a href="/" className="button bg-primary">
            Connect Wallet
          </a>
          <a href="/" className="flex gap-x-4 items-center">
            <img src="globe.svg" width={16} height={16} alt="lang" />
            <CaretDownIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
