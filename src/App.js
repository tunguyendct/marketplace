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
          <Column className="basis-[24.5rem] max-w-[24.5rem] pr-5">
            <Sidebar />
          </Column>
          <Column className="!grow !shrink max-w-[calc(100%-24.5rem)] basis-0 pl-5 space-y-10">
            <FilterType />
            <ProductGrid />
          </Column>
        </Row>
      </div>
    </div>
  )
}

export default App
