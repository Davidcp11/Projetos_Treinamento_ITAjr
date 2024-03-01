import './Intro.css'
import { FaShoppingCart } from "react-icons/fa";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import { PiCoffeeBold } from "react-icons/pi";



export default function Intro(props) {
    return (
        <div className="Intro">
            <div className="Text">
                <div className="Title">Encontre o café perfeito para qualquer hora do dia</div>
                <div className="Content">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</div>
            </div>
            <div className="Items">
                <div className="Item1">
                    <div className="Logo" style={{backgroundColor:'#C47F17', color:'white'}}><FaShoppingCart/></div> Compra simples e segura
                </div>
                <div className="Item2">
                <div className="Logo" style={{backgroundColor:'#574F4D', color:'white'}}><GiCardboardBoxClosed/></div> Embalagem mantêm o café intacto
                </div>
                <div className='Item3'>
                <div className="Logo" style={{backgroundColor:'#DBAC2C', color:'white'}}><IoMdTime/></div> Entrega rápida e rastreada
                </div>
                <div className="Item4">
                    <div className='Logo' style={{backgroundColor:'#8047F8', color:'white'}}><PiCoffeeBold /></div> O café chega fresquinho até você
                </div>
            </div>
            <img src="./src/assets/imagemCoffee.svg" alt="" />
        </div>
    )
}