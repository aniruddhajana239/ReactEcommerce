import React, { useEffect, useState } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const ProductSlider = () => {
    const [AllList, setAllList] = useState([]);
    useEffect(() => {
        const getAllData = async () => {
            const res = await axios.get('https://fakestoreapi.com/products').catch((error) => {
                console.log(error);
            })
            const actualData = res.data;
            setAllList(actualData);
        }
        getAllData();
    }, [])


    const options = {
        responsiveClass: true,
        nav: false,
        autoplay: true,
        loop: true,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        items: 4,
        dots: false,
        margin: 10,
    };


    return (
        <>
            <div className="container-medium">
                <div className="men_section sec">
                    <h2 className="man-sec-heading">Suggested Products</h2>
                    <OwlCarousel className="owl-theme product_list product_slider" {...options}>
                        {AllList.map((val) => {
                            return (
                                <div className='product_item' key={val.id}>
                                    <NavLink to={`/products/${val.id}`}>
                                        <div className="product_img">
                                            <img src={val.image} alt="" />
                                        </div>
                                        <div className="product_data">
                                            <div className="price">
                                                <p className='product_price'>INR {val.price}<span>({val.rating.count} left only)</span></p>
                                                <p className='product_rating'><i className='icon-star'></i>{val.rating.rate}</p>
                                            </div>
                                            <h2 className='product_title'>{val.title}</h2>
                                            <p className='product_desc'>{val.description}</p>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        })}
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}

export default ProductSlider;