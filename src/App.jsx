import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import OpenRoute from "./routing/OpenRoute";
import { Spin } from "antd";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./commonComponents/ScrollToTop.js";
import Navbar from "./commonComponents/Navbar";

// Lazy Loaded Pages
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Contact = lazy(() => import("./pages/Contact/index.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs.jsx"));
const Product = lazy(() => import("./pages/Product/Product.jsx"));
const Ewaste = lazy(() => import("./pages/EWaste/Ewaste.jsx"));
const Warranty = lazy(() => import("./pages/Warranty/Warranty.jsx"));
const Downloads = lazy(() => import("./pages/Downloads/Downloads.jsx"));
const Operational = lazy(() => import("./pages/Operational/Operational.jsx"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="w-screen h-screen flex justify-center items-center">
            <Spin tip="Loading" size="large" />
          </div>
        }
      >
        <AnimatePresence mode="wait">
          <ScrollToTop />

          {/* Fixed Navbar */}
          <Navbar />

          {/* All Pages Start After Navbar */}
          <div className="pt-[10px] md:pt-[10px]">

            <Routes>
              <Route element={<OpenRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Product />} />
                <Route
                  path="/product-details/:productId"
                  element={<ProductDetails />}
                />
                <Route path="/e-waste" element={<Ewaste />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/warranty" element={<Warranty />} />
                <Route path="/download" element={<Downloads />} />
                <Route path="/videos" element={<Operational />} />
              </Route>
            </Routes>
          </div>
        </AnimatePresence>
      </Suspense>
    </Router>
  );
}

export default App;
