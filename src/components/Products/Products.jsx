 import React from "react";
import {Grid} from '@material-ui/core'
import Product from "./Product.";


 const products = [
     {id:1 , name :" guitar" , description : " jazz guitar" , price : "$1000", image: 'https://beat.com.ua/obzor/gitara-gibson-les-paul-10-phaktov/gibson-les-paul-banner-article.jpg' },
     {id:2 , name :" guitaru" , description : " rock guitar", price : "$1400" , image: 'https://4club.com.ua/images/detailed/456/GIBSON_2019_LES_PAUL_STUDIO_TRIBUTE_SATIN_HONEYBURST_(7).jpg'},
     {id:3 , name :" guitarra" , description : " latino guitar", price : "$144000", image: 'https://www.ultimate-guitar.com/static/article/news/2/79802_0_wide_ver1538324883.jpg@642'},
     {id:4 , name :" guitar-bass" , description : " fat guitar", price : "$13000", image: 'https://images.reverb.com/image/upload/s--Fk5Gpqb4--/f_auto,t_supersize/v1559679262/l7paqvwnqjghs1091woy.jpg'},
     {id:5 , name :" guitar-lead" , description : " very good guitar", price : "$44000", image: 'https://pbs.twimg.com/profile_images/681224185029505024/9w1ayqPj_400x400.jpg'},
     {id:6 , name :" guitar-acoustic" , description : " solid guitar", price : "$13000", image: 'https://images.reverb.com/image/upload/s--7IOAW_R9--/f_auto,t_supersize/v1545603580/eitq7z0kmkf3wc5lknim.jpg'}
 ]
 const Products = () => {
   return (
       <main>
           <Grid container justify = 'center' spacing = {2}>
               {products.map((product) =>(

                      <Grid item key = {product.id} xs={12}  sm =  {6}  md ={4} lg = {4}  >
                          <Product product = {product}/>

                      </Grid>

               ))}
           </Grid>
       </main>
   )
 }

 export default Products