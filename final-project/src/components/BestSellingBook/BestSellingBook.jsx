import './BestSellingBook.css';

import TititleTypeTwo from '../UI/TititleTypeTwo/TititleTypeTwo';

import TreeShape from '../../assets/treeShape.png';

import { sellingBooksData } from '../../data/dataBookStore';

import { Link } from 'react-router-dom';

import { BsArrowRight } from 'react-icons/bs';

function BestSellingBook() {
  return (
    <section className="BestSellingBook">
      <div className="treeShape">
        <img src={TreeShape} alt="" />
      </div>

      <div className="container bestselling-container">
        {sellingBooksData.map(({ img, infoTitle, infoTitleTop, desc, price, shopbtnLink }) => {
          return (
            <div className="container bestselling-container">
              <div className="selling-book-left">
                <img src={img} alt="" />
              </div>
              <div className="selling-book-right">
                <TititleTypeTwo className="sellingBookTitle" Title={'Best Selling Book'} />
                <div>
                  <small>{infoTitleTop}</small>
                </div>
                <h3>{infoTitle}</h3>
                <p>{desc}</p>
                <h5>
                  <span>{price}</span>
                </h5>
                <Link to={shopbtnLink} className="btn">
                  <small>Shop it now</small>
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BestSellingBook;
