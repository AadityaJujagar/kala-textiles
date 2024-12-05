import { NavLink, useLocation } from "react-router-dom";
import KalatexLogo from "/assets/kalatex-logo.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import "./navbar.css";
import { Menu } from "../menu/Menu";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("/");
  const location = useLocation();

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
          <NavLink style={{ textDecoration: "none" }} to="/products">
            <p
              onClick={() => setIsActive("/products")}
              className={isActive === "/products" ? "active" : ""}
            >
              Products
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
          <NavLink style={{ textDecoration: "none" }} to="/contact">
            <p
              onClick={() => setIsActive("/contact")}
              className={isActive === "/contact" ? "active" : ""}
            >
              Contact
            </p>
          </NavLink>
        </div>
        <NavLink
          style={{ textDecoration: "none" }}
          className="cart-icon"
          to="/cart"
        >
          <LocalMallIcon fontSize="medium" />
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
            <NavLink to="/products" style={{ textDecoration: "none" }}>
              <p
                className={isActive === "/products" ? "active" : ""}
                onClick={() => {
                  setIsOpen(false);
                  setIsActive("/products");
                }}
              >
                Products
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
            <NavLink to="/contact" style={{ textDecoration: "none" }}>
              <p
                className={isActive === "/contact" ? "active" : ""}
                onClick={() => {
                  setIsOpen(false);
                  setIsActive("/contact");
                }}
              >
                Contact
              </p>
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
};
