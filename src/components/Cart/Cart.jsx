
import * as React from 'react';
import {Container,Grid,Typography, Button} from "@material-ui/core";
import useStyles from './styles'
import CartItem from "./CartItem/CartItem";

export default function Cart({cart}) {
    const classes = useStyles()
    const EmptyCart = () => (
     <Typography variant='subtitle1' >
         You have no items in your cart,
         start adding something!
     </Typography>
    )
    const FilledCart =() => (
        <>
           <Grid container spacing={3}>
               {cart.line_items.map((item) =>(
                   <Grid item xs={12} sm={4} key={item.id}>
                       <div>
                           <CartItem item = {item}/>
                       </div>
                   </Grid>
               ) )}

           </Grid>
            <div className={classes.cardDetails}>
                     <Typography variant='h4'>
                         Subtotal: {cart.subtotal.formatted_with_symbol}
                     </Typography>
                     <div>
                         <Button className={classes.emptyButton} size='large' type='button' color='secondary' variant='contained'>
                             Empty Cart
                         </Button>
                         <Button className={classes.checkoutButton} size='large' type='button' color='primary' variant='contained'>
                             Checkout
                         </Button>
                     </div>

            </div>
        </>

    )

    if (!cart.line_items) return ' loading ...'
    return (
        <div>
            <Container>
                <div className={classes.toolbar}/>
                 <Typography className={classes.title} variant='h4' gutterBottom>
                     Your Shopping  Cart
                 </Typography>
                {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>  }
            </Container>
        </div>
    );
};