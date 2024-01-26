import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CoinScreen from "../screens/CoinScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName='Root' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Root' component={BottomTabNavigator}/>
            <Stack.Screen name='CoinScreen' component={CoinScreen}/>
        </Stack.Navigator>
    )
}

export default Navigation;