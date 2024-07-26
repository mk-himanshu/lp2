import React from 'react'
import img1 from "../images/fi_5999067.png"
import img2 from "../images/fi_887251.png"
import img3 from "../images/fi_4900942.png"
import img4 from "../images/Photo.png"

const Body3 = () => {
  return (
    <div className='container3'>
        <div className='services'>
            <p><span>OUR SERVICES</span></p>
            <h2>How Can We Help you?</h2>
        </div>
        <div className='main'>
            <div className='serv ser'>
                <img src={img1} alt='logo'></img>
                <p><span>Driving School</span></p>
            </div>
            <div className='serv'>
                <img src={img2} alt='logo'></img>
                <p>Book Driving Instructions</p>
            </div>
            <div className='serv'>
                <img src={img3} alt='logo'></img>
                <p>International Drivers</p>
            </div>
            <div className='serv'>
                <img src={img2} alt='logo'></img>
                <p>Car/Bike Wash Near me</p>
            </div>
        </div>
        <div className='main2'>
            <div className='t2'>
                 <h1>Top Rated Driving Schools Nearby</h1>
                 <p>
                    Discover the convenience of finding highly rated drivimg
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged  
                 </p>
            </div>
            <div className='im'>
                <img src={img4} alt='image'></img>
            </div>
        </div>
    </div>
  )
}

export default Body3