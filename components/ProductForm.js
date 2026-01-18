import { useState } from "react";
import { supabase } from "./supabase";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  async function addProduct(e) {
    e.preventDefault();

    await supabase.from("street_fashion_products").insert([
      {
        product_name: name,
        brand,
        price,
        category: "T-Shirt",
        season: "Spring/Summer",
        release_year: 2025,
        stock: 10,
      },
    ]);

    setName("");
    setBrand("");
    setPrice("");
    alert("Product added!");
  }

  return (
    <form onSubmit={addProduct}>
      <h2>Add Product</h2>

      <input
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <button>Add</button>
    </form>
  );
}
