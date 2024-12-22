import { useSelector, useDispatch } from "react-redux";
import "./cart.css";
import { Link } from "react-router-dom";
import { CartProduct } from "../../components/cartProduct/CartProduct";
import { CustomerForm } from "../../components/customerForm/CustomerForm";
import CartEmpty from "/assets/cart-empty.svg";
import OrderSent from "/assets/order-sent.svg";
import { clearCart } from "../../app/Slices/CartSlice";
import { useState } from "react";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrderPlaced = () => {
    dispatch(clearCart());
    setOrderPlaced(true);
  };

  return (
    <>
      {orderPlaced ? (
        <div className="cartEmpty">
          <img src={OrderSent} alt="" />
          <p>Your Order has been placed successfully!</p>
          <Link to="/products">
            <button>Shop Now</button>
          </Link>
        </div>
      ) : cart.length > 0 ? (
        <div className="cart">
          <div className="cartProducts">
            {cart.map((item, index) => (
              <CartProduct item={item} key={index} itemIndex={index} />
            ))}
          </div>
          <div className="form">
            <CustomerForm setOrderPlaced={handleOrderPlaced} />{" "}
          </div>
        </div>
      ) : (
        <div className="cartEmpty">
          <img src={CartEmpty} alt="" />
          <p>Your Cart is Empty!</p>
          {orderPlaced ? (
            <Link to="/products">
              <button>Shop Again</button>
            </Link>
          ) : (
            <Link to="/products">
              <button>Shop Now</button>
            </Link>
          )}
        </div>
      )}
    </>
  );
};
