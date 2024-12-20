import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import ScrollTop from "../ScrollTop/ScrollTop";
import Footer from "../Footer/Footer";
import { useProductStore } from "../../assets/Data/product";

const Layout = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchProducts();
      if (!result.success) {
        console.error(result.message);
        console.log(products);
      }
    };
    fetchData();
  }, [fetchProducts]);

  return (
    <>
      <ScrollTop />
      <div>
        <header className="">
          <Header />
          <Navbar />
        </header>
        <main>{products ? <Outlet /> : <h1>Loading</h1>}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
