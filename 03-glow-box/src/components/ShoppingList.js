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
  const [selectedSkin, setSelectedSkin] = useState("Tous");
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [onlyBestSellers, setOnlyBestSellers] = useState(false);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [favorites, setFavorites] = useState([]);
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  const filtered = productList.filter((product) => {
    const matchSkin =
      selectedSkin === "Tous" || product.skin === selectedSkin || product.skin === "toutes";
    const matchCategory =
      selectedCategory === "Toutes" || product.category === selectedCategory;
    const matchBest = !onlyBestSellers || product.bestSeller;
    const text = (product.brand + " " + product.name).toLowerCase();
    const matchSearch = text.includes(search.trim().toLowerCase());
    const matchFavorite = !onlyFavorites || favorites.includes(product.id);
    return matchSkin && matchCategory && matchBest && matchSearch && matchFavorite;
  });

  const displayed = [...filtered].sort((a, b) => {
    if (sortBy === "hydration") {
      return b.hydration - a.hydration;
    }
    if (sortBy === "protection") {
      return b.protection - a.protection;
    }
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const hasFilter =
    selectedSkin !== "Tous" ||
    selectedCategory !== "Toutes" ||
    onlyBestSellers ||
    search !== "" ||
    onlyFavorites ||
    sortBy !== "default";

  function resetFilters() {
    setSelectedSkin("Tous");
    setSelectedCategory("Toutes");
    setOnlyBestSellers(false);
    setSearch("");
    setSortBy("default");
    setOnlyFavorites(false);
  }

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  function countCategory(name) {
    if (name === "Toutes") {
      return productList.length;
    }
    return productList.filter((product) => product.category === name).length;
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
            <span className="glow-cat-count">{countCategory(category.name)} produits</span>
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
        <select
          className="glow-sort"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="default">Trier : par défaut</option>
          <option value="hydration">Plus hydratant d'abord 💧</option>
          <option value="protection">Plus protecteur d'abord 🛡️</option>
          <option value="name">Nom (A → Z)</option>
        </select>
      </div>

      <div className="glow-toolbar">
        <div className="glow-toolbar-group">
          <span className="glow-toolbar-label">Ma peau est :</span>
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
          <button
            className={
              onlyFavorites
                ? "glow-filter glow-filter-fav glow-filter-active"
                : "glow-filter glow-filter-fav"
            }
            onClick={() => setOnlyFavorites(!onlyFavorites)}
          >
            ❤️ Mes favoris ({favorites.length})
          </button>
        </div>
      </div>

      <div className="glow-count">
        <span>
          {displayed.length} / {productList.length} produits affichés
        </span>
        {hasFilter && (
          <button className="glow-reset" onClick={resetFilters}>
            ✕ Réinitialiser
          </button>
        )}
      </div>

      {displayed.length === 0 ? (
        <p className="glow-empty">Aucun produit ne correspond à ta recherche.</p>
      ) : (
        <ul className="glow-product-list">
          {displayed.map((product) => (
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
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingList;