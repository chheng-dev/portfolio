import React from 'react'
import "./WorkExp.css"
import HeaderLine from '../../components/HeaderLine/HeaderLine'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { SiReact } from 'react-icons/si'
import { useTheme } from '../../context/ThemeContext';

const WorkExp = () => {
  const [theme] = useTheme();
  const isDarkTheme = theme === 'dark'

  return (
    <div className='work-experience' id='work'>
      <div className='container'>
        <HeaderLine title="Work Expserience" />

        <VerticalTimeline lineColor='#1e1e2c'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: isDarkTheme ? '#333' : 'white', color: isDarkTheme ? 'white' : '#1e1e2c' }}
            contentArrowStyle={{ borderRight: `7px solid ${isDarkTheme ? '#333' : '#fff'}` }}
            date="2022 - present"
            iconStyle={{background: '#138781'}}
            icon={<SiReact style={{ color: "#fff" }} />}
          >
            <h3 className="vertical-timeline-element-title">Bookmebus</h3>
            <p>
              VDEUK, I was involved in various aspects of web development, including both frontend and backend tasks. I worked on logistics-related web applications and managed e-commerce and merchandising platforms. My role included developing and maintaining websites, integrating backend systems, and supporting e-commerce functionalities.           
            </p>
            
            <p>During my time at VTENH, I focused on e-commerce and transportation solutions. I contributed to developing and maintaining e-commerce platforms and optimizing logistics systems for transit. My responsibilities included enhancing user experience, integrating payment systems, and ensuring efficient transportation management.</p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: isDarkTheme ? '#333' : 'white', color: isDarkTheme ? 'white' : '#1e1e2c' }}
            contentArrowStyle={{ borderRight: `7px solid ${isDarkTheme ? '#333' : '#fff'}` }}
            date="2020 - 2021"
            iconStyle={{background: '#138781'}}
            icon={<SiReact style={{ color: "#fff" }} />}
          >
            <h3 className="vertical-timeline-element-title">Khmer GB Solution</h3>
            <p>
              As a Web Developer at Web Media News, I focused on designing and implementing features for news websites. I worked on building responsive layouts, optimizing user interfaces, and ensuring seamless integration of content management systems. My role involved collaborating with the team to enhance the overall user experience and improve site performance.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: isDarkTheme ? '#333' : 'white', color: isDarkTheme ? 'white' : '#1e1e2c' }}
            contentArrowStyle={{ borderRight: `7px solid ${isDarkTheme ? '#333' : '#fff'}` }}
            date="2019 - 2020"
            iconStyle={{background: '#138781'}}
            icon={<SiReact style={{ color: "#fff" }} />}
          >
            <h3 className="vertical-timeline-element-title">IT Support of Panda Solution</h3>
            <p>
              At Panda Solution, I provided comprehensive IT support, focusing on website maintenance and point-of-sale (POS) systems. My responsibilities included troubleshooting technical issues, ensuring website functionality, and optimizing POS systems for smooth daily operations. This role honed my problem-solving skills and gave me a solid foundation in tech support and system management.
            </p>
          </VerticalTimelineElement>
        
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default WorkExp
