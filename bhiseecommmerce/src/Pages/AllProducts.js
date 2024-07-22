import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../Context/Context';
import './allproducts.css';

const Products = () => {
  const { data, error } = useContext(MyContext);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Allproducts'>
      {data.map((item) => (
        <div key={item.id} className="procontainer">
          <Link to={`/product/${item.id}`}>
            <div>
              <img src={item.image} alt={item.title} />
            </div>
            <div className='Prodetails'>
              <div>{item.category}</div>
              <div>{item.title.length >= 15 ? `${item.title.substring(0, 10)}...` : item.title}</div>
              <div>${item.price}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
