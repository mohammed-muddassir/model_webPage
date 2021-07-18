import React from 'react'
import {Link} from 'react-router-dom'
import Cards from './Cards'
import './Cards.css'
function Carditems(props) {
    return (
        <>
          <li className='cards-list'>
               <Link className='cards-link' to={props.path}>

                 <figure className='cards-picture-wrap' data-category={props.label}>
                     <img className='cards-img' src={props.src} alt='cardImage'></img>
                 </figure>
                 <div className='cards-info'>

                    <h5 className='cards-text'>{props.text}</h5>
                 
                 </div>
               
               
               </Link>
          </li>  
        </>
    )
}

export default Carditems
