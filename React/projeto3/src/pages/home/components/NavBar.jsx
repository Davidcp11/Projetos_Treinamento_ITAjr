import './NavBar.css'


export default function NavBar(props){
    return (
        <div className="Navbar">
            <div className="IconPage">
                <img src="./src/assets/Logo.svg" alt="" />
            </div>
            <div className="Actions">
                <div className="Location">
                    <img src="./src/assets/Point.svg" alt="" />
                    {props.cidade}, {props.estado}
                </div>
                <button className="Cart">
                    <img src="./src/assets/Cart.svg" alt="" />
                </button>
                <button className="Plus">
                    <img src="./src/assets/IconPlus.svg" alt="" />
                </button>
            </div>
        </div>
    )
}