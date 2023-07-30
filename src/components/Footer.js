import "./footerStyles.css"

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin,  } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome  size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    <div>
                    <p>No 1 Maroko Ajah Lagos</p>
                    </div>
                </div>
                <div className="phone">
                <h4>
                <FaPhone  size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                  +234 816 782 1616
                </h4>
                
                </div>
                <div className="phone">
                <h4>
                <FaMailBulk  size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                  johnpaulnedolisa@gmail.com
                </h4>
                
                </div>
            </div>
            <div className="right">
              <h4>About the company</h4>
              <p>This is me Johnpaul Nedolisa. CEO & Founder of JPTECH. I enjoy discussing new projects and design challenges.</p>
              <div className="social">
              <FaFacebook  size={30} style={{ color: "#fff", marginRight: "1rem" }} />
              <FaTwitter  size={30} style={{ color: "#fff", marginRight: "1rem" }} />
              <FaLinkedin  size={30} style={{ color: "#fff", marginRight: "1rem" }} />
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default footer
