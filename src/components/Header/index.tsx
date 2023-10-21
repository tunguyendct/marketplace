import { useEffect } from 'react'
import { CaretDownIcon } from '@radix-ui/react-icons'
import Navigation from '../Navigation'

const Header = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      var prevScrollpos = window.pageYOffset
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset
        const header = document.getElementById('header')
        if (header) {
          if (prevScrollpos > currentScrollPos) {
            header.style.top = '0'
          } else {
            header.style.top = '-84px'
          }
        }
        prevScrollpos = currentScrollPos
      }
    }
  }, [])

  return (
    <div
      id="header"
      className="hidden lg:block sticky top-0 left-0 width-0 h-[5.25rem] bg-[rgba(23,22,26,0.7)] transition-[top] duration-300 z-10"
    >
      <div className="container flex w-full justify-between items-center h-full">
        <div className="flex">
          <div className="lg:w-0 xl:w-32"></div>
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
