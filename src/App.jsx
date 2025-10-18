import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hader from "./components/Hader";
import Who from "./components/Who";
import Aos from "aos";
import "aos/dist/aos.css";
import Products from "./components/Products";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  },[]);
  return (
    <div className="flex flex-col ">
      <Hader />
      <Who />
      <Products/>
    </div>
  );
}

export default App;
