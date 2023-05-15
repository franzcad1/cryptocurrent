import React from "react";
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
  ThemeIcon
} from "./Navbar.styles";
export default function Navbar() {
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
            <SearchBar type="text" placeholder="Search..."></SearchBar>
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
      <MarketDataBar />
    </>
  );
}
