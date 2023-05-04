import "./App.css";
import Coin from "./pages/Coin/Coin";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coin />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
