import { Outlet } from 'react-router-dom'
import './App.css'
import NavMenu from './components/nav/NavMenu'

const App = () => {    
    return (
        <>
        <NavMenu />
        <Outlet />
        </>
    )
}

export default App
