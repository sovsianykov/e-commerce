
import * as React from 'react';
import {Typography,Button, CardActions,CardContent,Card,CardMedia} from "@material-ui/core";
import useStyles from './styles'

export default function CartItem({ item }) {
    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={item.media.source}  alt ={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h5'>{item.name} </Typography>
                <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small'>-</Button>
                    <Typography >{item.quantity}</Typography>
                    <Button type='button' size='small'>+</Button>
                </div>
            <Button variant='contained' type='button' color='secondary'>Remove </Button>
            </CardActions>

        </Card>
    );
};