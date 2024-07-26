import React from 'react'
import image from "../images/Main Ornaments Hero (1).png"

const Body1 = () => {
  return (
    <div className='body_container'>
        <div className='text'>
            <div className='content'>
            <h2>Learn Driving: Book
                Top Driving <span>Schools</span> Near You
            </h2>
            <p>
                Empower yourself with safe and confident driving skills today.
                
            </p>
            <p>
            Book expert instructions and top-rated driving schools near you.
            </p>
            </div>
            <div className='search'>
            <p>Search Location Driving School and Services</p>
            <button>
                Near me
           </button>
            </div>
        </div>
        <div className='image'>
             <img src={image} alt="image"></img>
        </div>
    </div>
  )
}

export default Body1