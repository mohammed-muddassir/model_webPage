import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom';
const STYLES =['btn-primary','btn-outline']
const SIZES=['btn-medium','btn-large']
export const Button=({
    children,type,onClick,buttonStyle,buttonSize
})=>{
    const checkbtnStyle=STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];
    const checkbtnSize=SIZES.includes(buttonSize)?buttonSize:SIZES[0];
    console.log(checkbtnSize)
    return(

        <Link to='/sign-up' className='btn-mobile'>
            <button className={`${checkbtnStyle} ${checkbtnSize}`}
             onClick={onClick} type={type}
            >
               {children}
            </button>
        </Link>
    )
}
