import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react'
import './Shop.css'
import Products from '../Products/Products';
const Shop = () => {
    const fisrt10 = fakeData.slice(0,10)
    const [products, setProducts] = useState(fisrt10);
    
    console.log(fisrt10.length);
    
    return (
        <div className = "shop-container">
            <div className="product-container">
                        {
                            products.map(pd => <Products products = {pd}></Products>)
                        }
                    
            </div>
           <div className="cart-container">
               <h3>this is my cart</h3>
           </div>
        </div>
    );
};

export default Shop;