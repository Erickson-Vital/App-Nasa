import React, {createContext, useState, useEffect} from "react";
export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    
    const [isAuth, setIsAuth] = useState(true)

    // Caso o State estiver TRUE: Quer dizer que o usuario está logado
    // Caso estiver false: quer dizer que é a primeira vez do usuario e ele não esta logado

    return (
        <AuthContext.Provider value={{isAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;