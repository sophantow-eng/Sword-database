export default function Receipt({ cart, total }) {
  return (
    <div className="receipt">
      <h2>🧾 Receipt</h2>

      {cart.map((i) => (
        <p key={i.id}>
          {i.weapon_name} x {i.qty} = {i.price * i.qty}
        </p>
      ))}

      <hr />
      <h3>Total Paid: {total} Gold</h3>
      <p>⚔️ Glory Awaits the Warrior</p>
    </div>
  );
}
