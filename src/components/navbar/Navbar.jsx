import { NavLink, useLocation } from "react-router-dom";
import KalatexLogo from "/assets/kalatex-logo.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import "./navbar.css";
import { Menu } from "../menu/Menu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("/");
  const location = useLocation();
  const cart = useSelector((state) => state.cart);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsActive(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <nav>
        <NavLink to="/">
          <img src={KalatexLogo} alt="" />
        </NavLink>
        <div className="nav-elements">
          <NavLink style={{ textDecoration: "none" }} to="/">
            <p
              onClick={() => setIsActive("/")}
              className={isActive === "/" ? "active" : ""}
            >
              Home
            </p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/about">
            <p
              onClick={() => setIsActive("/about")}
              className={isActive === "/about" ? "active" : ""}
            >
              About
            </p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/products">
            <p
              onClick={() => setIsActive("/products")}
              className={isActive === "/products" ? "active" : ""}
            >
              Products
            </p>
          </NavLink>
        </div>
        <NavLink
          style={{ textDecoration: "none" }}
          className="cart-nav"
          to="/cart"
        >
          <div className="cart-icon">
            {cart.length > 0 && <span>{cart.length}</span>}
            <LocalMallIcon fontSize="medium" />
          </div>
          <p
            onClick={() => setIsActive("/cart")}
            className={isActive === "/cart" ? "active" : ""}
          >
            Go to Cart
          </p>
        </NavLink>
        <div className="menu">
          <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </nav>
      {isOpen && (
        <ul className="menu-items">
          <li>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <p
                className={isActive === "/" ? "active" : ""}
                onClick={() => {
                  setIsOpen(false);
                  setIsActive("/");
                }}
              >
                Home
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={{ textDecoration: "none" }}>
              <p
                className={isActive === "/about" ? "active" : ""}
                onClick={() => {
                  setIsOpen(false);
                  setIsActive("/about");
                }}
              >
                About
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" style={{ textDecoration: "none" }}>
              <p
                className={isActive === "/products" ? "active" : ""}
                onClick={() => {
                  setIsOpen(false);
                  setIsActive("/products");
                }}
              >
                products
              </p>
            </NavLink>
          </li>
          <hr width="100%" />
          <li>
            <NavLink to="/cart" style={{ textDecoration: "none" }}>
              <div className="cart-icon">
                {cart.length > 0 && <span>{cart.length}</span>}
                <LocalMallIcon color="#0c5ca3" fontSize="medium" />
              </div>
              <p
                className={isActive === "/cart" ? "active" : ""}
                onClick={() => {
                  setIsOpen(false);
                  setIsActive("/cart");
                }}
                style={{ display: "flex", color: "#0c5ca3", gap: "8px" }}
              >
                Go to Cart
              </p>
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
};
