import "./product.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const Product = ({ header, img }) => {
  return (
    <div className="product">
      <div className="productImg">
        <img src={img} alt="" />
        <button>
          <p>Add to Cart </p>
          <AddShoppingCartIcon style={{ fontSize: "18px" }} />
        </button>
      </div>
      <span>{header}</span>
    </div>
  );
};
