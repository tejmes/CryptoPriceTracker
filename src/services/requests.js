import axios from "axios";

export const getCoinData = async (coinId) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false&x_cg_demo_api_key=CG-EAQUWZjXpPRZPh22mExiAsUh`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export const getCoinMarketData = async (coinId) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1&precision=full&x_cg_demo_api_key=CG-EAQUWZjXpPRZPh22mExiAsUh`);
        return response.data
    } catch (e) {
        console.log(e);
    }
}

export const getMarketData = async (pageNumber = 1) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h&locale=en&precision=full&x_cg_demo_api_key=CG-EAQUWZjXpPRZPh22mExiAsUh`);
        return response.data
    } catch (e) {
        console.log(e);
    }
}

export const getWatchlistedCoins = async (pageNumber = 1, coinIds) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds}&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h&locale=en&precision=full&x_cg_demo_api_key=CG-EAQUWZjXpPRZPh22mExiAsUh`);
        return response.data
    } catch (e) {
        console.log(e);
    }
}