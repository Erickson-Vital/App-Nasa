import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../../contexts/AuthContext";
import AuthStack from "./AuthStack";
import AppTabs from "./AppTabs";
import MainStack from './MainStack'

export default () => {
    const { isAuth } = useContext(AuthContext);
    return (
        <NavigationContainer>
            {isAuth ? <MainStack /> : <AuthStack />} 
            {/* Caso o usuario estiver logado ele mostra o: MainStack que seria o menu
            Caso ele não estiver ele mosta apenas as rotas inicias que estão no AuthStack */}
        </NavigationContainer>

    )
}