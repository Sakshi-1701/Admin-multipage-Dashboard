import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home";
import User from "./pages/users/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserEdit from "./pages/userEdit/UserEdit";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";

function App() {
  return (
    <div className="app dark">
    <Router >
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/users" element={<User/>}/>
        <Route exact path="/userEdit/:userId" element={<UserEdit/>}/>
        <Route exact path="/newUser" element={<NewUser/>}/>
        <Route exact path="/products/" element={<ProductList/>}/>
       <Route exact path="/product/:productId" element={<Product/>}/> 
        <Route exact path="/newProduct" element={<NewUser/>}/>

        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
