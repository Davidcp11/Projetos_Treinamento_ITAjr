import { useState } from "react"
import { IoTrashOutline } from "react-icons/io5";

import './CartCard.css'

export default function CartCard(props) {
    const [count, setCount] = useState(props.quantidade)

    function inc() {
        props.quantidade = count + 1;
        setCount(count + 1);
    }

    function dec() {
        if (count > 1) {
            props.quantidade = count - 1;
            setCount(count - 1);
        }
    }

    return (
        <div className="CartCard">
            <div className="Conteudo">
                <img src="" alt="" />
                <div className="Acoes">
                    {props.nome}
                    <div className="Botoes">
                        <div style={{ backgroundColor: "#E6E5E5", borderRadius:'5px'}}>
                            <button onClick={dec} style={{ color: "#8047F8" }}>-</button>
                            {count}
                            <button onClick={inc} style={{ color: "#8047F8" }}>+</button>
                        </div>

                        <div style={{ backgroundColor: "#E6E5E5", borderRadius:'5px'}}>
                            <button>
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