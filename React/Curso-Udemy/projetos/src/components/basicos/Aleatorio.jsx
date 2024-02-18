import React from "react";

export default (props) => {
    const num = Math.round(Math.random() * (props.max - props.min) + props.min)
    return (
        <div>
            <h2>Numero Aleatorio</h2>
            <p>
                Min: {props.min}
            </p>
            <p>
                Max: {props.max}
            </p>
            <p>Numero obtido: {num} </p>
        </div>
    )
}