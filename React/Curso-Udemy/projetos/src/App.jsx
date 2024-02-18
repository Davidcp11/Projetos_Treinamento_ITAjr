import './App.css'

import React from "react";
import Card from './components/layout/Card';
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from './components/basicos/ComParametro';


export default (props) => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo='#04 - Aleatorio' color='#080'>
                    <Aleatorio
                        min={0}
                        max={10}
                    />
                </Card>
                <Card titulo='Com parametro' color='#00F'>
                    <ComParametro
                        titulo='Componente com paremetro'
                        aluno='Pedro'
                        nota={7.6}
                    />
                </Card>
            </div>
        </div>
    );
}