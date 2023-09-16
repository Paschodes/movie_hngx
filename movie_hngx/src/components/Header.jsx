import React from 'react'

import idmb from './../assets/idmb.svg'
import tv from './../assets/tv.svg'
import menu from './../assets/menu.svg'
import tomato from './../assets/tomato.svg'
import { BiSearchAlt } from 'react-icons/bi'
import { BsPlayCircleFill } from 'react-icons/bs'


const Header = ({movies}) => {
    
    
  return (
        <header
        //  style={!loading ? {} : backgroundStyle}
        
         className='home_header'
        >
            <nav className='home_nav'>
                <div className='nav_tv'>
                    <img src={tv} alt="tv logo" className='nav_svg'/>
                    <p>Movie Box</p>
                </div>
                <div className='nav_input'>
                    <input type="text" placeholder='What do you want to watch?'/>
                    <BiSearchAlt style={{cursor: 'pointer'}}/>
                </div>
                <div className='nav_drop'>
                    <a href="/">Sign in</a>
                    <img src={menu} alt="" className='nav_svg'/>
                </div>
            </nav>

            <div className='header_div'>
                <h1>John Wick 3 : Parabellum</h1>
                <div className='header_rating_div'>
                    <div className='header_rate'>
                        <img src={idmb} alt="rating" />
                        <span>860/100</span>
                    </div>
                    <div className='header_rate'>
                        <img src={tomato} alt="rating" />
                        <span>97%</span>
                    </div>
                </div>
                <p>John Wick is on the run after killing a member of the international assassins' guild, 
                    and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                </p>
                <button className='header_btn'><BsPlayCircleFill />WATCH TRAILER</button>
            </div>
        </header>
  )
}

export default Header;
