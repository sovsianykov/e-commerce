// @flow
import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@material-ui/core";
 import {AddShoppingCart} from "@material-ui/icons";
 import useStyles from  './styles'

const Product =( {product} ) => {
     const classes = useStyles()
    return (
        <div>
            <Card className={classes.root}>
                  <CardMedia className={classes.media} image= '' title={product.name}/>

            <CardContent>
                <div className={classes.cardContent}>
                   <Typography variant='h5' gutterBottom>
                       {product.name}
                   </Typography>
                    <Typography variant='h5'>
                        {product.price}
                    </Typography>
                </div>
                    <Typography
                    variant='h2' color='textSecondary'>
                    {product.description}
                </Typography>
                    <CardActions disableSpacing className={classes.cardActions}>
                        <IconButton aria-label='Add To Card'>
                            <AddShoppingCart/>
                        </IconButton>
                    </CardActions>

            </CardContent>

            </Card>
        </div>
    );
}
export default Product