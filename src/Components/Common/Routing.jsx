import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pagaes/Home';
import ProductList from '../Pagaes/ProductList';
import ProductDetails from '../Pagaes/ProductDetails';
import Cart from '../Pagaes/Cart';
import Login from '../Pagaes/Login';
import Error from '../Pagaes/Error';
import Admin from '../Pagaes/Admin';


const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/man's-cloths" element={<ProductList section="man's-cloths" />} />
                <Route path="/women's-cloths" element={<ProductList section="women's-cloths" />} />
                <Route path="/jewelery" element={<ProductList section="jewelery" />} />
                <Route path="/electronics" element={<ProductList section="electronics" />} />
                <Route path="/products/:pId" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Error />} />
                <Route path="/admin" element={<Admin />}></Route>
            </Routes>
        </>
    )
}

export default Routing;