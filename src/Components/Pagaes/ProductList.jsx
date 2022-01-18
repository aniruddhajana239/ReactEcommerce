import React from 'react'

const ProductList=(props)=> {
    const data1 = props.section;

    return (
        <>
            <h1>This is product list page</h1>
            <p>{props.section}</p>
            {/* {data1 === "product-list" && } */}
        </>
    )
}

export default ProductList;
