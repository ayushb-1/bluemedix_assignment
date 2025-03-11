import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://fakestoreapi.com/products', data);
      console.log('Product added (simulated):', response.data);
      setSuccessMessage('Product added successfully!');
      setTimeout(() => {
        navigate('/products');
      }, 3000);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="w-[70rem] flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-[#535bf2] text-2xl text-center mb-4">Add New Product</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <p className="text-red-500 text-xs italic">{errors.title.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            placeholder="Price"
            {...register("price", { required: "Price is required" })}
          />
          {errors.price && <p className="text-red-500 text-xs italic">{errors.price.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Description"
            {...register("description", { required: "Description is required" })}
          />
          {errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="text"
            placeholder="Image URL"
            {...register("image", { required: "Image URL is required" })}
          />
          {errors.image && <p className="text-red-500 text-xs italic">{errors.image.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            {...register("category", { required: "Category is required" })}
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
          {errors.category && <p className="text-red-500 text-xs italic">{errors.category.message}</p>}
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-[#535bf2] cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Add Product
          </button>
        </div>
        {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
      </form>
    </div>
  );
};

export default AddProduct;
