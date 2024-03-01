
import './App.css'
import NavBar from './components/NavBar'

import { Outlet } from 'react-router-dom'


function App() {

  return (
    <div className="App">
        <NavBar
          cidade="Porto Alegre"
          estado="RS"
        />
        <Outlet />
    </div>
  )
}

export default App
