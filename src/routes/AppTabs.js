import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';

import Home from '../../screens/Home/index'


const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
        activeColor="#000"
        barStyle={{ backgroundColor: '#000' }}
        shifting
        backBehavior
    >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: () => (<Entypo name="home" size={22} color={"#000"} />),
            }}
        />
    </Tab.Navigator>
);