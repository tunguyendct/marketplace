import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import './App.css'
import DrawerFilter from './components/DrawerFilter'
import FilterType from './components/Filter/Type'
import Column from './components/layout/Column'
import Row from './components/layout/Row'
import ProductGrid from './components/ProductGrid'
import Sidebar from './components/Sidebar'
import useStore from './stores/index.store'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'

function App() {
  const { setIsFilterOpen } = useStore()
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: "url('body-bg.png')",
      }}
    >
      <Header />
      <Banner />
      <div className="container py-16 lg:py-[7.5rem]">
        <Row className="flex-col gap-y-4 lg:gap-y-0 lg:flex-row">
          <Column className="basis-full max-w-full lg:pr-5 lg:basis-[20rem] lg:max-w-[20rem] xl:basis-[24.5rem] xl:max-w-[24.5rem]">
            <div className="hidden lg:block">
              <Sidebar />
            </div>
            <div className="lg:hidden">
              <button
                className="button border-neutral justify-center border border-solid w-full"
                onClick={() => {
                  setIsFilterOpen(true)
                }}
              >
                <MixerHorizontalIcon className="w-5 h-5" />
                Filter
              </button>
              <DrawerFilter>
                <Sidebar />
              </DrawerFilter>
            </div>
          </Column>
          <Column className="basic-full max-w-full space-y-10 lg:max-w-[calc(100%-20rem)] lg:!grow lg:!shrink lg:basis-0 lg:pl-5 xl:max-w-[calc(100%-24.5rem)]">
            <FilterType />
            <ProductGrid />
          </Column>
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default App
