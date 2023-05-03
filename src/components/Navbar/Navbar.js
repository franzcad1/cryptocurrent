import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  margin: auto;
  display: flex;
  max-width: 1900px;
  height: 97px;
  background: #191b1f;
  align-items: center;
  justify-content: space-between;
`;
const PagesContainer = styled.div`
  display: flex;
`;

const UtilsContainer = styled.div`
  display: flex;
  gap: 25px;
  margin-right: 13px;
`;

const CurrencyContainer = styled.div`
  width: 135px;
  height: 63px;
  border-radius: 12px;
  background: #2c2f36;
  font-size: 17px;
  font-weight: 500;
  font-style: normal;
  text-align: left;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Page = styled.div`
  display: flex;
  width: 167px;
  height: 57px;
  border-radius: 25px;
  background: #191b1f;
  color: #fafbfb;
  font-weight: 500;
  font-size: 23px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const SearchBar = styled.input`
  max-width: 510px;
  height: 63px;
  background: #2c2f36;
  font-size: 17px;
  font-weight: 500;
  font-style: normal;
  text-align: left;
  color: #ffffff;
  border-radius: 15px;
`;

const ThemeContainer = styled.div`
  width: 67px;
  height: 63px;
  border-radius: 12px;
  background: #2c2f36;
  cursor: pointer;
`;
export default function Navbar() {
  return (
    <MainContainer>
      <PagesContainer>
        <Page>Coins</Page>
        <Page>Portfolio</Page>
      </PagesContainer>
      <UtilsContainer>
        <SearchBar type="text" placeholder="Search..."></SearchBar>
        <CurrencyContainer>USD</CurrencyContainer>
        <ThemeContainer></ThemeContainer>
      </UtilsContainer>
    </MainContainer>
  );
}
