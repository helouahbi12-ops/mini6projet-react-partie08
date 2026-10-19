import Drop from "../assets/drop.svg";
import Shield from "../assets/shield.svg";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "hydration" ? (
      <img src={Drop} alt="hydration-icon" width="20" />
    ) : (
      <img src={Shield} alt="protection-icon" width="20" />
    );

  return (
    <div className="glow-scale">
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
