import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from '../screens/Home';

export default () => (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
);