import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[75rem] flex-1 p-4 flex flex-col h-screen">
      <h1 className="text-5xl text-black mb-4 text-center">Product Details</h1>
      <div className="flex-1 mt-8">
        <img src={product.image} alt={product.title} className="w-full h-64 object-contain mb-4" />
        <h2 className="text-lg text-gray-600 font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-2">Price: ${product.price}</p>
        <p className="text-gray-600 mb-2">Category: {product.category}</p>
        <p className="text-gray-600">{product.description}</p>
      </div>
      <div className="flex justify-between gap-4">
        <button className="bg-[#f2535b] text-white rounded-lg py-2 px-4 hover:bg-red-700 cursor-pointer">Delete</button>
        <button className="bg-[#535bf2] text-white rounded-lg py-2 px-4 hover:bg-blue-700 cursor-pointer">Update</button>
      </div>
    </div>
  );
};

export default ProductDetails;
