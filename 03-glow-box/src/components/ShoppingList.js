import { useState } from "react";
import { productList } from "../datas/productList";
import ProductItem from "./ProductItem";
import "../styles/ShoppingList.css";

const skinTypes = ["Tous", "sèche", "grasse", "mixte", "terne"];

const categories = [
  { name: "Toutes", icon: "✨" },
  { name: "Nettoyant", icon: "🧼" },
  { name: "Hydratant", icon: "💧" },
  { name: "Sérum", icon: "🧪" },
  { name: "Protection solaire", icon: "☀️" },
  { name: "Masque", icon: "🌿" },
  { name: "Lèvres", icon: "💋" },
];

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [selectedSkin, setSelectedSkin] = useState("Tous");
  const [onlyBestSellers, setOnlyBestSellers] = useState(false);
  const [search, setSearch] = useState("");

  function isVisible(product) {
    if (selectedCategory !== "Toutes" && product.category !== selectedCategory) {
      return false;
    }
    if (
      selectedSkin !== "Tous" &&
      product.skin !== selectedSkin &&
      product.skin !== "toutes"
    ) {
      return false;
    }
    if (onlyBestSellers && !product.bestSeller) {
      return false;
    }
        const text = (product.brand + " " + product.name).toLowerCase();
    if (!text.includes(search.toLowerCase())) {
      return false;
    }
    return true;
  }

  const visibleCount = productList.reduce(
    (total, product) => (isVisible(product) ? total + 1 : total),
    0
  );

  function resetFilters() {
    setSelectedCategory("Toutes");
    setSelectedSkin("Tous");
    setOnlyBestSellers(false);
    setSearch("");
  }

  function countCategory(name) {
    if (name === "Toutes") {
      return productList.length;
    }
    return productList.reduce(
      (total, product) => (product.category === name ? total + 1 : total),
      0
    );
  }

  return (
    <div id="produits" className="glow-section">
      <h2 className="glow-section-title">Découvre nos catégories</h2>

      <div className="glow-cat-row">
        {categories.map((category) => (
          <button
            key={category.name}
            className={
              category.name === selectedCategory
                ? "glow-cat-card glow-cat-card-active"
                : "glow-cat-card"
            }
            onClick={() => setSelectedCategory(category.name)}
          >
            <span className="glow-cat-icon">{category.icon}</span>
            <span className="glow-cat-name">{category.name}</span>
            <span className="glow-cat-count">
              {countCategory(category.name)} produits
            </span>
          </button>
        ))}
      </div>

      <div className="glow-tools">
        <input
          className="glow-search"
          type="text"
          placeholder="🔍 Rechercher un produit ou une marque..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="glow-toolbar">
        <div className="glow-toolbar-group">
          <span className="glow-toolbar-label">Ma peau est :</span>
          {skinTypes.map((type) => (
            <button
              key={type}
              className={
                type === selectedSkin
                  ? "glow-filter glow-filter-active"
                  : "glow-filter"
              }
              onClick={() => setSelectedSkin(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="glow-toolbar-group">
          <button
            className={
              onlyBestSellers
                ? "glow-filter glow-filter-best glow-filter-active"
                : "glow-filter glow-filter-best"
            }
            onClick={() => setOnlyBestSellers(!onlyBestSellers)}
          >
            ⭐ Best Sellers
          </button>
        </div>
      </div>

      <div className="glow-count">
        <span>
          {visibleCount} / {productList.length} produits affichés
        </span>
        <button className="glow-reset" onClick={resetFilters}>
          ✕ Réinitialiser
        </button>
      </div>

      {visibleCount === 0 ? (
        <p className="glow-empty">Aucun produit ne correspond à ta recherche.</p>
      ) : (
        <ul className="glow-product-list">
          {productList.map((product) =>
            isVisible(product) ? (
              <ProductItem
                key={product.id}
                cover={product.cover}
                brand={product.brand}
                name={product.name}
                category={product.category}
                skin={product.skin}
                hydration={product.hydration}
                protection={product.protection}
                bestSeller={product.bestSeller}
              />
            ) : null
          )}
        </ul>
      )}
    </div>
  );
}

export default ShoppingList;