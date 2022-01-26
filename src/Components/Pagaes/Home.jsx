import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SliderData from '../Common/SliderData';
import { NavLink } from 'react-router-dom';
import ProductList from './ProductList';

const Home = () => {
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
                                    <NavLink to="/" className="hero_cta">SHOP NOW</NavLink>
                                </div>
                            </div>
                        )
                    })}
                </OwlCarousel>
                <ProductList section="man's-cloths" />
                <ProductList section="women's-cloths" />
                <ProductList section="jewelery" />
                <ProductList section="electronics" />
            </div>
        </>
    )
}

export default Home;