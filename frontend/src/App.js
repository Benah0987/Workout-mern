import { BrowserRouter, Routes, Route } from 'react-router-dom';  // react-router-dom, not just react!
import Home from './pages/Home';  // Verify the correct path
import Navbar from './components/Navbar';
import './index.css'


function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='pages'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
