import CardList from './components/CardList'
import CofeeCard from './components/CofeeCard'
import Intro from './components/Intro'
import { useState } from 'react'


export default function Home(props) {
    const [produtos, setPropodutos] = useState([{
        tags: ['TRADICIONAL'],
        nome: "Expresso Tradicional",
        descricao: "O tradicional café feito com água quente e grãos moídos",
        preco: 10.00
    },
    {
        tags: ['TRADICIONAL', 'GELADO'],
        nome: "Expresso Gelado",
        descricao: "O tradicional café feito com água quente e grãos moídos",
        preco: 10.00
    }])
    return (
        <>
            <Intro />
            <CardList>
                {produtos.map((card) => (
                    <CofeeCard key={card.nome}
                        tags={card.tags}
                        nome={card.nome}
                        descricao={card.descricao}
                        preco={card.preco}
                    ></CofeeCard>
                ))}
            </CardList>
        </>
    )
}
