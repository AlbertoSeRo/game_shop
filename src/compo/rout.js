import React from 'react'
import Home from './home';
import {Routes, Route} from 'react-router';
import Cart from './cart';
import Shop from './shop';
import Contact from './contact'

const Rout = ({shop,Filter,allcatefilter ,addtocart,cart, setCart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home addtocart={addtocart}/>}/>
        <Route path='Productos' element={<Cart cart={cart} setCart={setCart} />}/>
        <Route path='tienda' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>}/>
        <Route path='Contacto' element={<Contact/>}/>

        
    </Routes>
        
    </>
  )
}

export default Rout