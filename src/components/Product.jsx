import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex-1 p-4">
      <h1 className="text-lg mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <Link key={product.id} to={`/products/${product.id}`} className="bg-white rounded-lg shadow-md p-4">
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain rounded-md mb-4" />
            <h2 className="text-lg text-gray-600 font-bold mb-2">{truncateDescription(product.title,20)}</h2>
            <p className="text-gray-600 mb-2">Price: ${product.price}</p>
            <p className="text-gray-600">{truncateDescription(product.description, 50)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
