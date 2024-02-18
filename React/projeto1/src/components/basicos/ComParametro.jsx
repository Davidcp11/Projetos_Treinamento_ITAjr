import React from "react";


export default (props) => {
    const sit = props.nota >= 7 ? 'aprovado':'reprovado'
    return(
        <div>
            <h2>{props.titulo}</h2>
            <p>
                O aluno {props.aluno} tem nota {props.nota} e estaa {sit}
            </p>
        </div>
    )
}