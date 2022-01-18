import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pagaes/Home';
import ProductList from '../Pagaes/ProductList';
import ProductDetails from '../Pagaes/ProductDetails';
import Cart from '../Pagaes/Cart';
import Login from '../Pagaes/Login';
import Error from '../Pagaes/Error';
import Allproduct from '../Pagaes/Allproduct';

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/product-list"  element={<ProductList section="product-list" />} />
                <Route path="/product-details" element={<ProductList section="product-details" />} /> */}
                <Route path="/product-list" element={<ProductList />} />
                <Route path="/product-details" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/all-product" element={<Allproduct />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    )
}

export default Routing;