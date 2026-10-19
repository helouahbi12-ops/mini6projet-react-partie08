import { useState } from "react";
import { productList } from "../datas/productList";
import ProductItem from "./ProductItem";
import "../styles/ShoppingList.css";

const skinTypes = ["Tous", "sèche", "grasse", "mixte", "terne"];

function ShoppingList() {
  const [selected, setSelected] = useState("Tous");

  const filtered =
    selected === "Tous"
      ? productList
      : productList.filter(
          (product) => product.skin === selected || product.skin === "toutes"
        );

  return (
    <div id="produits">
      <div className="glow-filters">
        <span>Ma peau est :</span>
        {skinTypes.map((type) => (
          <button
            key={type}
            className={type === selected ? "glow-filter glow-filter-active" : "glow-filter"}
            onClick={() => setSelected(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <ul className="glow-product-list">
        {filtered.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            cover={product.cover}
            brand={product.brand}
            name={product.name}
            skin={product.skin}
            hydration={product.hydration}
            protection={product.protection}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;