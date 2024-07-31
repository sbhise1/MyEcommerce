import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../Context/Context';
import './allproducts.css';

const Products = () => {
  const { data, error } = useContext(MyContext);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className='all-products'>
      {data.map((item) => (
        <div key={item.id} className="product-container">
          <Link to={`/product/${item.id}`}>
            <div className="product-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className='product-details'>
              <div className='product-category'>{item.category}</div>
              <div className='product-title'>{item.title.length >= 15 ? `${item.title.substring(0, 10)}...` : item.title}</div>
              <div className='product-price'>${item.price}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
