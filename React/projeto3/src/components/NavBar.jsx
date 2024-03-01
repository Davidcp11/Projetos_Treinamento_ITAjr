import { Link } from 'react-router-dom'
import './NavBar.css'


export default function NavBar(props) {
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
                    </Link>
                </button>

                <button className="Plus">
                    <img src="./src/assets/IconPlus.svg" alt="" />
                </button>
            </div>
        </div>
    )
}