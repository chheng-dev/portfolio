import React, { useEffect, useState } from 'react'
import Home from '../../pages/Home/Home'
import {AiOutlineDoubleLeft, AiOutlineDoubleRight, AiTwotoneClockCircle} from "react-icons/ai"

import "./Layout.css"
import Menu from '../Menus/Menus';

const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

function Layout() {
  const [toggle, setToggle] = useState(true);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return ()=> clearInterval(intervalId)
  }, [])

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='sidebar-section'>
      <div className={toggle ? 'sidebar-toggle sidebar' : 'sidebar'}>
        <div className='sidebar-toggle-icons'>
          <p onClick={handleToggle}>
            {
              toggle ? <AiOutlineDoubleLeft size={30} /> : <AiOutlineDoubleRight size={30} />
            }
          </p>
        </div>
        <Menu toggle={toggle} />
        {
          toggle ? (
            <div className='nav-items'>
              <div className='nav-item'>
                <div className='nav-link'>
                  <div className='clock'>
                    <AiTwotoneClockCircle size={20} />
                    <h5>{currentTime}</h5>
                  </div>
                </div>
              </div>
            </div>
          ) : ''
        }
      </div>
      <div className='w-100'>
        <Home />
      </div>
    </div>
  )
}

export default Layout
