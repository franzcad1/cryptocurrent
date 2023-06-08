import "./App.css";
import React, { Component } from "react";
import Coin from "./pages/Coin/Coin";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import Home from "./pages/Home/Home";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${props => props.theme.bodyBackground};
  };
`;

const lightTheme = {
  main: "#191B1F ",
  secondary: "#F5F5F5",
  background: "#FCFCFC",
  bodyBackground: '#ffffff'
};

const darkTheme = {
  main: "#FFFFFF",
  secondary: " #2C2F36",
  background: "#191b1f",
  bodyBackground: '#1f2128'
};

export default class App extends Component {
  state = {
    isDarkTheme: !!JSON.parse(localStorage.getItem("theme")),
  };

  handleThemeChange = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme });
    localStorage.setItem("theme", !this.state.isDarkTheme);
  };

  render() {
    return (
      <ThemeProvider theme={this.state.isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Navbar handleThemeChange={this.handleThemeChange}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/coin/:coinID" element={<Coin />} />
        </Routes>
      </ThemeProvider>
    );
  }
}
