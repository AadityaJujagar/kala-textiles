import "./home.css";
import { Carousel } from "../../components/carousel/Carousel";
import { ProductsOverview } from "../../components/productsOverview/ProductsOverview";

export const Home = () => {
  return (
    <div>
      <Carousel />
      <ProductsOverview />
    </div>
  );
};
