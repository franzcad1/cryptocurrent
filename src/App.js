import "./App.css";
import Coin from "./pages/Coin/Coin";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import Home from "./pages/Home/Home";
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: #1f2128; 
  };
`;
function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/coin" element={<Coin />} />
      </Routes>
    </>
  );
}

export default App;
