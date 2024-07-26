import React from 'react'
import logo from "../images/upride logo (500 × 140 px) 1.png"
import dial from "../images/Group 6.png"
import login from "../images/Ellipse 4.png"

const Header = () => {
  return (
    <div>
        <div className='nav1'>
            <div className='logo'>
                <img src={logo} alt='logg'></img>
            </div>
            <div className='contact'>
               <img src={dial} alt='dialpad'></img>
               <p>contact : </p>
               <h6>+91 9876543200</h6>
            </div>
            <div className='xyz'>
                 <p>are you a driving school?</p>
            </div>
            <div className='user'>
                <div className='login'>
                    <img src={login} alt='login'></img>
                    <h5>Hello himanshu</h5>
                </div>
            </div>

        </div>
        <div className='nav2'>
            <p>kerokodi</p>
            <p>Banaswadi</p>
            <p>kormangla</p>
            <p> MG road</p>
            <p>jp nagar</p>
            <p>jaynagar </p>
            <p>Vijaynagar</p>
            <p>Yahlanka</p>
            <p>Rajajinagar</p>
            <p>yashwantpur</p>
            <p>Rajeshwari</p>
        </div>
    </div>
  )
}

export default Header