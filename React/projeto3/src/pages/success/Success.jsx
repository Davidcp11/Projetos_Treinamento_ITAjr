import './Success.css'

import NavBar from "../home/components/NavBar"
import { FaLocationDot} from "react-icons/fa6";
import { PiClockCountdownFill } from "react-icons/pi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";




export default function Success(props) {
    return (
        <div className="Success">
            <NavBar
                cidade='Porto Alegre'
                estado='RS'
            />
            <div className="Title">
                Uhu! Pedido confirmado
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </div>
            <div className="Content">
                <div className="Components">
                    <div className="Item">
                        <div className="Logo" style={{backgroundColor:'#8047F8'}}><FaLocationDot/></div> <p>Entrega em <span>{props.rua}, {props.numero}</span> <br /> {props.bairro} - {props.cidade}, {props.estado}</p>
                    </div>
                    <div className="Item">
                        <div className="Logo" style={{backgroundColor:'#DBAC2C'}}><PiClockCountdownFill/></div> <p>Previsão de entrega <br /><span>20 min - 30 min </span></p>
                    </div>
                    <div className="Item">
                        <div className="Logo" style={{backgroundColor:'#C47F17'}}><RiMoneyDollarCircleFill/></div> <p>Pagamento na entrega <br /> <span>{props.pagamento}</span></p>
                    </div>
                </div>
                <div className="Image">
                    <img src="./src/assets/Success.svg" alt="" />
                </div>
            </div>
        </div>
    )
}