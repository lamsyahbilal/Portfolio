// import React from 'react';
import React, { useState } from "react";
import './Navbar.css'
import logo from '../../assets/logo.svg'
import nav_underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
const Navebar = () => {
    const [menu,setMenu]= useState("home");
    return (
        <div className='navbar'> 
            <img src={logo} alt=""/>
            <ul className="nav-menu">
                <li><AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={nav_underline} alt=''/>:<></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"? <img src={nav_underline} alt=''/>:<></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>setMenu("service")}>Services</p></AnchorLink>{menu==="service"? <img src={nav_underline} alt=''/>:<></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"? <img src={nav_underline} alt=''/>:<></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <img src={nav_underline} alt=''/>:<></>}</li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div>
    )
}

export default Navebar;
