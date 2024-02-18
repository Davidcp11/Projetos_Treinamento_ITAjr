import './Dados.css'

import React from "react";


export default (props) => {
    return (
        <div className="Dados">
            <div className="Inputs">
                <div className="User">
                    <p>USERNAME</p>
                    <input type="email" name="email" />
                </div>
                <div className="Senha">
                    <p>PASSWORD</p>
                    <input type="password" name="senha" />
                </div>
            </div>
            <div className="Get">
                <p>Get Started</p>
            </div>
        </div>
    )
}