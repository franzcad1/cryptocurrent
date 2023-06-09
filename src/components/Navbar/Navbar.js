import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MarketDataBar from "../MarketDataBar/MarketDataBar";
import { searchCoinData } from "../../store/search/searchActions";
import {
  MainContainer,
  PagesContainer,
  Page,
  StyledLink,
  UtilsContainer,
  SearchContainer,
  SearchIcon,
  SearchBar,
  CurrencyContainer,
  CurrencyIcon,
  DollarIcon,
  DownIcon,
  ThemeContainer,
  ThemeIcon,
  ResultContainer,
  ResultModal,
  Error,
  ErrorIcon,
} from "./Navbar.styles";

export default function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coins = useSelector((state) => state.search.coins);
  const hasError = useSelector((state) => state.search.hasError);
  const [searchVal, setSearchVal] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (e) => {
    if (e.target.value !== "") {
      dispatch(searchCoinData(e.target.value));
      setTimeout(() => {
        setIsModalOpen(true);
      }, 1000);
    } else {
      setIsModalOpen(false);
    }
    setSearchVal(e.target.value);
  };

  const handleSubmit = (coin) => {
    navigate(`/coin/${coin.id}`);
    setSearchVal('');
    setIsModalOpen(false);
  }

  return (
    <>
      <MainContainer>
        <PagesContainer>
          <Page>
            <StyledLink to="/" activeClassName="active">
              Coins
            </StyledLink>
          </Page>
          <Page>
            <StyledLink to="/portfolio" activeClassName="active">
              Portfolio
            </StyledLink>
          </Page>
        </PagesContainer>
        <UtilsContainer>
          <SearchContainer>
            <SearchIcon />
            <SearchBar
              type="text"
              placeholder="Search..."
              value={searchVal}
              onChange={(e) => handleSearchChange(e)}
            />
          </SearchContainer>
          <CurrencyContainer>
            <CurrencyIcon>
              <DollarIcon />
            </CurrencyIcon>
            CAD
            <DownIcon />
          </CurrencyContainer>
          <ThemeContainer onClick={() => props.handleThemeChange()}>
            <ThemeIcon />
          </ThemeContainer>
        </UtilsContainer>
      </MainContainer>
      {isModalOpen && (
        <ResultModal>
          {coins &&
            coins.map((coin) => (
              <ResultContainer onClick={() => handleSubmit(coin)}>
                {coin.name}
              </ResultContainer>
            ))}
        </ResultModal>
      )}
      <MarketDataBar />
    </>
  );
}
