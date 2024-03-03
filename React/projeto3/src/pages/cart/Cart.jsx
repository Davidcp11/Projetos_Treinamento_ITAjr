import "./Cart.css"
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { CiBank } from "react-icons/ci";

import Endereco from "./components/Endereco";
import CartCard from "./components/basicos/CartCard"
import Carrinho from "./components/Carrinho";
import React, { useState } from "react";

export default function Cart(props) {
    const [botao, setBotao] = useState(null)

    function mudarBotao(id) {
        setBotao(id);
    }


    return (
        <div className="Cart__conteudo">
            <div className="Dados">
                <h2>Complete seu pedido</h2>
                <div style={{ backgroundColor: "#F3F2F2", borderRadius: "10px", padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="Title">
                        <FaLocationDot style={{ color: "#C47F17", height: "30px", width: "30px" }} />
                        <div className="Text">
                            <span>Endereço de Entrega </span>
                            Informe o endereço onde deseja receber seu pedido
                        </div>
                    </div>
                    <Endereco className="Endereco" />
                </div>
                <div className="Pagamento" style={{ backgroundColor: "#F3F2F2", borderRadius: "10px", padding: "20px" }}>
                    <div className="Title">
                        <MdAttachMoney style={{ color: "#8047F8", height: "30px", width: "30px" }} />
                        <div className="Text">
                            <span>Pagamento</span>
                            O pagamento é feito na entrega. Escolha a forma que deseja pagar
                        </div>
                    </div>
                    <div className="Conteudo">
                        <button
                            style={{ backgroundColor: botao == 1 ? '#EBE5F9' : '#E6E5E5', borderColor: botao == 1 ? '#8047F8' : "" }}
                            onClick={() => { mudarBotao(1) }}
                        ><FaMoneyCheck className="LogoPag" /> CARTÃO DE CRÉDITO</button>
                        <button
                            style={{ backgroundColor: botao == 2 ? '#EBE5F9' : '#E6E5E5', borderColor: botao == 2 ? '#8047F8' : "" }}
                            onClick={() => { mudarBotao(2) }}
                        ><CiBank className="LogoPag" /> CARTÃO DE DÉBITO</button>
                        <button
                            style={{ backgroundColor: botao == 3 ? '#EBE5F9' : '#E6E5E5', borderColor: botao == 3 ? '#8047F8' : "" }}
                            onClick={() => { mudarBotao(3) }}
                        ><FaMoneyBill className="LogoPag" /> DINHEIRO</button>
                    </div>
                </div>
            </div>
            <div className="Cart__carrinho">
                <h2>Cafés selecionados</h2>
                <Carrinho/>
            </div>
        </div>
    )
}