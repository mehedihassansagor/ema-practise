import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
const Products = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.products;
    return (
        <div className="product" >
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name" >{name}</h4>
                <br />
                <p> <small>by:{seller}</small></p>
                <br />
                <p>${price}</p>
                <p>only {stock} left in stock order soon</p>
                <button className="main-button"
                onClick = {() =>props.handleProduct(props.products)}
                > 
                <FontAwesomeIcon icon={faShoppingCart} /> &nbsp;add to cart</button>
            </div>


        </div>
    );
};

export default Products;