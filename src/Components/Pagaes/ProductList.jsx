import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const ProductList = (props) => {
    const [Pdata, setPdata] = useState([]);
    let SelectedCategory = "men's clothing";
    if (props.section == "electronics") {
        SelectedCategory = "electronics";
    }
    if (props.section == "women's-cloths") {
        SelectedCategory = "women's clothing";
    }
    if (props.section == "jewelery") {
        SelectedCategory = "jewelery";
    }

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://fakestoreapi.com/products`).catch((error) => {
                console.log(error);
            })
            const actualData = res.data;
            setPdata(actualData);
        }
        getData();
    }, [])
    return (
        <>
            <div className="main_body">
                <div className="container-medium">
                    <div className="men_section sec">
                        <h2 className="man-sec-heading">{SelectedCategory}</h2>
                        <ul className='product_list'>
                            {Pdata.filter((val) => {
                                if (val.category == SelectedCategory) {
                                    return (
                                        val
                                    )
                                }
                            }).map((val) => {
                                return (
                                    <li className='product_item' key={val.id}>
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

export default ProductList
