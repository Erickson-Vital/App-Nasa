import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../screens/Login/index';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
    initialRouteName="Onboarding1"
    screenOptions={{
        headerShown: false
    }}
    >
        <Stack.Screen name="Login" component={Login} />

    </Stack.Navigator>
);