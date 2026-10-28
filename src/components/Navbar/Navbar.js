import React, { useState, useEffect, useRef } from "react";
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
  const isSearchLoading = useSelector((state) => state.search.isLoading);
  const [searchVal, setSearchVal] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const debounceRef = useRef(null);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchVal(val);
    if (val !== "") {
      setIsModalOpen(true);
      clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        dispatch(searchCoinData(val));
      }, 500);
    } else {
      setIsModalOpen(false);
      clearTimeout(debounceRef.current);
    }
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
          {isSearchLoading ? (
            <ResultContainer>Searching...</ResultContainer>
          ) : hasError ? (
            <ResultContainer>Rate limited — please wait a moment.</ResultContainer>
          ) : coins && coins.length > 0 ? (
            coins.map((coin) => (
              <ResultContainer key={coin.id} onClick={() => handleSubmit(coin)}>
                {coin.name}
              </ResultContainer>
            ))
          ) : (
            <ResultContainer>No results found.</ResultContainer>
          )}
        </ResultModal>
      )}
      <MarketDataBar />
    </>
  );
}
