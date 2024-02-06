import { useNavigate } from 'react-router-dom';
import './CartItem.css';

import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';

import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CartItem({ item }) {
  const navigate = useNavigate();
  const navigateProductDetail = () => {
    navigate(`/product/${id}`, []);
  };

  const { id, title, image, price, amount } = item;

  const { removeFormCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  return (
    <div className="containers">
      <div className="cart-item-container">
        {/* image */}
        <div onClick={navigateProductDetail}>
          <img className="img" src={image} alt="" />
        </div>
        <div className="icon-containers">
          {/* title & remove icon */}
          <div className="title-containers">
            <div onClick={navigateProductDetail} className="text-cart-item">
              {title}
            </div>
            <div className="delete-btn">
              <IoMdClose onClick={() => removeFormCart(id)} className="btn-delete-cart-item" />
            </div>
          </div>
          <div className="prices">
            <div className="change-amount">
              {/*minus icon */}
              <div onClick={() => decreaseAmount(id)} className="remove-icon">
                <IoMdRemove />
              </div>
              <div className="amount-value-change">{amount}</div>
              <div onClick={() => increaseAmount(id)} className="add-change">
                <IoMdAdd />
              </div>
            </div>
            <div className="listed-price">$ {price}</div>
            <div className="total-amount">{`$ ${parseFloat(item.price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
