import React from 'react';
import './Footer.css';
import Logo from '../../assests/logo.png';
import Instagram from '../../assests/instagram.png';
import Linkedin from '../../assests/linkedin.png';
import Github from '../../assests/github.png';
const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
                <img src={Instagram} alt='' />
                <img src={Linkedin} alt='' />
                <img src={Github} alt='' />
            </div>
        </div>
        <div className="Logo-f">
            <img src={Logo} alt='' className='Logo' />
            
        </div>

        <div className='blur blurr-f-1'></div>
        <div className='blur blurr-f-2'></div>
    </div>
  )
}

export default Footer
