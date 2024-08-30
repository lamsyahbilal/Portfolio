import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
function Footer() {
  return (
    <div className='footer'>
    <div className='footer-top'>
        <div className='footer-top-left'>
            <img src={footer_logo} alt=''/>
            <p>I am an experienced Full stack developer with 4 years of experience, I specialize in building robust and dynamic web applications from end to end.</p>
        </div>
        <div className='footer-top-right'>
            <div className='footer-email-input'>
                <img src={user_icon} alt=''/>
                <input type='email' placeholder='Enter your email'></input>  
            </div>
            <div className='footer-subscribe'>Subscribe</div>
        </div>
        </div>
        <hr/>
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>© 2023 Bilal LAMSYAH</p>
            <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    
      
    </div>
  )
}

export default Footer
