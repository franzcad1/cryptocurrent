# CryptoCurrent

A cryptocurrency portfolio tracker built with React and Redux, powered by the CoinGecko API.

**Live Demo:** [cryptocurrent.vercel.app](https://cryptocurrent.vercel.app)

---

## Features

- Real-time cryptocurrency prices and market data
- Bitcoin price and 24h volume charts
- Coin detail page with price history and range selection (1d / 7d / 30d / 90d / 1y / Max)
- Portfolio tracking — add and manage purchased coins
- Search with per-query caching and debounce
- Dark / light theme toggle
- Graceful rate limit handling with countdown retry and user feedback
- Skeleton loading states throughout

## Tech Stack

- **React** — component architecture, hooks
- **Redux + Redux Thunk** — global state and async API calls
- **Styled Components** — theming and component styles
- **CoinGecko API** — free tier market data
- **Recharts** — price and volume charts
- **Vercel** — deployment

## Notes

This project uses CoinGecko's free API, which has rate limits. API calls are staggered on load and responses are cached locally to minimise requests.

---

Built by [Franz Cadiente](https://github.com/franzcad1)
