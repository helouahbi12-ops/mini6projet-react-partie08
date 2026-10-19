import { useState } from "react";
import { productList } from "../datas/productList";
import ProductItem from "./ProductItem";
import "../styles/ShoppingList.css";

const skinTypes = ["Tous", "sèche", "grasse", "mixte", "terne"];
const categories = ["Toutes", "Nettoyant", "Hydratant", "Sérum", "Protection solaire", "Masque", "Lèvres"];

function ShoppingList() {
  const [selectedSkin, setSelectedSkin] = useState("Tous");
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [onlyBestSellers, setOnlyBestSellers] = useState(false);

  const filtered = productList.filter((product) => {
    const matchSkin =
      selectedSkin === "Tous" || product.skin === selectedSkin || product.skin === "toutes";
    const matchCategory =
      selectedCategory === "Toutes" || product.category === selectedCategory;
    const matchBest = !onlyBestSellers || product.bestSeller;
    return matchSkin && matchCategory && matchBest;
  });

  return (
    <div id="produits">
      <div className="glow-filters">
        <span>Ma peau est :</span>
        {skinTypes.map((type) => (
          <button
            key={type}
            className={type === selectedSkin ? "glow-filter glow-filter-active" : "glow-filter"}
            onClick={() => setSelectedSkin(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="glow-filters glow-filters-second">
        <span>Catégorie :</span>
        {categories.map((category) => (
          <button
            key={category}
            className={category === selectedCategory ? "glow-filter glow-filter-active" : "glow-filter"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
        <button
          className={onlyBestSellers ? "glow-filter glow-filter-best glow-filter-active" : "glow-filter glow-filter-best"}
          onClick={() => setOnlyBestSellers(!onlyBestSellers)}
        >
          ⭐ Best Sellers
        </button>
      </div>

      {filtered.length === 0 ? (
        <p className="glow-empty">Aucun produit ne correspond à ta recherche.</p>
      ) : (
        <ul className="glow-product-list">
          {filtered.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              cover={product.cover}
              brand={product.brand}
              name={product.name}
              category={product.category}
              skin={product.skin}
              hydration={product.hydration}
              protection={product.protection}
              bestSeller={product.bestSeller}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingList;