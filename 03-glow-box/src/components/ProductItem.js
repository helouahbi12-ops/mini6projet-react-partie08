import CareScale from "./CareScale";
import "../styles/ProductItem.css";

function ProductItem({
  id,
  cover,
  brand,
  name,
  category,
  skin,
  hydration,
  protection,
  bestSeller,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <li key={id} className="glow-product-item">
      {bestSeller && <span className="glow-badge">⭐ Best Seller</span>}
      <button
        className={isFavorite ? "glow-heart glow-heart-active" : "glow-heart"}
        onClick={() => onToggleFavorite(id)}
        aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
      <img className="glow-product-item-cover" src={cover} alt={`${name} cover`} />
      <span className="glow-product-category">{category}</span>
      <span className="glow-product-brand">{brand}</span>
      <span className="glow-product-name">{name}</span>
      <span className="glow-product-skin">Peau : {skin}</span>
      <div>
        <CareScale careType="hydration" scaleValue={hydration} />
        <CareScale careType="protection" scaleValue={protection} />
      </div>
    </li>
  );
}

export default ProductItem;