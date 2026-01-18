import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("weapons")
        .select("*")
        .order("price");

      if (error) setError(true);
      else setProducts(data);

      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <p>⚙️ Loading weapons...</p>;
  if (error) return <p>❌ Failed to load weapons</p>;

  return (
    <div>
      <h2>🗡️ Weapons</h2>

      {products.map((p) => (
        <div key={p.id} className="product-card">
          <img src={p.image_url} width="120" />

          <div>
            <h3>{p.weapon_name}</h3>

            <span className={`rarity ${p.rarity}`}>{p.rarity}</span>

            <p>{p.description}</p>
            <p>Damage: {p.damage}</p>
            <p>Price: {p.price} Gold</p>
            <p>Stock: {p.stock}</p>

            {p.stock <= 0 && <span className="out">Sold Out</span>}
            {p.stock > 0 && p.stock <= 5 && (
              <span className="low">Low Stock</span>
            )}

            <input
              type="number"
              min="1"
              max={p.stock}
              defaultValue="1"
              onChange={(e) =>
                setQty({ ...qty, [p.id]: Number(e.target.value) })
              }
            />

            <button
              disabled={p.stock <= 0}
              onClick={async () => {
                const amount = qty[p.id] || 1;
                if (amount > p.stock) return;

                await supabase.rpc("buy_weapon", {
                  wid: p.id,
                  amount,
                });

                addToCart(p, amount);

                setProducts((prev) =>
                  prev.map((i) =>
                    i.id === p.id ? { ...i, stock: i.stock - amount } : i
                  )
                );
              }}
            >
              ซื้อ
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
