import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
