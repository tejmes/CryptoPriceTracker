import React from 'react';
import {Image, Text, View, Pressable} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import styles from './styles';
import {useNavigation} from "@react-navigation/native";
import CoinScreen from "../../screens/CoinScreen";

const CoinItem = ({marketCoin}) => {
    const {
        id,
        image,
        name,
        market_cap_rank,
        symbol,
        price_change_percentage_24h,
        current_price,
        market_cap
    } = marketCoin;

    const navigation = useNavigation();

    const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';

    const normalizeMarketCap = (market_cap) => {
        if (market_cap > 1_000_000_000_000) {
            return `${Math.floor(market_cap / 1_000_000_000_000)} T`;
        }
        if (market_cap > 1_000_000_000) {
            return `${Math.floor(market_cap / 1_000_000_000)} B`;
        }
        if (market_cap > 1_000_000) {
            return `${Math.floor(market_cap / 1_000_000)} M`;
        }
        if (market_cap > 1_000_000) {
            return `${Math.floor(market_cap / 1_000_000)} K`;
        }
        return market_cap;
    };

    return (
        <Pressable style={styles.coinContainer} onPress={() => navigation.navigate("CoinScreen", {coinId: id})}>
            <Image source={{uri: image}}
                   style={{width: 30, height: 30, marginRight: 10, alignSelf: 'center'}}/>
            <View>
                <Text style={styles.title}>{name}</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.rankContainer}>
                        <Text style={styles.rank}>{market_cap_rank}</Text>
                    </View>
                    <Text style={styles.text}>{symbol.toUpperCase()}</Text>
                    <AntDesign name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
                               size={12}
                               color={percentageColor}
                               style={{alignSelf: 'center', marginRight: 5}}/>
                    <Text style={{color: percentageColor}}>{price_change_percentage_24h.toFixed(2)} %</Text>
                </View>
            </View>
            <View style={{marginLeft: 'auto', alignItems: 'flex-end'}}>
                <Text style={styles.title}>{current_price.toFixed(2)}</Text>
                <Text style={{color: 'white'}}>MCap {normalizeMarketCap(market_cap)}</Text>
            </View>
        </Pressable>
    );
}

export default CoinItem;