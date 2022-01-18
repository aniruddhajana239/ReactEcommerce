import React from 'react';
import ErrorImg from '../../assets/images/404.png';

const Error = () => {
    return (
        <>
        <h1>Page not found</h1>
            <img src={ErrorImg} alt="" />
        </>
    )
}

export default Error
