import CareScale from "./CareScale";
import "../styles/ProductItem.css";

function ProductItem({ id, cover, brand, name, skin, hydration, protection }) {
  return (
    <li key={id} className="glow-product-item">
      <img className="glow-product-item-cover" src={cover} alt={`${name} cover`} />
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