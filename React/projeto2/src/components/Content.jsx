import React from "react";
import './Content.css'

export default function Content(props){
    return(
        <div className="Content">
            <div className="Text1">
                    Listen to <br/>
                    your <span>heart</span> <br />
                    Dance with<br />
                    the <span>rhythm</span>
            </div>
            <hr align='left'/>
            <div className="Text2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget. Lorem ipsum dolor.
            </div>
            <div className="Botao">
                <button type="submit">Get Started</button>
            </div>
        </div>
    )
}