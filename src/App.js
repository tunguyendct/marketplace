import './App.css'
import FilterType from './components/Filter/Type'
import Column from './components/layout/Column'
import Row from './components/layout/Row'
import ProductGrid from './components/ProductGrid'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div
      className="py-10 bg-cover"
      style={{
        backgroundImage: "url('body-bg.png')",
      }}
    >
      <div className="container">
        <Row>
          <Column className="lg:pr-5 lg:basis-[20rem] lg:max-w-[20rem] xl:basis-[24.5rem] xl:max-w-[24.5rem]">
            <span>Click</span>
            <div className='hidden lg:block'>
            <Sidebar />
            </div>
            <div>
              <Sidebar />
            </div>
            
          </Column>
          <Column className="basic-full max-w-full space-y-10 lg:max-w-[calc(100%-20rem)] lg:!grow lg:!shrink lg:basis-0 lg:pl-5 xl:max-w-[calc(100%-24.5rem)]">
            <FilterType />
            <ProductGrid />
          </Column>
        </Row>
      </div>
    </div>
  )
}

export default App
