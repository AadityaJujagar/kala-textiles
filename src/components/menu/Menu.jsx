import "./menu.css";

export const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <div className="menu-button" onClick={toggleMenu}>
      <div className={`bar ${isOpen ? "open" : ""}`}></div>
      <div className={`bar ${isOpen ? "open" : ""}`}></div>
      <div className={`bar ${isOpen ? "open" : ""}`}></div>
    </div>
  );
};
