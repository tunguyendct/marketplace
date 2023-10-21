import Navigation from '../Navigation'

const Header = () => {
  return (
    <div className="sticky top-0 left-0 width-0 h-[5.25rem] bg-[rgba(23,22,26,0.7)] z-10" >
      <div className='container'>
      <Navigation />
      <a className='button bg-primary'>Connect Wallet</a>
      </div>
      
    </div>
  )
}

export default Header
