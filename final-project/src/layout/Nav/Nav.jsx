// Import NavCss...........................
import './Nav.css';

// Import Router Link...........................
import { Link, NavLink } from 'react-router-dom';

// Import Logo...........................
import Logo from '../../assets/logo.png';

// Import NavData...........................
import { navLinks, navRight } from '../../data/data';

// Import Menu Icons...........................
import { VscMenu } from 'react-icons/vsc';
import { GrClose } from 'react-icons/gr';

// Import Use State...........................
import { useState } from 'react';

const Nav = (props) => {
  
  // Use State For NavLinks Show And Hide..................
  const [isNavLinksShowing, setIsNavLinksShowing] = useState(false);
  
  
  // Window Scroll Nav-Links Effects.............
  if(innerWidth < 1024){
    window.addEventListener('scroll', () =>{
      document.querySelector('.nav-links').classList.add('navLinksHide')
      setIsNavLinksShowing(false);
    })
  };
  window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('navShadow', window.scrollY > 0);
    setIsNavLinksShowing(false);
  });

  
  return (
    <nav>
      <div className="container nav-container">
        {/* Logo */}
        <Link to={'/'} className='logo'>
          <img src={Logo} alt="Logo" />
        </Link>
        {/* NavLink */}
        <ul className={`nav-links ${isNavLinksShowing ? 'navLinksShow' : 'navLinksHide'}`}>
          {navLinks.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path} className={({isActive})=>{
                  isActive ? 'active' : ''
                }}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
        {/* NavRight */}
        <div className="nav-right">
          {navRight.managements.map((item, index) => {
            return (
              <Link
                key={index}
                // target="_blank"
                className="managenent-icons"
                to={item.link}
              >
                <item.icon />
              </Link>
            );
          })}
        </div>
        <button className="menu-button" onClick={()=>{
          setIsNavLinksShowing(!isNavLinksShowing)
        }}>
          {
            !isNavLinksShowing ? <VscMenu /> : <GrClose />
          }
        </button>
      </div>
    </nav>
  );
};

export default Nav;
