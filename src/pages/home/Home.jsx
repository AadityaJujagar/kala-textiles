import "./home.css";
import { Carousel } from "../../components/carousel/Carousel";
import { ProductsOverview } from "../../components/productsOverview/ProductsOverview";

export const Home = ({ data }) => {
  return (
    <div>
      <Carousel data={data} />
      <ProductsOverview data={data} />
    </div>
  );
};
