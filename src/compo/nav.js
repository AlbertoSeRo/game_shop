import React from 'react'
import { MdOutlineLocalShipping } from 'react-icons/md';
import { RiSearchLine} from 'react-icons/ri';
import { FiLogIn} from 'react-icons/fi';
import { CgLogOut} from 'react-icons/cg';
import { AiOutlineUser} from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = ({search,setSearch,searchproduct}) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
    <div className='header bg-red-300'>
      <div className='top_header'>
        <div className='icon'>
          <MdOutlineLocalShipping/>

        </div>
        <div className='info'>
          <p>
            Envio Gratis a partir de $1000 
          </p>
        </div>
     </div>
     <div className='mid_header'>
      <div className='logo'>
        <img src='image/game.png' alt='logo'>
        </img>
      </div>
      <div className='shearch_box'>
        <input type='text' value={search} placeholder='Buscar'onChange={(e)=> setSearch(e.target.value)}></input>
        <button onClick={searchproduct}><RiSearchLine/></button>
      </div>
      {
        isAuthenticated ?
        <div className='user'>
        <div className='icon'>
          <CgLogOut/>
        </div>
        <div className='btn'>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Salir</button>
        </div>
        </div>
        :
        <div className='user'>
           <div className='icon'>
           <FiLogIn/>
           </div>
          <div className='btn'>
           <button onClick={() => loginWithRedirect()}>Entrar</button>
          </div>
        </div>
      
     }
     </div>
     <div className='last_header'>
      <div className='user_profile'>
        {
         isAuthenticated ?
         <>
         <div className='icon'>
          <AiOutlineUser/>
         </div>
         <div className='info'>
         <h2>{user.name}</h2>
         <p>{user.email}</p>

         </div>
         
         </> 
         :
         <>
         <div className='icon'>
          <AiOutlineUser/>
         </div>
         <div className='info'>
          <p>Registrate Porfavor</p>

         </div>
          
         </>
        }
      </div>
      <div className='nav'>
        <ul>
          <li><Link to='/' className='link'>Home</Link></li>
          <li><Link to='/tienda' className='link'>Tienda</Link></li>
          <li><Link to='/productos' className='link'>Productos</Link></li>
          <li><Link to='/juegos' className='link'>Juegos</Link></li>
          <li><Link to='/contacto' className='link'>Contacto</Link></li>
        </ul>

      </div>
      <div className='offer'>
        <p>Hasta 50% de descuento en juegos</p>
      </div>

     </div>

    </div>
    </>
    
  )
}

export default Nav