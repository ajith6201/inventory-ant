import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from './inventory/Dashboard';
import Category from './inventory/Category/Category';
import Product from './inventory/Product/Product';
import Order from './inventory/Order/Order';
import OrderList from "./inventory/Order/OrderList";
import Report from './inventory/Report';
import Barcode from './inventory/Barcode';
import AddProduct from './inventory/Product/AddProduct';
import EditProduct from './inventory/Product/EditProduct';

import MainLayout from './Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainLayout>
          <Routes>            
              <Route path="/" exact element={<Dashboard />}/>
              <Route path="/category" exact element={<Category/>}/>
              <Route path="/product" exact element={<Product/>}/>
              <Route path="/order" exact element={<Order/>}/>
              <Route path="/report" exact element={<Report/>}/>
              <Route path="/barcode" exact element={<Barcode/>}/>         
              <Route path="/add-product" exact element={<AddProduct/>}/>
              <Route path="/edit-product" exact element={<EditProduct/>}/>
              <Route path="/manage-orders" exact element={<OrderList/>}/>
          </Routes>
        </MainLayout>
      </BrowserRouter>      
    </div>
  );
}

export default App;
