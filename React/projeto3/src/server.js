import express from 'express'
import cors from "cors"

const app = express()
const port = 3333
app.use(express.json())


const corsOptions = {
    origin: "http://localhost:5173",
};


app.use(cors(corsOptions));


app.get('/api/catalogo', (req, res) => {
    const dados = [
        {
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
        }
    ];
    res.json(dados);
})

app.listen(port, () => {

    console.log('API rodando')
})
