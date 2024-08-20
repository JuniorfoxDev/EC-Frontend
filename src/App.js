import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Subcategory from './Pages/Subcategory'
export default function App({_id}) {
  return (
   <>
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/product/:id' exact element={<Product/>}/>
        <Route path='categories/:subcategory' exact element={<Subcategory/>}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}