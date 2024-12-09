import { ProductCard } from "../productCard/ProductCard";
import "./productsoverview.css";
import { productsOverviewData } from "../../data/data";
import { NavLink } from "react-router-dom";

export const ProductsOverview = () => {
  return (
    <div className="overview-section">
      <h1>Browse The Range</h1>
      <div className="products-overview">
        {productsOverviewData.map((singleData) => (
          <ProductCard key={singleData.id} {...singleData} />
        ))}
      </div>
      <NavLink to="/products">
        <button>Order Now!</button>
      </NavLink>
    </div>
  );
};
