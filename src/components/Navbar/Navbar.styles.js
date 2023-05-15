import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { DarkTheme } from "@styled-icons/fluentui-system-regular";
import { DownArrow } from "@styled-icons/boxicons-regular";
import { CurrencyDollar } from "styled-icons/bootstrap";
import { SearchAlt } from "styled-icons/boxicons-regular";


export const MainContainer = styled.div`
  margin: auto;
  display: flex;
  height: 97px;
  background: #191b1f;
  align-items: center;
  justify-content: space-between;
`;
export const PagesContainer = styled.div`
  display: flex;
  margin-left: 30px;
`;

export const UtilsContainer = styled.div`
  display: flex;
  gap: 25px;
  margin-right: 13px;
`;

export const CurrencyContainer = styled.div`
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

export const CurrencyIcon = styled.div`
  background: #191b1f;
  width: 33px;
  height: 33px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Page = styled.div`
  display: flex;
  width: 140px;
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

export const SearchContainer = styled.div`
  max-width: 510px;
  height: 63px;
  background: #2c2f36;
  border-radius: 25px;
  display: flex;
  align-items: center;
`;
export const SearchBar = styled.input`
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

export const ThemeContainer = styled.div`
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

export const ThemeIcon = styled(DarkTheme)`
  color: #FFFFFF
  width: 15px;
  height: 35px;
`;

export const SearchIcon = styled(SearchAlt)`
  height: 21px;
  width: 21px;
  color: #fafbfb;
  margin-left: 20px;
`;
export const DownIcon = styled(DownArrow)`
  color: #00ff5f;
  width: 15px;
  height: 15px;
`;

export const DollarIcon = styled(CurrencyDollar)`
  color: #00ff5f;
  width: 20px;
  height: 30px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fafbfb;
  font-weight: 500;
  font-size: 23px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  &.${(props) => props.activeClassName} {
    background-color: #2c2f36;
  }
`;