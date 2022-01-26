import React from 'react';
import ErrorImg from '../../assets/images/404.png';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className="error_img">
                <img src={ErrorImg} alt="" />
                <NavLink exact="true" to="/" className="menu_item">Go To Home</NavLink>
            </div>
        </>
    )
}

export default Error
