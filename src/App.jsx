import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Shop } from "./pages/shop/Shop";
import { Contact } from "./pages/contact/Contact";
import { Cart } from "./pages/cart/Cart";
import { Footer } from "./components/footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "./api/api";
import { Loader } from "./components/loader/Loader";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      const fetchedData = await api();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData(fetchedData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
