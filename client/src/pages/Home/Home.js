import React, { Fragment } from 'react'
import "./Home.css"
import Typewriter from "typewriter-effect"
import { useTheme } from '../../context/ThemeContext'
import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs"
import Fade from 'react-reveal/Fade';
import { MdOutlineMenu } from "react-icons/md";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { AiOutlineClose } from "react-icons/ai";
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector, FcVoicePresentation } from 'react-icons/fc'
import { Link } from 'react-scroll'
import Zoom from 'react-reveal/Zoom';


const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? "dark" : "light"));
  }

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  return (
    <div className='home-container' id='home'>
      <div className='menu'>
        <MdOutlineMenu size={30} onClick={toggleDrawer}/> 
        <h5>My Portfolio</h5>
      </div>

      <div className='theme-btn' onClick={handleTheme}>
        {
          theme === 'light' ? (<BsFillMoonStarsFill size={20}/>) : (<BsFillSunFill size={30} />)
        }
      </div>
      <div className='container home-content'>
        <Fade right>
          <div className='top-title'>
            <h2>Hi 👋 I'm a </h2>
            <h1>
              <Typewriter 
                options={{
                  strings: ["Web Developer !"],
                  autoStart: true,
                  loop: true
                }}
              />
            </h1>
          </div>
        </Fade>
        <Fade bottom>
          <div className='home-buttons'>
            <button className='btn btn-hire'>Hire Me</button>
            <button className='btn btn-cv'>My Resume</button>
          </div>
        </Fade>
      </div>

      <Drawer
          open={isOpen}
          direction='left'
          className='w-80'
          onClose={toggleDrawer}
      > 
        <div className='close-btn'>
          <AiOutlineClose size={25} onClick={toggleDrawer} className='' />
        </div>
        <div className='drawer'>
          <div className='profile'>
            <div>
              <Zoom>
                <div className='navbar-profile-pic'>
                  <img src='https://scontent.fpnh19-1.fna.fbcdn.net/v/t39.30808-1/455312652_1740952670047055_4047392574543079880_n.jpg?stp=dst-jpg_p480x480&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEockFyPOLcHGx6LFDgax_41jaZD03HNWHWNpkPTcc1YVFi-ABExmHIYUYEUD90NGcp-jd-6uMC5QvXXj7VRKKt&_nc_ohc=zrrBH60zRSAQ7kNvgHck_Tb&_nc_ht=scontent.fpnh19-1.fna&oh=00_AYBCfCWw-CE1LQRyIsrsQFhe-1lo3Y9djL6WomcrrWTEgQ&oe=66C4F35A' alt='profile pic' />
                </div>
              </Zoom>
            </div>
            <div className='profile-name'>
              <h4>Chheng</h4>
              <span>chheng@gmail.com</span>
            </div>
          </div>
          <hr />
          <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='home' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={toggleDrawer}  
                >
                  <FcHome />
                  Home
                </Link>
              </div>
            </div>

            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='about' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={toggleDrawer}  
                >
                  <FcAbout />
                  About
                </Link>
              </div>
            </div>

            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='education' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={toggleDrawer}  
                >
                  <FcReadingEbook />
                  Education
                </Link>
              </div>
            </div>

            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='techStack' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={toggleDrawer}  
                >
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>
            </div>

            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='project' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={toggleDrawer}  
                >
                  <FcVideoProjector />
                  Projects
                </Link>
              </div>
            </div>
            
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='work' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={toggleDrawer}  
                >
                  <FcPortraitMode />
                  Work Experince
                </Link>
              </div>          
            </div>

            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='contactUs' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={toggleDrawer}  
                >
                    <FcBusinessContact />
                    Contact
                </Link>
              </div>          
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Home
