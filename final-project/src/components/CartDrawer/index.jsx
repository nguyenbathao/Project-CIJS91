import './index.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CartItem from '../CartItem/CartItem';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function CartDrawer(props) {
  const { open, setState } = props;

  // const toggleDrawer = (open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }
  //   setState(open);
  // };

  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <Drawer
      anchor={'right'}
      open={open}
      onClose={() => {
        setState(false);
      }}
    >
      <Box sx={{ width: 700, padding: 2 }} role="presentation">
        <div className="shopping-text">
          Shopping Bag ({itemAmount})
          {/* <IoMdArrowForward className="arrows-icon" /> */}
        </div>
        <div style={{ minHeight: 700 }}>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div className="total-trash-container">
          {/*Total */}
          <div>
            <span>Total: </span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div onClick={clearCart} className="trash-icon">
            <FiTrash2 />
          </div>
        </div>
        <Link 
        style={{
          marginTop: '1rem',
          display: 'flex', 
          padding: '1rem', 
          justifyContent: 'center', 
          alignItems: 'center', 
          width: '100%', 
          fontWeight: 500,
          backgroundColor: '#e4eef0',
          color: 'black'
        }}>
          View Cart
        </Link>
        <Link
        style={{
          marginTop: '1rem',
          display: 'flex', 
          padding: '1rem', 
          justifyContent: 'center', 
          alignItems: 'center', 
          width: '100%', 
          fontWeight: 500,
          backgroundColor: '#3a3d3d',
          color: 'white'
        }}>
          Check Out
        </Link>
      </Box>
    </Drawer>
  );
}