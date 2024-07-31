import React, { useContext } from 'react';
import { MyContext } from '../Context/Context';
import './Cart.css';

const Cart = () => {
  const { cartData, RemoveFromCart } = useContext(MyContext);

  if (!cartData.length) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className="maincart">

      <div className='cart'>
        {cartData.map((product) => (
          <>
            <div key={product.id} className="cart-item">
              <div className="cart-item-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className='cart-item-details'>
                <h3>{product.title}</h3>
                <h3>{product.description.length >= 15 ? `${product.description.substring(0, 15)}...` : `${product.description}`}</h3>
                <p>Price: ${product.price}</p>
                <button className='remove-btn' onClick={() => RemoveFromCart(product.id)}>Remove</button>
              </div>
            {/* <hr /> */}
            </div>
          </>
        ))}
    </div>
        <div className="price-details">
          <div>
            <h3>Price Details</h3>
          </div>
          <div>
            <div><p>price</p></div>
            <div><p>Discount</p></div>
            <div><p>Delivery Charges</p></div>
            <div><p>Secured Packaging Fee</p></div>
          </div>
          <div><p>Total Amount</p></div>
          <div><p>You will save ₹8,543 on this order</p></div>
        </div>
      </div>
  );
};

export default Cart;
