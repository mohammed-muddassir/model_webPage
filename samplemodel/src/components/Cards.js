import React from 'react'
import '../App.css'
import './Cards.css'
import Carditems from './Carditems'
import './Cards.css'
function Cards() {
    return (
        <div className='card-container'>
            <h1>Let me take you a ride to some anime worlds</h1>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                     <Carditems 
                        src='/images/image1.jpg' 
                        label='Shounen'
                        text='If you know about anime, then you know about this world.Yes, it is Konoha village from Naruto.'
                        path='/services'
                     ></Carditems>
                     <Carditems 
                        src='/images/psych_pass.jpg' 
                        label='Shounen'
                        text='If you know about anime, then you know about this world.Yes, it is Konoha village from Naruto.'
                        path='/services'
                     ></Carditems>
                </ul>
            
                <ul className='card-items'>
                            <Carditems 
                            src='/images/image_2.jpg' 
                            label='Shounen'
                            text='If you know about anime, then you know about this world.Yes, it is Konoha village from Naruto.'
                            path='/services'
                        ></Carditems>
                        <Carditems 
                            src='/images/image4.jpg' 
                            label='Shounen'
                            text='If you know about anime, then you know about this world.Yes, it is Konoha village from Naruto.'
                            path='/services'
                        ></Carditems>
                        <Carditems 
                            src='/images/img_7.png' 
                            label='Shounen'
                            text='If you know about anime, then you know about this world.Yes, it is Konoha village from Naruto.'
                            path='/services'
                        ></Carditems>
                            
                </ul>
            </div>
              
            
        </div>
    )
}

export default Cards
