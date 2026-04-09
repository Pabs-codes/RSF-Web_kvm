import React, { Suspense, lazy } from "react";
import "./styles.css";
// import Error from "./routes/Error";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));
const Service = lazy(() => import("./routes/Service"));
const Projects = lazy(() => import("./routes/Projects"));
const Products = lazy(() => import("./routes/Products"));
const Contact = lazy(() => import("./routes/Contact"));

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div style={{ padding: "1rem", textAlign: "center" }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      

      {/* <Error/> */}
    </div>
  );
}
