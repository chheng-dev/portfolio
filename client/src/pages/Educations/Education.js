import React from 'react'
import "./Education.css"
import HeaderLine from '../../components/HeaderLine/HeaderLine'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {MdSchool} from "react-icons/md"
import { useTheme } from '../../context/ThemeContext';


function Education() {
  const [theme] = useTheme();
  const isDarkTheme = theme === 'dark'

  return (
    <div className='education' id='education'> 
      <HeaderLine  title="Education Details" />

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: isDarkTheme ? '#333' : 'white', color: isDarkTheme ? 'white' : '#1e1e2c' }}
          contentArrowStyle={{ borderRight: `7px solid ${isDarkTheme ? '#333' : '#fff'}` }}
          date="2017 - 2021"
          iconStyle={{background: '#138781'}}
          icon={<MdSchool style={{ color: "#fff" }} />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor Degree</h3>
          <h4 className="vertical-timeline-element-subtitle">RUPP</h4>
          <p>
            Graduated the BA of computer science at RUPP.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: isDarkTheme ? '#333' : 'white', color: isDarkTheme ? 'white' : '#1e1e2c' }}
          contentArrowStyle={{ borderRight: `7px solid ${isDarkTheme ? '#333' : '#fff'}` }}
          date="2012 - 2017"
          iconStyle={{ background: isDarkTheme ? '#138781' : '#138781'}}
          icon={<MdSchool style={{ color: "#fff" }} />}
        >
          <h3 className="vertical-timeline-element-title">Hight School</h3>
          <p>
            High school certificate Jayavaraman 7 high school
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Education
