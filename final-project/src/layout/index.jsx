import { Children } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Nav from './Nav/Nav';

const Layout = (props) => {
  return (
    <>
      <Nav/>
      <Header/>

      {props.children}

      <Footer />
    </>
  );
};

export default Layout;
