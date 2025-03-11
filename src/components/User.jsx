import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../providers/UserContext';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const User = () => {
  const { users } = useContext(UserContext);


  return (
    <div className="flex-1 p-4 ml-10">
      <h1 className="text-lg mb-4">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map(user => (
           <Link key={user.id} to={`/users/${user.id}`} className="bg-white rounded-lg shadow-md p-4">
           <div className="flex justify-center mb-2">
             <FaUser size={40} color="#535bf2" />
           </div>
           <p className="text-gray-600 mb-2">Id: {user.id}</p>
           <p className="text-gray-600 mb-2">UserName: {user.username}</p>
           <p className="text-gray-600 mb-2">Email: {user.email}</p>
           {/* <p className="text-gray-600">Password: ********</p> */}
         </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
