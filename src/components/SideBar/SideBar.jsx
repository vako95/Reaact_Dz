import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import HideButton from './components/HideButton/HideButton'

import Logo from './components/Logo/Logo'
import Menu from './components/Menu/Menu'
import LogoSvg from './components/assets/img/logo.svg'
import './SideBar.css'


const SideBar = () => {
    const { theme, onCollpased } = useContext(ThemeContext)

    const items = [
        {
            "id":1,
            "name": 'Dashboard',
            "icon": 'fi fi-sr-apps',
            "dropdown": []
        },
        {
            "id":2,
            "name": 'Dashboard',
            "icon": 'fi fi-sr-shopping-cart',
            "dropdown": [
                {
                    "name":'First Item',
                    "title":'First Item',
                    "date":'First Item',
                    "href":'/#'
                }
            ]
        },
        {
            "id":3,
            "name": 'Dashboard',
            "icon": 'fi fi-sr-shopping-cart',
            "dropdown": []
        },
        {
            "name": 'Dashboard',
            "icon": 'fi fi-sr-shopping-cart',
            "dropdown": []
        },
        {
            "id":4,
            "name": 'Dashboard',
            "icon": 'fi fi-sr-shopping-cart',
            "dropdown": [
                {
                    "name":'First Item',
                    "href":'/#'
                }
            ]
        },

    ]
    const sideCol = theme.isSideBarCollapsed ? 'collapsed' : ''
    return (
        <div className={`side ${sideCol}`}>
            
            <Logo
                logo={LogoSvg}
                title="Dazel"
                isCollpased={theme.isSideBarCollapsed}
            />
            <Menu items={items} 
              isCollpased={theme.isSideBarCollapsed}
            />
            <HideButton 
            onCollapsed={onCollpased}
            theme={theme}
            />
        </div>
    )
}

export default SideBar;