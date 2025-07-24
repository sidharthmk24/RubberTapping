import React from 'react'
import Landing from './Pages/Landing'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Story from './Pages/Story'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Auth from './Pages/Auth'


function App() {
  return (
<>
<div className="App">
  <Header/>
  <Routes>
<Route path='/' element={<Landing/>}></Route>
<Route path='/*' element={<Navigate to={'/'}  />}></Route>

<Route path='/Story' element={<Story/>}></Route>
<Route path='/Product' element={<Product/>}></Route>
<Route path='/Cart' element={<Cart/>}></Route>
<Route path='/Login' element={<Auth/>}></Route>
<Route path='/SignUp' element={<Auth/>}></Route>

  </Routes>
<Footer/>
</div>

</>  )
}

export default App