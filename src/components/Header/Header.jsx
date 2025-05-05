import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../../assests/logo.png';
import Bars from '../../assests/bars.png';
import { Link } from 'react-scroll';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpened(false); // Reset menu state on resize to desktop
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />

      {mobile && !menuOpened ? (
        <div
          className="menu-icon"
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bars} alt="menu" className="bars" />
        </div>
      ) : (
        <ul className={`header-menu ${mobile ? 'mobile-menu' : ''}`}>
          {mobile && (
            <li className="menu-close" onClick={() => setMenuOpened(false)}>
              ✕
            </li>
          )}
          {['home', 'programs', 'reasons', 'plans', 'testimonials'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                onClick={() => setMenuOpened(false)}
                activeClass="active"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
