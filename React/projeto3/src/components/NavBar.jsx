import { Link } from 'react-router-dom'
import './NavBar.css'
import { MeuContexto } from '../Context'
import { useContext } from 'react'

export default function NavBar(props) {

    const { carrinho, setCarrinho } = useContext(MeuContexto)

    return (
        <div className="Navbar">
            <div className="IconPage">
                <Link to="/">
                    <img src="./src/assets/Logo.svg" alt="" />
                </Link>
            </div>
            <div className="Actions">
                <div className="Location">
                    <img src="./src/assets/Point.svg" alt="" />
                    <p>
                        {props.cidade}, {props.estado}
                    </p>
                </div>
                <button className="Cart">
                    <Link to="/cart">
                        <img src="./src/assets/Cart.svg" alt="" />
                        {carrinho.length > 0 && (
                            <span className='QuantidadeCarrinho'>{carrinho.length}</span>
                        )}
                    </Link>
                </button>

                <button className="Plus">
                    <img src="./src/assets/IconPlus.svg" alt="" />
                </button>
            </div>
        </div>
    )
}