import React, { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import { BsFillEyeFill} from 'react-icons/bs';
import { AiFillHeart,AiOutlineShoppingCart} from 'react-icons/ai';
import { FaFacebook} from 'react-icons/fa';
import { BsTwitter,BsInstagram,BsYoutube} from 'react-icons/bs';

const Home = ({addtocart}) => {
    const [nuevoProducto, setNuevoProducto]= useState([])
    const [featuredProduct, setFeactureProduct]= useState([])
    const [topProduct, setTopProduct]= useState([])
    const[trendingProduct, setTrendingProduct]= useState(Homeproduct)
    //filtrado de producto 
    const filtercate = (x) =>
    {
      const filterproduct= Homeproduct.filter((curlElm)=>
      {
        return curlElm.tipe === x
      }) 
      setTrendingProduct(filterproduct)
    }
    //regresar a todos los productos 
    const allTrendingProduct = ( ) =>
    {
        setTrendingProduct(Homeproduct)
    }
    //tipo del producto 
    useEffect(()=>
    {
      productcategory()
    })
    const productcategory = () =>
    {
      const newcategory = Homeproduct.filter((X)=>
      {
        return X.tipe ==='new'
      })
      setNuevoProducto(newcategory)
      const featuredcategory= Homeproduct.filter((X)=>
      {
        return X.tipe === 'featured'
      })
      setFeactureProduct(featuredcategory)

      const topcategory = Homeproduct.filter((X)=>
      {
        return X.tipe === 'top'
      })
      setTopProduct(topcategory)
    }
  return (
    <>
      <div className='home'>
        <div className='top_banner'>
            <div className='contant'>
                <h2>Fornite</h2>
                <h3>La caza ha comenzado en Fortnite Capítulo 2 - Temporada 5: Punto cero
                </h3>
                <p>Estas Listo</p>
                <Link to='/tienda' className='link'>Ubdate Now</Link>
            </div>

        </div>
        <div className='trending'>
            <div className='container'>
                <div className='left_box'>
                    <div className='header'>
                        <div className='heading'>
                            <h2 onClick={()=> allTrendingProduct ()}>Lo mas vendido</h2>

                        </div>
                        <div className='cate'>
                            <h3 onClick={()=> filtercate('new')}>Nuevo</h3>
                            <h3 onClick={()=> filtercate('featured')}>Proximamente</h3>
                            <h3 onClick={()=> filtercate('top')}>Caliente</h3>

                        </div>
                    </div>
                     <div className='products'>
                        <div className='container'>
                          {
                            trendingProduct.map((curlElm)=>
                            {
                                return(
                                    <>
                                    <div className='box'>
                                      <div className='img_box'>
                                        <img src={curlElm.image} alt=''></img>
                                            <div className='icon'>
                                                <div className='icon_box'>
                                                   <BsFillEyeFill/> 
                                                </div>
                                                <div className='icon_box'>
                                                   <AiFillHeart/> 
                                                </div>
                                            </div>
                                        </div> 
                                         <div className='info'>
                                           <h3>{curlElm.Name}</h3>
                                           <p>${curlElm.price}</p>
                                           <button className='btn' onClick={()=> addtocart (curlElm)}>Agregar al carrito</button>
                                         </div>
                                    </div>
                                    </>
                                )
                            })
                          }
                        </div>
                        <button>Ver mas</button>
                     </div>
                </div>
                <div className='right_box'>
                    <div className='right_container'>
                        <div className='coments'>
                            <div className='head'>
                                <h3>comentarios</h3>
                            </div>
                              <div className='detail'>
                                <div className='img_box'>
                                  <img src='image/beni.jpg' alt='coments'></img>
                                </div>
                                 <div className='info'>
                                    <h3>Samuel Lopez</h3>
                                    <h4>El mejor profesor</h4>
                                    <p>alberto se merece un 10 de calificacion por que si se la rifo</p>
                                 </div>
                              </div>
                        </div>
                        <div className='newletter'>
                          <div className='head'>
                             <h3>Noticias</h3>
                            </div>
                            <div className='form'>
                                <p>Lista de correo</p>
                                <input type='email'placeholder='E-mail'autoComplete='off'></input>
                                <button>Siguenos</button>
                                <div className='icon_box'>
                                <div className='icon'>
                                    <FaFacebook/>
                                </div>
                                <div className='icon'>
                                    <BsTwitter/>
                                </div>
                                <div className='icon'>
                                    <BsInstagram/>
                                </div>
                                <div className='icon'>
                                    <BsYoutube/>
                                </div>
                                </div>
                            </div>  
                        </div>
                    </div>  
                </div>
            </div>
        </div>
         <div className='banners'>
            <div className='container'>
                <div className='left_box'>
                    <div className='bopx'>
                      <img src='image/Multi-Banner-1.avif' alt='banner'></img> 
                    </div>
                    <div className='bopx'>
                      <img src='image/b1.png' alt='banner'></img> 
                    </div>
                </div>
                <div className='right_box'>
                  <div className='top'>
                  <img src='image/b2.png' alt='banner'></img>
                  <img src='image/b3.png' alt='banner'></img>
                  </div>
                   <div className='bottom'>
                   <img src='image/b4.png' alt='banner'></img>
                   </div>
                </div>
            </div>
         </div>
         <div className='product_type'>
          <div className='container'>
            <div className='box'>
              <div className='header'>
                <h2>NUEVOS</h2>
              </div>
              {
                nuevoProducto.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className='icon'>
                          <button>< BsFillEyeFill/></button>
                          <button><AiFillHeart /></button>
                          <button onClick={()=> addtocart (curElm)}><AiOutlineShoppingCart/></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>POR LLEGAR</h2>
              </div>
              {
                featuredProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className='icon'>
                          <button><BsFillEyeFill /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={()=> addtocart (curElm)}><AiOutlineShoppingCart/></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>MAS VENDIDOS</h2>
              </div>
              {
                topProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className='icon'>
                          <button><BsFillEyeFill /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={()=> addtocart (curElm)}><AiOutlineShoppingCart/></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home