import "./productcard.css";

export const ProductCard = ({ img, header }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <p>{header}</p>
    </div>
  );
};
