import './App.css'

import React from "react";
import Dados from './components/basicos/Dados';
import Detalhes from './components/basicos/Datelhes';




export default (props) => {
    return (
        <div className="App">
            <div className="Chat">
                <p>Chat</p>
            </div>
            <div className="Cards">
                <Dados>
                </Dados>
            </div>
            <div className="Detalhes">
                <Detalhes></Detalhes>
            </div>
        </div>
    );
}