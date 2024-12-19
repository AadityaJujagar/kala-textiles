import { Product } from "../../components/product/Product";
import "./products.css";

export const Products = ({ data }) => {
  const requiredDataFunc = () => {
    let requiredData = [];
    Object.values(data?.allProducts).forEach((product) => {
      requiredData.push(product[0]);
    });
    return requiredData;
  };

  return (
    <div className="products">
      {requiredDataFunc().map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
};
