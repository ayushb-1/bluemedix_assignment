import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="ml-56 flex-1 p-4 flex justify-center items-center flex-col gap-4">
      <h1 className="mb-4 text-black text-5xl">Welcome to BlueMedix</h1>
      <Link to="/add-user" className="py-2 px-4 bg-[#535bf2] text-white rounded-lg hover:bg-blue-700 w-40 text-center">
        Add User
      </Link>
      <Link to="/add-product" className="py-2 px-4 bg-[#535bf2] text-white rounded-lg hover:bg-blue-700 w-40 text-center">
        Add Product
      </Link>
    </div>
  );
};

export default Home;
