import React from "react";
import './CardList.css'
import Card from "./layout/Card";

export default function CardList(props){
    return(
        <div className="CardList">
            <Card className='Card'
                numb = '168'
            />
            <Card className='Card'
                numb = '425K'
            />
            <Card className='Card'
                numb = '4.9'
            />
            
        </div>
    )
}