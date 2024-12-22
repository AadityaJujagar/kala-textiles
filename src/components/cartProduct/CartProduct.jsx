import { useDispatch } from "react-redux";
import {
  remove,
  incrementQuantity100x,
  decrementQuantity100x,
  incrementQuantity1x,
  decrementQuantity1x,
} from "../../app/Slices/CartSlice";
import "./CartProduct.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import toast from "react-hot-toast";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const CartProduct = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast("❌ Removed from Cart!", {
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

  return (
    <div className="cartProduct">
      <div className="cartProductInfo">
        <img src={item.img} alt="" />
        <p>{item.header}</p>
      </div>
      <div className="cartProductPrice">
        <div className="cartProductQuantity">
          <div className="quantityButtons">
            <button onClick={() => dispatch(incrementQuantity100x(item.id))}>
              <ArrowDropUpIcon fontSize="medium" />
            </button>
            <p>100x</p>
            <button onClick={() => dispatch(decrementQuantity100x(item.id))}>
              <ArrowDropDownIcon fontSize="medium" />
            </button>
          </div>
        </div>
        +
        <div className="cartProductQuantity">
          <div className="quantityButtons">
            <button onClick={() => dispatch(incrementQuantity1x(item.id))}>
              <ArrowDropUpIcon fontSize="medium" />
            </button>
            <p>1x</p>
            <button onClick={() => dispatch(decrementQuantity1x(item.id))}>
              <ArrowDropDownIcon fontSize="medium" />
            </button>
          </div>
        </div>
        <div className="totalQuantity">
          <span> = </span>
          <span>{100 * item.quantity100x + item.quantity1x || 0}</span>
        </div>
      </div>
      <div className="removeFromCart" onClick={removeFromCart}>
        <DeleteForeverIcon />
      </div>
    </div>
  );
};
