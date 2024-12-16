import { useRef, useState } from "react";
import { ProductCard } from "../productCard/ProductCard";
import "./productsoverview.css";
import { NavLink } from "react-router-dom";

export const ProductsOverview = ({ data }) => {
  const productsIdentifier = data?.data?.productsIdentifier;
  const [category, setCategory] = useState(productsIdentifier?.[0]?.name);
  const productsSectionRef = useRef(null);

  const normalizeCategory = (name) => name.toLowerCase().replace(/ /g, "_");

  const getProducts = () => {
    if (category === "All") {
      let allProductsData = [];
      Object.values(data?.data?.allProducts).forEach((singleArray) =>
        singleArray.forEach((singleProduct) =>
          allProductsData.push(singleProduct)
        )
      );
      return allProductsData;
    } else {
      const normalizedCategory = normalizeCategory(category);
      return data?.data?.allProducts[normalizedCategory];
    }
  };

  const productsList = getProducts();

  const filterHandler = (clickedCategory) => {
    setCategory(clickedCategory);
    if (clickedCategory !== "All" && productsSectionRef.current) {
      setTimeout(() => {
        productsSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  return (
    <>
      <div className="filter">
        <h1>Browse The Range</h1>
        {productsIdentifier?.map((productButton, index) => (
          <button
            style={{
              fontWeight: category === productButton.name ? "600" : "normal",
            }}
            onClick={() => filterHandler(productButton.name)}
            key={index}
          >
            {productButton.name}
          </button>
        ))}
      </div>
      <div className="overview-section">
        <div className="products-overview">
          {productsList?.map((singleData, index) => (
            <ProductCard key={index} {...singleData} />
          ))}
        </div>
        <NavLink to="/products">
          <button>Order Now!</button>
        </NavLink>
      </div>
    </>
  );
};
