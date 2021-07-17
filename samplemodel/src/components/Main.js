import React from 'react'
import { Button } from './Button'
import Cards from './Cards'
import './Button.css'
import '../App.css'
import './Main.css'
function Main() {
    return (
       <div>
          <div className='main-container'>
             
              <video src="/videos/naruto-hokage-anime-live-wallpaper.mp4" autoPlay loop muted></video>
              <h1>Anime World</h1>
              <p>What makes you waiting, huh?</p>
              <div className='main-btn'>
                   <Button buttonStyle='btn-outline' buttonSize='btn-medium'>
                      Ikuzo
                   </Button>
                   <Button buttonStyle='btn-primary' buttonSize='btn-medium'>
                      Watch vlogs <i className='far fa-play-circle'></i>
                   </Button>
              </div>
              
              

          </div>  
          
          </div>  
   
    )
}

export default Main
