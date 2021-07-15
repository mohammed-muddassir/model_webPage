import React,{useState}from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
    const [click,setClick]=useState(false)
     const check=(event)=>{
              if(event.clientY>270&&click){
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
                                    <Link to='/home' className='navbar-menuitems'>Home</Link>
                             </li>
                             <li className='navbar-menu'>
                                    <Link to='/Projects' className='navbar-menuitems'>Projects</Link>
                             </li>
                             <li className='navbar-menu'>
                                    <Link to='/Contacts' className='navbar-menuitems'>Contacts</Link>
                             </li>
                             <li className='navbar-menu'>
                                    <Link to='/About Us' className='navbar-menuitems'>About Us</Link>
                             </li>
                                   
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
