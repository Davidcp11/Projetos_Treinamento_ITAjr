import CartCard from "./basicos/CartCard"



export default function Carrinho(props) {

    return (
        <div className="Carrinho">
            <CartCard
                quantidade={2}
                preco={10}
            />
        </div>
    )
}