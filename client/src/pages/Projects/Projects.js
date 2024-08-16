import React from 'react'
import "./Projects.css"
import HeaderLine from '../../components/HeaderLine/HeaderLine'
import Spin from 'react-reveal/Spin';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import Slider from 'react-slick';
import { useTheme } from '../../context/ThemeContext';


function Projects() {
  const [theme] = useTheme();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '10px',
  };

  return (
    <div className='project' id='project'> 
      <div className='container'>
        <HeaderLine title="TOP RECENT PROJECTS" />
        <p className='pb-3 text-center'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        {/* card design */}
        <div className='row' id='ads'>
          <Spin>
            <div className='col-sm-12 col-md-12 col-xl-4 mb-4'>
              <div className='card rounded' id={theme}>
                <div className='card-image'>
                  <span className='card-notify-badge'>Full Stack</span>
                  <img src='https://wallpaperswide.com/download/illustration_6-wallpaper-1366x768.jpg' alt='project1' />
                </div>
                <div className='card-image-overly m-auto mt-3'>
                  <Slider {...settings}>
                    <div className='card-detail-badge'>Node</div>
                    <div className='card-detail-badge'>Express</div>
                    <div className='card-detail-badge'>React Js</div>
                    <div className='card-detail-badge'>Mongodb</div>
                  </Slider>
                </div>
                <div className='card-body'>
                  <div className='ad-title m-auto text-center'>
                    <h5 className='text-uppercase'>Chheng Shopping Website</h5>
                  </div>
                  <a href='' className='ad-btn'>View</a>
                </div>
              </div>
            </div>

            <div className='col-sm-12 col-md-12 col-xl-4 mb-4'>
              <div className='card rounded' id={theme}>
                <div className='card-image'>
                  <span className='card-notify-badge'>Mobile App</span>
                  <img src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D' alt='project1' />
                </div>
                <div className='card-image-overly m-auto mt-3'>
                  <span className='card-detail-badge'>React Native</span>
                  <span className='card-detail-badge text-uppercase'>IOS / Andriod</span>
                </div>
                <div className='card-body'>
                  <div className='ad-title m-auto text-center'>
                    <h5 className='text-uppercase'>Chheng Coding App</h5>
                  </div>
                  <a href='' className='ad-btn'>View</a>
                </div>
              </div>
            </div>

            <div className='col-sm-12 col-md-12 col-xl-4 mb-4'>
              <div className='card rounded' id={theme}>
                <div className='card-image'>
                  <span className='card-notify-badge'>Backend</span>
                  <img src='https://www.interviewbit.com/blog/wp-content/uploads/2022/05/Full-Stack-Projects-2048x1001.png' alt='project1' />
                </div>
                <div className='card-image-overly m-auto mt-3'>
                  <span className='card-detail-badge'>Node</span>
                  <span className='card-detail-badge'>Express</span>
                  <span className='card-detail-badge'>NoSQL</span>
                </div>
                <div className='card-body'>
                  <div className='ad-title m-auto text-center'>
                    <h5 className='text-uppercase'>Chheng Job Portal</h5>
                  </div>
                  <a href='' className='ad-btn'>View</a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </div>
  )
}

export default Projects
