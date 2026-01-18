export default function Receipt({ cart, total }) {
  return (
    <div className="receipt">
      <h2>🧾 ใบเสร็จ</h2>

      {cart.map((i) => (
        <p key={i.id}>
          {i.weapon_name} × {i.qty} = {i.price * i.qty}
        </p>
      ))}

      <hr />
      <h3>Total: {total} Gold</h3>
      <p>⚔️ Glory to Valhalla!</p>
    </div>
  );
}
