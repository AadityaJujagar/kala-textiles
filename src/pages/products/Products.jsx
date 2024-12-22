import { Product } from "../../components/product/Product";
import "./products.css";

export const Products = ({ data }) => {
  let singleProducts = data?.cartProducts;

  return (
    <div className="products">
      {singleProducts.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};
