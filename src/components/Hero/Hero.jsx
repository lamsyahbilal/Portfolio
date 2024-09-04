import React from 'react';
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt=""/>
            <h1><span>I'm Bilal LAMSYAH #</span>, Full stack Developer based in Moroco</h1>
            <p>I am a Full stack developer from Rabat, Moroco with 4 years of experience as a freelencer</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    );
}

export default Hero;
