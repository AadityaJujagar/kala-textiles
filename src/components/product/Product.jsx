import "./product.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../app/Slices/CartSlice";
import toast from "react-hot-toast";

export const Product = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product));
    toast("✅ Added to Cart!", {
      style: {
        padding: "8px 16px",
        fontSize: "14px",
        overflow: "hidden",
        background: "black",
        fontWeight: "600",
        color: "white",
      },
    });
  };
  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast("❌ Removed from Cart!", {
      style: {
        padding: "8px 16px",
        fontSize: "14px",
        overflow: "hidden",
        background: "black",
        color: "white",
        fontWeight: "600",
      },
    });
  };

  return (
    <div className="product">
      <div className="productImg">
        <img src={product.img} alt="" />
        {cart.some((p) => p.id === product.id) ? (
          <button onClick={removeFromCart}>
            <p>Remove from Cart </p>
            <RemoveShoppingCartIcon style={{ fontSize: "18px" }} />
          </button>
        ) : (
          <button onClick={addToCart}>
            <p>Add to Cart </p>
            <AddShoppingCartIcon style={{ fontSize: "18px" }} />
          </button>
        )}
      </div>
      <span>{product.header}</span>
    </div>
  );
};
