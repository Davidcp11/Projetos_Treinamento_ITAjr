import React from "react"
import './Card.css'

export default function Card(props){
    return(
        <div className="Card">
            <div className="Logo"><img src='./src/assets/Vector.png' alt="" /></div>
            <div className="Numb"><strong>{props.numb}</strong></div>
            <div className="Text">Lorem ipsum Lorem ipsum dolor amet</div>
        </div>
    )
}