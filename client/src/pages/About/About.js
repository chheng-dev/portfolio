import React from 'react'
import "./About.css"
import Jump from 'react-reveal/Jump';

const About = () => {
  return (
    <Jump>
      <div className='about' id='about'>
        <div className='row'>
          <div className='col-xs-12 col-md-12 col-lg-5  col-xl-4 about-img'>
            <img src='https://scontent.fpnh19-1.fna.fbcdn.net/v/t39.30808-1/455312652_1740952670047055_4047392574543079880_n.jpg?stp=dst-jpg_p480x480&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEockFyPOLcHGx6LFDgax_41jaZD03HNWHWNpkPTcc1YVFi-ABExmHIYUYEUD90NGcp-jd-6uMC5QvXXj7VRKKt&_nc_ohc=zrrBH60zRSAQ7kNvgHck_Tb&_nc_ht=scontent.fpnh19-1.fna&oh=00_AYBCfCWw-CE1LQRyIsrsQFhe-1lo3Y9djL6WomcrrWTEgQ&oe=66C4F35A' alt='profile pic' />
          </div>
          <div className='col-xs-12 col-md-12 col-lg-7 col-xl-8 about-content'>
            <h1>About me</h1>
            <p>
            Hello! I'm a 26-year-old web developer with a passion for creating dynamic and user-friendly websites and applications. My journey in web development has equipped me with a solid understanding of modern technologies and a keen eye for detail.
            I specialize in working with frameworks like Rails and React, focusing on building clean, efficient code and adhering to MVC architecture principles. I have experience integrating and customizing e-commerce platforms like Spree and enjoy solving complex problems, whether it’s handling jQuery for select options or managing component structures in React.
            </p>
          </div>
        </div>
      </div>
    </Jump>
  )
}

export default About
