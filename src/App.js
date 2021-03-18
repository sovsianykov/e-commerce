import * as React from "react";
// import Products from "./components/Products/Products";
// import Navbar from "./components/Navbar/Navbar";
import { commerce } from "./lib/commerse";
import { Products, Navbar, Cart} from "./components";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productId, quanitity) => {
    const { cart } = await commerce.cart.add(productId, quanitity);

    setCart(cart);
  };
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };
  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  // console.log(cart);
  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCard={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              emptyCart={emptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            {/*<Checkout cart={cart} />*/}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
