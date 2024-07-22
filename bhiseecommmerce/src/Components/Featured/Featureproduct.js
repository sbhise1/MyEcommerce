import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from '../../Context/Context';
import "./Featureproduct.css"
const Featureproduct = () => {
  const { data, error } = useContext(MyContext);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    if (data) {
      const filtered = data.filter(product => product.id >= 1 && product.id <= 4);
      setFeaturedProducts(filtered);
    }
  }, [data]); // Trigger when data changes

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  //console.log(featuredProducts); // Logging filtered products for verification

  return (
    <div className='featureproduct'>
      <div>
        <h1>Feature Products</h1>
        </div>
        <div className='productcontianer'>
      {featuredProducts && (
        featuredProducts.map((item) => (
          <div key={item.id} className="product-item">
            <div className="product-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="product-details">
              <p>{item.title.length >= 20 ? `${item.title.substring(0, 20)}...`:item.title}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
            </div>
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default Featureproduct;
