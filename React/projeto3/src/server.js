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
            nome: "Expresso Tradicional",
            tags: ["TRADICIONAL"],
            descricao: "Cafe comum",
            preco: 10
        },
        {
            nome: "Expresso Gelado",
            tags: ["TRADICIONAL", "GELADO"],
            descricao: "Cafe comum gelado",
            preco: 15
        }
    ];
    res.json(dados);
})

app.listen(port, () => {

    console.log('API rodando')
})
