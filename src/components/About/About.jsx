import React from 'react';
import './About.css'
import profile_img from '../../assets/profile_img.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                    <div className="about-left">
                        <img src={profile_img} alt="" />
                    </div>
                
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Full stack developer with 4 years of experience, I specialize in building robust and dynamic web applications from end to end. My expertise spans across both front-end and back-end technologies, including HTML, CSS, JavaScript, and popular frameworks like React and Angular for the front end, and Node.js and Django for the back end. I am skilled in managing databases such as MySQL and MongoDB, and proficient in deploying applications using tools like Docker and CI/CD pipelines. I am passionate about creating seamless, user-friendly experiences and thrive on solving complex problems through innovative solutions. </p>
                        <p>I am passionate about programming and excel in crafting dynamic web applications from front to back. My skill set includes front-end technologies like HTML, CSS, and JavaScript, along with frameworks such as React and Angular. On the back end, I work with Node.js and Django, and I manage databases including MySQL and MongoDB. I am also adept at deploying applications using tools like Docker and CI/CD pipelines. Driven by a love for solving complex challenges, I strive to create seamless, user-friendly experiences through innovative solutions.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML5, CSS3, JavaScript</p><hr style={{width:"80%"}} />
                        </div>
                        <div className="about-skill">
                            <p>Frameworks/Libraries: React, Laravel</p><hr style={{width:"50%"}} />
                        </div>
                        <div className="about-skill">
                            <p>Server-Side Languages: Node.js,PHP</p><hr style={{width:"60%"}} />
                        </div>
                        <div className="about-skill">
                            <p>SQL: MySQL, PostgreSQL</p><hr style={{width:"70%"}} />
                        </div>
                        <div className="about-skill">
                            <p>Version Control: Git, GitHub</p><hr style={{width:"50%"}} />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achivement">
                    <h1>4+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>20+</h1>
                    <p>YPROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
        
    );
}

export default About;
