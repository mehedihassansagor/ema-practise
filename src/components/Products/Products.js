import React from 'react';

const Products = (props) => {
    console.log(props.products.name);
    return (
        <div>
            <h1>this is product</h1>
            <h4>{props.products.name}</h4>
        </div>
    );
};

export default Products;