import './Product.css';

import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../../context/CartContext';

function Product({ product }) {
  const { addToCart } = useContext(CartContext);

  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className="borders">
        <div className="img-details">
          <div className="details">
            <img className="img" src={image} alt="" />
          </div>
          <div className="button-container">
            <button onClick={() => addToCart(product, id)}>
              <div className="icon-container">
                <BsPlus className="icon" />
              </div>
            </button>
            <Link to={`/product/${id}`} className="eye-container">
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>

      {/* category & title & price */}
      <div>
        <div className="category">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="title">{title}</h2>
        </Link>
        <div className="price">$ {price}</div>
      </div>
    </div>
  );
}

export default Product;
