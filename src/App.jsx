import './App.css'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'; 
import User from './components/User';
import Product from './components/Product';
import UserDetails from './components/UserDetails';
import ProductDetails from './components/ProductDetails';
import { UserProvider } from './providers/UserContext';
import AddUser from './components/AddUser';
import AddProduct from './components/AddProduct';

function App() {

  return (
    <>
      <div className="flex">
      <Sidebar />

      <div className="flex-1 ml-64">
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<User />} />
            <Route path="/users/:id" element={<UserDetails/>} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </UserProvider>
      </div>
    </div>
    </>
  )
}

export default App
