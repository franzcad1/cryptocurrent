import React from "react";
import styled from "styled-components";
import { DarkTheme } from "@styled-icons/fluentui-system-regular";
import { DownArrow } from "@styled-icons/boxicons-regular";
import { CurrencyDollar } from "styled-icons/bootstrap";
import { SearchAlt } from "styled-icons/boxicons-regular";
import GeneralInfo from "../GeneralInfo/GeneralInfo";
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
  gap: 15px;
`;

const CurrencyIcon = styled.div`
  background: #191b1f;
  width: 33px;
  height: 33px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const SearchContainer = styled.div`
  max-width: 510px;
  height: 63px;
  background: #2c2f36;
  border-radius: 25px;
  display: flex;
  align-items: center;
`;
const SearchBar = styled.input`
  width: 70%;
  height: 30px;
  background: #2c2f36;
  font-size: 17px;
  font-weight: 500;
  font-style: normal;
  text-align: left;
  color: #ffffff;
  border: 0px;
`;

const ThemeContainer = styled.div`
  width: 67px;
  height: 63px;
  border-radius: 12px;
  background: #2c2f36;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

const ThemeIcon = styled(DarkTheme)`
  color: #FFFFFF
  width: 15px;
  height: 35px;
`;

const SearchIcon = styled(SearchAlt)`
  height: 21px;
  width: 21px;
  color: #FAFBFB;
  margin-left: 20px;
`;
const DownIcon = styled(DownArrow)`
  color: #00ff5f;
  width: 15px;
  height: 15px;
`;

const DollarIcon = styled(CurrencyDollar)`
  color: #00ff5f;
  width: 20px;
  height: 30px;
`;
export default function Navbar() {
  return (
    <>
      <MainContainer>
        <PagesContainer>
          <Page>Coins</Page>
          <Page>Portfolio</Page>
        </PagesContainer>
        <UtilsContainer>
          <SearchContainer>
            <SearchIcon/>
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
      <GeneralInfo />
    </>
  );
}
