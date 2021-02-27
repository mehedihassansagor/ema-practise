import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react'
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
const Shop = () => {
    const fisrt10 = fakeData.slice(0,10)
    const [products, setProducts] = useState(fisrt10);
    const [cart,setCart] = useState([]);

    const handleProduct = (product) =>{
        
        const newCart = [...cart,product];
        setCart(newCart);
    }
    
    console.log(fisrt10.length);
    
    return (
        <div className = "shop-container">
            <div className="product-container">
                        {
                            products.map(pd => <Products 
                                handleProduct = {handleProduct}
                                products = {pd}
                                
                                ></Products>)
                        }
                    
            </div>
           <div className="cart-container">
              <Cart cart= {cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;