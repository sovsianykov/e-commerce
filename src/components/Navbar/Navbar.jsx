
import * as React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import brand from '../../assets/ghost.gif'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function Navbar({totalItems}) {
    const classes = useStyles()
    return (
        <>
          <AppBar position ='fixed' className={classes.appBar} color= 'inherit'>
              <Toolbar>
                  <Typography component={Link} to = "/"  variant='h6' className={classes.tittle} color='inherit'>
                      <img src={brand} alt='sergey shop' height='25px' className={classes.image}/>
                      Sergey's Shop
                  </Typography>
                  <div className={classes.grow}/>

                  <div className={classes.button}>
                     <IconButton component={Link} to = "/cart" aria-label='Show cart items' color='inherit'>
                          <Badge badgeContent={totalItems} color='secondary'>
                              <ShoppingCart/>
                          </Badge>
                     </IconButton>
                  </div>

              </Toolbar>
          </AppBar>

        </>
    );
};

 export default Navbar