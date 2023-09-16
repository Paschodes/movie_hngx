import React from 'react'
import './Footer.css'
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_icons'>
            <AiFillFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
            <AiFillYoutube />
        </div>
        <div className='footer_divs'>
            <p>Condition of use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>
        <p className='footer_para'>© 2023 MovieBox by Paschodes </p>
    </div>
  )
}

export default Footer;