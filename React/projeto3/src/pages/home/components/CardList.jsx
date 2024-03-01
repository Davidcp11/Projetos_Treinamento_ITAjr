import './CardList.css'

export default function CardList(props){
    return (
        <div className='CardList'>
            <div className="Title">
                Nossos cafés
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}