import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Section1 from "./assets/pages/Section1";
import Section2 from "./assets/pages/Section2";
import Section4 from "./assets/pages/Section4";
import Section3 from "./assets/pages/Section3";
import Footer from "./assets/components/Footer";
import Section5 from "./assets/pages/Section5";
import Section6 from "./assets/pages/Section6";
import Section7 from "./assets/pages/Section7";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Footer />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section2 />
      <Navbar />
      <Section1 />
      <Section3 />
      <BrowserRouter>
        <Routes>
          <Route />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
