import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../Context/Context';
import "./SingleProduct.css";
const SingleProduct = () => {
  const { productId } = useParams();
  const { data, error } = useContext(MyContext);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const product = data.find(item => item.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="single-product">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default SingleProduct;
