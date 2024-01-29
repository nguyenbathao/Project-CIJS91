import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Import Pages..................................................
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Nav from '../layout/Nav/Nav';
import Footer from '../layout/Footer/Footer';



function Router() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default Router