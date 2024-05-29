import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Home from '../screens/Home';
import Start from './MainTab'
import CharDetails from '../screens/CharDetails';

export default () => (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />        
        <Stack.Screen name="CharDetails" component={CharDetails} />
    </Stack.Navigator>
);