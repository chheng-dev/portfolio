import React, { Fragment, useState, useEffect } from 'react'
import "./Techstack.css"
import {TechstackList} from "../../utils/TechstackList";
import HeaderLine from '../../components/HeaderLine/HeaderLine';
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';
import { useTheme } from '../../context/ThemeContext';

function Techstack() {
  const [theme] = useTheme();

  return (
    <Fragment>
      <div className='techstack' id='techStack'>
        <div className='container'>
          <RubberBand>
            <HeaderLine title="Technologies Stack" />
            <p className='pb-3 text-center'>👉 including programming Languages, frameworks, database, front-end and back-end tools, and APIs</p>
          </RubberBand>
        </div>
        <div className='container mx-auto'>
          <div className='row'>
            {
              TechstackList.map((tech) => (
                <Fade bottom key={tech._id} duration={500}>
                  <div className='col-xs-12 col-md-6 col-lg-4 col-xl-3' key={tech._id}>
                    <div className='card m-2' id={theme}>
                      <div className='card-content'>
                        <div className={`card-body`}>
                          <div className='media d-flex justify-content-center'>
                            <div className='align-self-center'>
                              <tech.icon className="tech-icon" />
                            </div>
                            <div className='media-body'>
                              <h5>{tech.name}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Techstack
