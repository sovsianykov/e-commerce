
import * as React from 'react';
// import Products from "./components/Products/Products";
// import Navbar from "./components/Navbar/Navbar";
import { commerce } from './lib/commerse'
import { Products, Navbar } from './components'
import {useEffect, useState} from "react";

export default function App() {
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data)
    }
    useEffect(()=> {
     fetchProducts()
    },[])
    console.log(products)
    return (
        <div>
            <Navbar/>
      <Products products = {products}/>
        </div>
    );
};