import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import ProductSlider from '../Helper/ProductSlider';

const ProductDetails = () => {
    const [DetailData, setDetailData] = useState({});
    const [AllList, setAllList] = useState([]);
    const { pId } = useParams();
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://fakestoreapi.com/products/${pId}`).catch((error) => {
                console.log(error);
            })
            const actualData = res.data;
            setDetailData(actualData);
        }
        const getAllData = async () => {
            const res = await axios.get('https://fakestoreapi.com/products').catch((error) => {
                console.log(error);
            })
            const actualData = res.data;
            setAllList(actualData);
        }
        getData();
        getAllData();
    }, [])
    return (
        <>
            <div className="main_body">
                <div className="product_details_wrap">
                    <div className="container-medium">
                        <div className="product_details" key={DetailData.id}>
                            <div className="product_dLeft">
                                <div className="img_wrap">
                                    <img src={DetailData.image} alt="" />
                                </div>
                            </div>
                            <div className="product_dright">
                                <ul className="breadcum">
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><p>{DetailData.category}</p></li>
                                </ul>
                                <h1 className="title">{DetailData.title}</h1>
                                <div className="rating">
                                    <p className="price">Price: {DetailData.price}</p>
                                    {/* <p className="rate">Ratting: <i className='icon-star'></i>{DetailData.rating.rate}</p> */}
                                </div>
                                <p className="desc">{DetailData.description}</p>
                                <div className="btn_wrap">
                                    <NavLink to="/cart" className="cart">Add To Cart</NavLink>
                                    <NavLink to="/" className="buy">Buy Now</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductSlider />
            </div>
        </>
    )
}

export default ProductDetails;