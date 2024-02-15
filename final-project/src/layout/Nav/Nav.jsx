// Import NavCss...........................
import './Nav.css';

// Import Router Link...........................
import { Link, NavLink } from 'react-router-dom';

// Import Logo...........................
import Logo from '../../assets/logo2.png';

// Import NavData...........................
import { navLinks, navRight } from '../../data/dataBookStore';

// Import Menu Icons...........................
import { VscMenu } from 'react-icons/vsc';
import { GrClose } from 'react-icons/gr';

// Import Use State...........................
import { useContext, useEffect, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import CartDrawer from '../../components/CartDrawer';
import { CartContext } from '../../context/CartContext';


const Nav = (props) => {
  // Use State For NavLinks Show And Hide..................
  const [isNavLinksShowing, setIsNavLinksShowing] = useState(false);

  const { itemAmount } = useContext(CartContext);

  // Window Scroll Nav-Links Effects.............
  if (innerWidth < 1024) {
    window.addEventListener('scroll', () => {
      document.querySelector('.nav-links').classList.add('navLinksHide');
      setIsNavLinksShowing(false);
    });
  }
  window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('navShadow', window.scrollY > 0);
    setIsNavLinksShowing(false);
  });


  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () =>{
      setSticky(window.scrollY > 200);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [open, setOpen] = useState();

  return (
    <nav className={`${sticky ? "sticky" : ""}`}>
      <div className="container nav-container">
        {/* Logo */}
        <Link to={'/'} className="logo">
          <img src={Logo} alt="Logo" />
        </Link>
        {/* NavLink */}
        <ul className={`nav-links ${isNavLinksShowing ? 'navLinksShow' : 'navLinksHide'}`}>
          {navLinks.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => {
                    isActive ? 'active' : '';
                  }}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* NavRight */}
        <div className="nav-right">
          <Link className="managenent-icons">
            <FiUser style={{ fontSize: '1.5rem', lineHeight: '2rem' }} />
          </Link>
          <div
            style={{ cursor: 'pointer', display: 'flex', position: 'relative', maxWidth: '50px' }}
          >
            <BsBag
              onClick={() => {
                setOpen(true);
              }}
              style={{ fontSize: '1.5rem', lineHeight: '2rem' }}
            />
            <div
              style={{
                display: 'flex',
                position: 'absolute',
                right: '-0.5rem',
                bottom: '-0.5rem',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '9999px',
                color: '#ffffff',
                backgroundColor: '#EF4444',
                width: '18px',
                height: '18px',
              }}
            >
              {itemAmount}
            </div>
          </div>

          <CartDrawer open={open} setState={setOpen} />
        </div>
        <button
          className="menu-button"
          onClick={() => {
            setIsNavLinksShowing(!isNavLinksShowing);
          }}
        >
          {!isNavLinksShowing ? <VscMenu /> : <GrClose />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
