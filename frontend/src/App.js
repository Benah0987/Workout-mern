import { BrowserRouter, Routes, Route } from 'react-router-dom';  // react-router-dom, not just react!
import Home from './pages/Home';  // Verify the correct path

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
