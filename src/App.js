import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./style.css";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product, qty) {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { ...product, qty }];
    });
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <div className="app">
      <h1>⚔️ Viking & Roman Weapon Shop</h1>

      <ProductList addToCart={addToCart} />

      <hr />

      <Cart cart={cart} clearCart={clearCart} />
    </div>
  );
}
