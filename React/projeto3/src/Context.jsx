import React, { createContext, useContext, useState } from "react";


export const MeuContexto = createContext();

export const MeuContextoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([])
    
    const adicionarNoCarrinho = (produto) => {
        setCarrinho([...carrinho, {
            nome: produto.nome,
            quantidade: produto.quantidade,
            preco: produto.preco
        }]);
    };

    const removerDoCarrinho = (produto) => {
        setCarrinho(carrinho.filter(a => a.nome !== produto.nome))
    }

    return (
        <MeuContexto.Provider value={{ carrinho, setCarrinho}}>
            {children}
        </MeuContexto.Provider>
    )
}
