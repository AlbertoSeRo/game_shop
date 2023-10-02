import React, { useState } from 'react'
import Nav from './compo/nav'
import{BrowserRouter} from 'react-router-dom'
import Rout from './compo/rout'
import Footer from './compo/footer'
import Homeproduct from './compo/home_product'

const App=()=> {
  const[cart,setCart]=useState([])
  const[shop,setShop]=useState(Homeproduct)
  const[search, setSearch]= useState('')
  const Filter = (x)=>
  {
    const catefilter = Homeproduct.filter((product)=>
    {
      return product.cat === x
    })
    setShop(catefilter)
  }
  const allcatefilter =()=>
  {
  setShop(Homeproduct)
  }
  //Shop Search Filter
  const searchlength = (search || []).length === 0
  const searchproduct = () =>
  {
  if(searchlength)
  {
    alert("Porfavor busque un producto !")
    setShop(Homeproduct)
  }
  else
  {
    
      const searchfilter = Homeproduct.filter((x) => 
      {
        return x.cat === search
      })
      setShop(searchfilter)
  }
}
//Add To cart
const addtocart = (product) =>
{
  const exist = cart.find((x) => {
    return x.id === product.id
  })
  if(exist)
  {
    alert("This product is alleardy added in cart")
  }
  else
  {
    setCart([...cart, {...product, qty:1}])
    alert("Added To cart")
  }
}
 console.log(cart)

  return (
    <div className='bg-red-300'>
    <BrowserRouter >
    <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
    <Rout   setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>
    <Footer/>
    </BrowserRouter>

    </div>
  )
}

export default App
