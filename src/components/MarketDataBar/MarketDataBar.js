import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGlobalData } from "../../store/global/globalActions";
import { convertedNumber } from "../../utils/convertedNumber";
import ProgressBar from "../ProgressBar/ProgressBar";
import {
  MainContainer,
  TextContainer,
  TextWithBarContainer,
  CoinIcon,
  DownIcon,
  UpIcon,
} from "./MarketDataBar.styles";
export default function MarketDataBar() {
  const dispatch = useDispatch();
  const globalData = useSelector((state) => state.global.data);

  useEffect(() => {
    dispatch(getGlobalData()); // fires immediately
  }, []);//eslint-disable-line

  return (
    <MainContainer>
      {globalData && (
        <>
          <TextContainer>
            Coins: {globalData.active_cryptocurrencies}
          </TextContainer>
          <TextContainer>Exchange: {globalData.markets} </TextContainer>
          <TextContainer>
            Market Cap: ${convertedNumber(globalData.total_market_cap.cad)}
            {globalData.market_cap_change_percentage_24h_usd >= 0 ? (
              <UpIcon />
            ) : (
              <DownIcon />
            )}
          </TextContainer>
          <TextWithBarContainer>
            • ${convertedNumber(globalData.total_volume.cad)}
            <ProgressBar
              width={
                (globalData.total_volume.cad /
                  globalData.total_market_cap.cad) *
                100
              }
            />
          </TextWithBarContainer>
          <TextWithBarContainer>
            <CoinIcon
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
              alt="btc img"
            />
            {globalData.market_cap_percentage.btc.toFixed(0)}%
            <ProgressBar width={globalData.market_cap_percentage.btc} />
          </TextWithBarContainer>
          <TextWithBarContainer>
            <CoinIcon
              src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
              alt="etc img"
            />
            {globalData.market_cap_percentage.eth.toFixed(0)}%
            <ProgressBar width={globalData.market_cap_percentage.eth} />
          </TextWithBarContainer>
        </>
      )}
    </MainContainer>
  );
}
