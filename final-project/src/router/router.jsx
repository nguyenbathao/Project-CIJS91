import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Import Pages..................................................
// import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Nav from '../layout/Nav/Nav';
import Footer from '../layout/Footer/Footer';
import Page from '../pages/Page/Page';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import PageCart from '../pages/PageCart/PageCart';
import BookStore from '../pages/BookStore/BookStore';
import Home from '../layout/Home/Home';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/store" element={<Page />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/pagecart" element={<PageCart />} />
        <Route path="/bookstore" element={<BookStore />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
