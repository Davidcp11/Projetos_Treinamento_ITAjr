import { useContext, useState } from 'react'
import Tag from './basicos/tag.jsx';
import './CofeeCard.css'
import { MeuContexto } from '../../../Context.jsx';

export default function CofeeCard(props) {
    const [count, setCount] = useState(1)
    const { carrinho, setCarrinho } = useContext(MeuContexto)


    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const AdicionarProduto = () => {
        let id = null;
        carrinho.forEach((element, index) => {
            if (element.nome === props.nome) {
                id = index
            }
        });
        if (id !== null) {
            setCarrinho(
                carrinho.map((produto) => {
                    if (produto.nome === props.nome) {
                        return { ...produto, quantidade: count}
                    } else {
                        return produto
                    }
                })
            )
            console.log(carrinho)
        } else {
            setCarrinho([...carrinho, {
                nome: props.nome,
                quantidade: count,
                preco: props.preco
            }])
            console.log(carrinho)
        }
    }


    return (
        <div className="Card">
            <div className="Cofee">
                <img src="./src/assets/Cofee.svg" alt="" />
            </div>
            <div className="Tags">
                {props.tags.map((tag) => (
                    <Tag key={tag} tag={tag} />
                ))}
            </div>
            <div className="Name">
                {props.nome}
            </div>
            <div className="Description">
                {props.descricao}
            </div>
            <div className="Buy">
                <div className="Price">
                    R$<span>{[props.preco]}</span>
                </div>
                <div className="Actions">
                    <div className="Counter">
                        <button onClick={decrement}>-</button>
                        {count}
                        <button onClick={increment}>+</button>
                    </div>
                    <div className="AddCart" onClick={AdicionarProduto}>
                        <button><img src="./src/assets/CartCard.svg" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}