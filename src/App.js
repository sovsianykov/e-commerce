
import * as React from 'react';
// import Products from "./components/Products/Products";
// import Navbar from "./components/Navbar/Navbar";
import { commerce } from './lib/commerse'
import { Products, Navbar,Cart } from './components'
import {useEffect, useState} from "react";

export default function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data)
    }
    const fetchCart = async () => {
        setCart( await commerce.cart.retrieve())
    }
    const handleAddToCart = async (productId, quanitity ) => {
          const item = await commerce.cart.add(productId,quanitity)

        setCart(item.cart)
    }
    useEffect(()=> {
     fetchProducts();
     fetchCart();
    },[])
    console.log(cart)
    return (
        <div>
            <Navbar totalItems = {cart.total_items}/>
      {/*<Products products = {products} onAddToCard = {handleAddToCart}/>*/}
       <Cart cart ={cart}/>
        </div>
    );
};