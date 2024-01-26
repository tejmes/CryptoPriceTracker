import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, ActivityIndicator} from 'react-native';
import CoinHeader from "./components/CoinHeader";
import styles from "./styles"
import {AntDesign} from "@expo/vector-icons";
import {LineChart} from 'react-native-wagmi-charts';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useRoute} from "@react-navigation/native";
import {getCoinData, getCoinMarketData} from '../../services/requests'

const CoinScreen = () => {
    const [coin, setCoin] = useState(null);
    const [coinMarketData, setCoinMarketData] = useState(null);
    const route = useRoute();
    const {params: {coinId}} = route;

    const [loading, setLoading] = useState(false);
    const [usdValue, setUsdValue] = useState("");
    const fetchCoinData = async () => {
        setLoading(true);
        const fetchedCoinData = await getCoinData(coinId);
        const fetchedCoinMarketData = await getCoinMarketData(coinId);
        setCoin(fetchedCoinData);
        setCoinMarketData(fetchedCoinMarketData);
        setUsdValue(fetchedCoinData.market_data.current_price.usd.toString());
        setLoading(false);
    }

    useEffect(() => {
        fetchCoinData();
    }, [])

    if (loading || !coin || !coinMarketData) {
        return <ActivityIndicator size="large"/>
    }

    const {
        id,
        image: {small},
        symbol,
        name,
        market_data: {market_cap_rank, current_price, price_change_percentage_24h}
    } = coin;

    const {prices} = coinMarketData;
    const data = prices.map(([timestamp, value]) => ({timestamp, value}));

    const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';
    const chartColor = current_price.usd > prices[0][1] ? "#16c784" : "#ea3943";
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={{paddingHorizontal: 10}}>
            <CoinHeader
                coinId={id}
                image={small}
                symbol={symbol}
                marketCapRank={market_cap_rank}
            />
            <View style={styles.priceContainer}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.currentPrice}>${current_price.usd}</Text>
                </View>
                <View style={{
                    backgroundColor: percentageColor,
                    paddingHorizontal: 3,
                    paddingVertical: 8,
                    borderRadius: 5,
                    flexDirection: 'row'
                }}>
                    <AntDesign name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
                               size={12}
                               color={'white'}
                               style={{alignSelf: 'center', marginRight: 5}}/>
                    <Text style={styles.priceChange}>{price_change_percentage_24h.toFixed(2)} %</Text>
                </View>
            </View>
            <GestureHandlerRootView>
                <LineChart.Provider data={data}>
                    <LineChart width={screenWidth} height={screenWidth / 2}>
                        <LineChart.Path color={chartColor}/>
                        <LineChart.CursorCrosshair color='white'>
                            <LineChart.Tooltip textStyle={styles.toolTip}/>
                        </LineChart.CursorCrosshair>
                    </LineChart>
                </LineChart.Provider>
            </GestureHandlerRootView>
        </View>
    );
};

export default CoinScreen;