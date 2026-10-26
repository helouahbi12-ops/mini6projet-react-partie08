function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];

  let icone = "";
  if (careType === "hydration") {
    icone = "💧";
  } else {
    icone = "🛡️";
  }

  function handleClick() {
    let quantite = "";
    let type = "";

    if (scaleValue === 1) {
      quantite = "peu";
    } else if (scaleValue === 2) {
      quantite = "modérément";
    } else {
      quantite = "beaucoup";
    }

    if (careType === "hydration") {
      type = "d'hydratation";
    } else {
      type = "de protection";
    }

    alert("Ce produit apporte " + quantite + " " + type);
  }

  return (
    <div className="glow-scale" onClick={handleClick}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem}>{icone}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;