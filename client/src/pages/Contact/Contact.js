import React, { useState } from 'react'
import "./Contact.css"
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs"
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';
import { useTheme } from '../../context/ThemeContext';

function Contact() {
  const [theme] = useTheme();
  const isDarkTheme = theme === 'dark'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseUrl = process.env.REACT_APP_BASE_API_URL;


    try {
      const res = await fetch(`${baseUrl}/mail/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      console.log(result);
      alert('Email sent successfully!')
    } catch(err) {
      alert('Failed to send email')
    }
  }

  return (
    <div className=" contact" id="contactUs">
        <div className="card card0 border-0" id={theme}>
          <div className="row">
            <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-6 col-sm-12">
              <Rotate>
                <div className="container d-flex card border-0 px-4 py-5"  style={{ background: isDarkTheme ?  '#1e1e2c' : "#fff", color: isDarkTheme ?  '#fff' : "#1e1e2c"}}>
                  <div className="row">
                    <div>
                      <div>
                        <h6>
                          Contact With:
                          <BsLinkedin color="blue" size={30} className="ms-2" />
                          <BsGithub color="black" size={30} className="ms-2" />
                          <BsFacebook color="blue" size={30} className="ms-2" />
                        </h6>
                      </div>

                      <div className="row mb-4 m-auto align-items-center">
                        <div className="col">
                            <hr className="" />
                        </div>
                        <div className="col-auto">
                            <small className="or">OR</small>
                        </div>
                        <div className="col">
                            <hr className="" />
                        </div>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <div className="row px-3">
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your Name"
                            className="mb-3"
                            style={{ background: isDarkTheme ?  '#1e1e2c' : "#fff", color: isDarkTheme ?  '#fff' : "#1e1e2c"}}
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="row px-3">
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email Address"
                            className="mb-3"
                            style={{ background: isDarkTheme ?  '#1e1e2c' : "#fff", color: isDarkTheme ?  '#fff' : "#1e1e2c"}}
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="row px-3">
                          <textarea
                            name="message"
                            rows={5}
                            placeholder="Write your message"
                            className="mb-3"
                            style={{ background: isDarkTheme ?  '#1e1e2c' : "#fff", color: isDarkTheme ?  '#fff' : "#1e1e2c"}}
                            value={formData.message}
                            onChange={handleChange}                    
                          />
                        </div>
                        <div className="row px-3">
                          <button className="button" type='submit'>
                            SEND MESSAGE
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact
