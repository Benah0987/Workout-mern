import {BrowserRouter, Routes, Route} from 'react'
import Home from './pages/Home'

function App() {
  return (
    <div>
        <BrowserRouter>
          <div className='pages'>
            <Routes>
                <Route  path = "/" element = {<Home />} />
            </Routes>

          </div>
        </BrowserRouter>
    </div>
  )
}

export default App