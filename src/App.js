import './App.css'
import Column from './components/layout/Column'
import Row from './components/layout/Row'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div>
      <div className="container">
        <Row>
          <Column>
            <Sidebar />
          </Column>
          <Column></Column>
        </Row>
      </div>
    </div>
  )
}

export default App
