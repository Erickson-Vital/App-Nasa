import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AppTabs from './AppTabs'

const Stack = createStackNavigator();

export default () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="AppTabs"
                component={AppTabs}
            />
        </Stack.Navigator>
    )
}