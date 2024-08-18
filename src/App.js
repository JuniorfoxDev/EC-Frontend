import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
export default function App() {
  return (
   <>
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}