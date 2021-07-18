import React,{useState}from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button';
function NavBar() {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);
     const check=(event)=>{
              if(event.clientY>295&&click){
                     setClick(false)
                     console.log(event.clientY)
              }
     }
     window.addEventListener('click',check)
    return (


    <div  className="nav-bar">
       <div className="navbar-container">
            <div className="navbar-logo">
                     <Link to='/' className='navbar-logo'><h3>Google</h3></Link>
              </div>
                 
            
            <nav className="nav-hidden" >
                
                 <ul  className='as' id={click?'show':''}>
                             <li className='navbar-menu'>
                                    <Link to='/' className='navbar-menuitems'>Home</Link>
                             </li>
                             <li className='navbar-menu'>
                                    <Link to='/products' className='navbar-menuitems'>Products</Link>
                             </li>
                             <li className='navbar-menu'>
                                    <Link to='/services' className='navbar-menuitems'>Services</Link>
                             </li>
                             <li className='navbar-menu'>
                                    <Link to='/about-us' className='navbar-menuitems'>About Us</Link>
                             </li>
                             {button&&<Button buttonStyle='btn-outline'>SIGN UP</Button>}      
                          </ul>
                          

            </nav>
            <div className='menubar'>
                        <i onClick={()=>setClick(!click)} className={click?"fas fa-times":'fa fa-bars'} id='nav-icon'></i>
               </div>  
            
          </div>

      </div> 
    )
}

export default NavBar
