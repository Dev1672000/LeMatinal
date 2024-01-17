import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Home/Hero";
import HeroPage from "./components/HeroPage";
import Blog1 from "./components/Home/Blog1";
import Blog2 from "./components/Home/Blog2";
import Men from "./components/Home/Men";
import Navbarr from "./components/Navbarr";
import Footer from "./components/Footer";
import Routing from "./components/Routing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>

    <Routing/>
    </BrowserRouter>
  );
}

export default App;
