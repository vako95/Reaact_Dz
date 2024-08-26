import { Outlet } from 'react-router-dom'

import './MainLayout.css'


const MainLayout = () => {
    return (
        <div className="main">
         <Outlet />
        </div>
    )
}

export default MainLayout