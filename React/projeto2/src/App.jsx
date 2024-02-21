import './App.css'
import React from 'react'
import CardList from './components/CardList'
import Content from './components/Content'


function App() {

  return (
    <div className="App">
      <CardList className='CardList'/>
      <Content className='Content'/>
      <div className="Man">
        <img src="./src/assets/man.png" alt="" />
      </div>
      <div className="Star">
        <img src="./src/assets/star.png" alt="" />
      </div>
      <div className="Asterisk">
        <img src="./src/assets/Asterisk.png" alt=""/>
      </div>
      <div className="Bloco"></div>
    </div>
  )
}

export default App
