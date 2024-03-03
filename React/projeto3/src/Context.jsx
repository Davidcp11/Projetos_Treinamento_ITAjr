import React, { createContext, useContext, useState } from "react";


export const MeuContexto = createContext();

export const MeuContextoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    
    return (
        <MeuContexto.Provider value={{ carrinho, setCarrinho}}>
            {children}
        </MeuContexto.Provider>
    )
}
