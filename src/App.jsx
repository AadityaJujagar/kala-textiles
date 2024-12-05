import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Products } from "./pages/products/Products";
import { Contact } from "./pages/contact/Contact";
import { Cart } from "./pages/cart/Cart";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
