import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import {Feather, Foundation} from '@expo/vector-icons';
import WatchlistScreen from "../screens/WatchlistScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'grey',
            tabBarStyle: {backgroundColor: '#181818'}
        }}>
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarIcon: ({focused, color}) => (<Feather name="home" size={focused ? 28 : 24} color={color}/>)
            }}/>
            <Tab.Screen name="Watchlist" component={WatchlistScreen} options={{
                tabBarIcon: ({focused, color}) => (<Foundation name="star" size={focused ? 28 : 24} color={color}/>)
            }}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;