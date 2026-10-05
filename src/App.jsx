import { Route, Routes } from 'react-router-dom'
import './App.css'
import Product from './pages/Product'
import Addproduct from './pages/Addproduct'
import EditProduct from './pages/EditProduct'
import Pnf from './pages/Pnf'



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/product/:id/view' element={<EditProduct/>}/>
        <Route path='*' element={<Pnf/>}/>
      </Routes>
    </>
  )
}

export default App
