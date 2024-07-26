import React from 'react'
import img1 from "../images/rating.png"
import img2 from "../images/target.png"
import img3 from "../images/Polygon 3.png"

const Body2 = () => {
  return (
    <div>
        <div className='buttons'>
            <button className='book'>BOOK DRIVING SCHOOL</button>
            <button className='hire'>HIRE INSTRUCTIONS</button>

        </div>
        <div className='feature'>
            <div className='first'>
                <img src={img1} alt='card'></img>
                <p>!00% customer Satisfaction </p>
            </div>
            <div className='first'>
                <img src={img2} alt='card'></img>
                <p> Safe Rodes is Our Mission</p>
            </div>
            <div className='first'>
                <img src={img3} alt='card'></img>
                <p>100% Best quality Services</p>
            </div>
        </div>
    </div>
  )
}

export default Body2