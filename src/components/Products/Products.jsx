 import React from "react";
import {Grid} from '@material-ui/core'
import Product from "./Product.";


 const products = [
     {id:1 , name :" guitar" , description : " jazz guitar" , price : "$1000" },
     {id:2 , name :" guitaru" , description : " rock guitar", price : "$1400"},
     {id:3 , name :" guitarrra" , description : " latino guitar", price : "$144000"},
     {id:4 , name :" guitar-bass" , description : " fat guitar", price : "$13000"}
 ]
 const Products = () => {
   return (
       <main>
           <Grid container justify = 'center' spacing = {4}>
               {products.map((product) =>(

                      <Grid item key = {product.id} xs={12}  sm =  {6}  md ={4} lg = {3}  >
                          <Product product = {product}/>

                      </Grid>

               ))}
           </Grid>
       </main>
   )
 }

 export default Products