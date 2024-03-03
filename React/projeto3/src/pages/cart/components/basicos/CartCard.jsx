import { useContext, useState } from "react"
import { IoTrashOutline } from "react-icons/io5";

import './CartCard.css'
import { MeuContexto } from "../../../../Context";

export default function CartCard(props) {
    const [count, setCount] = useState(props.quantidade)
    const { carrinho, setCarrinho } = useContext(MeuContexto)

    function inc() {
        let quant = count + 1
        setCarrinho(
            carrinho.map((produto) => {
                if (produto.nome === props.nome) {
                    return { ...produto, quantidade: quant }
                } else {
                    return produto
                }
            })
        )

        setCount(count + 1)
    }


    function dec() {
        if (props.quantidade > 1) {
            let quant = count - 1
            setCarrinho(
                carrinho.map((produto) => {
                    if (produto.nome === props.nome) {
                        return { ...produto, quantidade: quant }
                    } else {
                        return produto
                    }
                })
            )
            setCount(count - 1)
        }
    }

    function removerProduto() {
        setCarrinho(carrinho.filter((element) => (
            element.nome !== props.nome
        )))
    }
    return (
        <div className="CartCard">
            <img src="src\assets\Cofee.svg" alt="" />
            <div className="Conteudo">
                <div className="Acoes">
                    {props.nome}
                    <div className="Botoes">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            width: '80px',
                            backgroundColor: "#E6E5E5",
                            borderRadius: '5px',
                        }}>
                            <button onClick={dec} style={{ color: "#8047F8", cursor: "pointer", fontSize: '20px' }}>-</button>
                            {props.quantidade}
                            <button onClick={inc} style={{ color: "#8047F8", cursor: "pointer", fontSize: '20px' }}>+</button>
                        </div>

                        <div style={{ backgroundColor: "#E6E5E5", borderRadius: '5px' }}>
                            <button onClick={removerProduto} style={{ color: 'black', cursor: 'pointer' }}>
                                <IoTrashOutline style={{ color: "#8047F8" }} /> REMOVER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Preco">
                R$ {props.preco}
            </div>
        </div>
    )
}