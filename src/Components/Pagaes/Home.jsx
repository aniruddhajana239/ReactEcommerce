import React, { useState, useEffect } from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SliderData from '../Common/SliderData';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [mdata, setMdata] = useState([]);
    // console.log(data);
    const options = {
        responsiveClass: true,
        nav: false,
        autoplay: true,
        loop: true,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        items: 1,
        dots: false,
    };
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`).catch((error) => {
                alert("Error msg");
            });;
            const actualData = res.data;
            console.log(actualData);
            setMdata(actualData);
        }
        getData();
    }, [])
    return (
        <>
            <div className="main_body">
                <OwlCarousel className="owl-theme hero_slider" {...options}>
                    {SliderData.map((val) => {
                        return (
                            <div className='slider_item' key={val.id}>
                                <div className='slider_img'>
                                    <img src={val.imgSrc} alt="" />
                                </div>
                                <div className='slider_content'>
                                    <h2>{val.title}</h2>
                                    <p>{val.desc}</p>
                                    <NavLink to="/all-product" className="hero_cta">SHOP NOW</NavLink>
                                </div>
                            </div>
                        )
                    })}
                </OwlCarousel>
                <div className="container-medium">
                    <div className="men_section sec">
                        <h2 className="man-sec-heading">Men</h2>
                        <ul className='product_list'>
                            {mdata.map((val) => {
                                return (
                                    <li className='product_item' key={val.id}>
                                        <div className="product_img">
                                            <img src={val.image} alt="" />
                                        </div>
                                        <div className="product_data">
                                            <div className="price">
                                                <p className='product_price'>INR 150.25<span>({val.rating.count} left only)</span></p>
                                                <p className='product_rating'><i className='icon-star'></i>{val.rating.rate}</p>
                                            </div>
                                            <h2 className='product_title'>{val.title}</h2>
                                            <p className='product_desc'>{val.description}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;