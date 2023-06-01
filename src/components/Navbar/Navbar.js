import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MarketDataBar from "../MarketDataBar/MarketDataBar";
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
} from "./Navbar.styles";
import { searchCoinData } from "../../store/search/searchActions";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.search.data);
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

  useEffect(() => {
    console.log(data);
  }, [isModalOpen]);

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
          <ThemeContainer>
            <ThemeIcon />
          </ThemeContainer>
        </UtilsContainer>
      </MainContainer>
      {isModalOpen && (
        <ResultModal>
          <ResultContainer></ResultContainer>
          {data &&
            data.data.map((coin) => (
              <ResultContainer onClick={() => navigate(`/coin/${coin.id}`)}>{coin.name}</ResultContainer>
            ))}
        </ResultModal>
      )}
      <MarketDataBar />
    </>
  );
}
