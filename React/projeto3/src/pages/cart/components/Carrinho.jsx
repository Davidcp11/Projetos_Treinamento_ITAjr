import { useContext } from "react"
import { MeuContexto } from "../../../Context"
import "./Carrinho.css"

import CartCard from "./basicos/CartCard"



export default function Carrinho(props) {
    const {carrinho, setCarrinho} = useContext(MeuContexto)
    const valorEntrega = 3.00

    const valorTotal = (carrinho) => {
        let total = 0;
        carrinho.forEach((element) => (
            total=total + element.preco * element.quantidade
        ))
        return total
    }
    

    return (
        <div className="Carrinho">
            <div className="Carrinho__lista" >
                {carrinho.map((element) => (
                    <CartCard
                        nome={element.nome}
                        quantidade={element.quantidade}
                        preco={element.preco}    
                    /> 
                ))}
            </div>
            <div className="Carrinho__total">
                <div className="Descricao">
                    <div>Total de itens</div>
                    <div>R$ {valorTotal(carrinho)}</div>
                </div>
                <div className="Descricao">
                    <div>Entrega</div>
                    <div>R$ {valorEntrega}</div>
                </div>
                <div className="Total">
                    <div>Total</div>
                    <div>R$ {valorTotal(carrinho) + valorEntrega}</div>
                </div>
                <button>CONFIRMAR PEDIDO</button>
            </div>
        </div>
    )
}