import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/Home/';

import MainTab from '../routes/MainTab';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerShown: false
        }}
    >
        {/* <Stack.Screen
            name="MainTab"
            component={MainTab}
        /> */}

        <Stack.Screen
            name="Home"
            component={Home}
        />
    </Stack.Navigator>
);