import { useState } from "react";
import Receipt from "./Receipt";

export default function Cart({ cart, clearCart }) {
  const [showReceipt, setShowReceipt] = useState(false);

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  if (cart.length === 0) return <p>🛒 ตะกร้าว่าง</p>;

  return (
    <div className="cart">
      <h2>ตะกร้า</h2>

      {cart.map((i) => (
        <p key={i.id}>
          {i.weapon_name} × {i.qty} = {i.price * i.qty}
        </p>
      ))}

      <h3>Total: {total} Gold</h3>

      <button
        onClick={() => {
          setShowReceipt(true);
          clearCart();
        }}
      >
        ชำระเงิน
      </button>

      {showReceipt && <Receipt cart={cart} total={total} />}
    </div>
  );
}
