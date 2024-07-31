import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../Context/Context';
import './SingleProduct.css';

const SingleProduct = () => {
  const { productId } = useParams();
  const { data, error, CartHandler } = useContext(MyContext);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data.length) {
    return <div>Loading...</div>;
  }

  const product = data.find(item => item.id === parseInt(productId));
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="single-product">
      <div className="single-product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="single-product-buttons">
        <button className="cart-btn">Buy Now</button>
        <button className="cart-btn" onClick={() => CartHandler(product)}>Add To Cart</button>
      </div>
      <div className="single-product-details">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
