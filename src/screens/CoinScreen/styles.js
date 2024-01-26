import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    priceContainer: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        color: 'white',
        fontSize: 15
    },
    currentPrice: {
        color: 'white',
        fontSize: 30,
        fontWeight: '600',
        letterSpacing: 1
    },
    priceChange: {
        color: 'white',
        fontSize: 17,
        fontWeight: '500'
    },
    toolTip: {
        color: 'white'
    }
});

export default styles;