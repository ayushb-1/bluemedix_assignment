import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../providers/UserContext';


const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const { users, setUsers } = useContext(UserContext);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }


  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://fakestoreapi.com/users/${id}`);
      console.log('User deleted', response.data);
      setUsers(users.filter(u => u.id !== parseInt(id)));
      navigate('/users'); 
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    try {
      const updatedUser = {
        username: username,
        email: email
      };

      const response = await axios.put(`https://fakestoreapi.com/users/${id}`, updatedUser);
      console.log('User updated (simulated)', response.data);

      setUsers(users.map(u => (u.id === parseInt(id) ? { ...u, username: username, email: email } : u)));
      navigate('/users'); 
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  return (
    <>
        {isEditing ? (
            <div className="w-[75rem] flex-1 p-4 flex flex-col h-screen ">
                <h1 className="text-5xl text-black mb-4 text-center">User Details</h1>
                <label className="block text-gray-600 mb-2">
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                </label>
                <label className="block text-gray-600 mb-2">
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                </label>
                <button
                    className="bg-[#535bf2] text-white rounded-lg py-2 px-4 hover:bg-blue-700 cursor-pointer mt-3"
                    onClick={handleUpdate}
                >
                    Update
                </button>
          </div>
        ): (
            <div className="w-[75rem] flex-1 p-4 flex flex-col h-screen ">
                <h1 className="text-5xl text-black mb-4 text-center">User Details</h1>
                <div className="flex-1 mt-10">
                    <div className="mb-5">
                        <FaUser size={50} color="#535bf2" />
                    </div>
                    <p className="text-gray-600 mb-2">Id: {user.id}</p>
                    <p className="text-gray-600 mb-2">Email: {user.email}</p>
                    <p className="text-gray-600">Password: {user.password}</p>
                </div>
                <div className="flex justify-between gap-4">
                    <button className="bg-[#f2535b] text-white rounded-lg py-2 px-4 hover:bg-red-700 cursor-pointer" onClick={handleDelete} >Delete</button>
                    <button className="bg-[#535bf2] text-white rounded-lg py-2 px-4 hover:bg-blue-700 cursor-pointer" onClick={handleEdit}>Edit</button>
                </div>
            </div>
        )}
    </>
  );
};

export default UserDetails;
