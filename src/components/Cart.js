import { useState } from "react";
import Receipt from "./Receipt";

export default function Cart({ cart, clearCart }) {
  const [showReceipt, setShowReceipt] = useState(false);

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="cart">
      <h2>🛒 Cart</h2>

      {cart.map((i) => (
        <p key={i.id}>
          {i.weapon_name} x {i.qty} = {i.price * i.qty} Gold
        </p>
      ))}

      <h3>Total: {total} Gold</h3>

      {cart.length > 0 && (
        <button
          onClick={() => {
            setShowReceipt(true);
            clearCart();
          }}
        >
          ชำระเงิน
        </button>
      )}

      {showReceipt && <Receipt cart={cart} total={total} />}
    </div>
  );
}
