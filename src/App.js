import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Subcategory from './Pages/Subcategory'
import Promo from './Components/Promo'
import Footer from './Components/Footer'
import AllProduct from './Pages/AllProduct'
import Cart from './Pages/Cart'
export default function App() {
  return (
   <>
    <BrowserRouter>
       <Promo/>
       <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/product/:id' exact element={<Product/>}/>
        <Route path='categories/:subcategory' exact element={<Subcategory/>}/>
        <Route path='/all-product' exact element={<AllProduct/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  )
}