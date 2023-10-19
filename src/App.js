import './App.css'
import FilterType from './components/Filter/Type'
import Button from './components/layout/Button'
import Column from './components/layout/Column'
import Row from './components/layout/Row'
import Product from './components/Product'
import Sidebar from './components/Sidebar'
import { products } from './mock-data/products'

function App() {
  return (
    <div
      className="py-10 bg-cover"
      style={{
        backgroundImage: "url('body-bg.png')",
      }}
    >
      <div className="container">
        <Row className="">
          <Column className="basis-[24.5rem] max-w-[24.5rem] pr-5">
            <Sidebar />
          </Column>
          <Column className="!grow !shrink basis-0 pl-5">
            <FilterType />
            <div className="grid gap-10 grid-cols-4 mt-10">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  image={<Product.Image />}
                  name={<Product.Name />}
                  price={<Product.Price />}
                  author={<Product.Author />}
                />
              ))}
            </div>
            <div className="text-center">
              <Button className="bg-primary mt-14 h-[4.375rem] w-80 justify-center px-8">
                View more
              </Button>
            </div>
          </Column>
        </Row>
      </div>
    </div>
  )
}

export default App
