import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <div className='container-medium'>
                    <div className='header_main'>
                        <div className='header_left'>
                            <NavLink exact="true" to="/" className="logo">Logo</NavLink>
                        </div>
                        <div className='header_right'>
                            <ul>
                                <li><NavLink exact="true" to="/" className="menu_item">Home</NavLink></li>
                                <li><NavLink exact="true" to="/man's-cloths" className="menu_item">Men Clothes</NavLink></li>
                                <li><NavLink exact="true" to="/women's-cloths" className="menu_item">Women Clothes</NavLink></li>
                                <li><NavLink exact="true" to="/jewelery" className="menu_item">Jewelery</NavLink></li>
                                <li><NavLink exact="true" to="/electronics" className="menu_item">Electronics</NavLink></li>
                                <li><NavLink exact="true" to="/cart" className="menu_item">Cart</NavLink></li>
                                <li><NavLink exact="true" to="/login" className="menu_item">Login</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header