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
          <Column className="!grow !shrink max-w-[calc(100%-24.5rem)] basis-0 pl-5 space-y-10">
            <FilterType />
            <div className="grid gap-10 grid-cols-4">
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
            <div className="text-center !mt-14">
              <Button className="bg-primary h-[4.375rem] w-80 justify-center px-8">
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
