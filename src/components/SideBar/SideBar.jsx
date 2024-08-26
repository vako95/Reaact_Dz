import Logo from './components/Logo/Logo'
import Menu from './components/Menu/Menu'
import HideButton from './components/HideButton/HideButon'
import { useSelector, useDispatch } from 'react-redux'
import { OPEN_BAR } from '../../store/Side/SideSlice'
import { useMemo } from 'react'

import SideLogo from './components/assets/img/logo.svg'
import './SideBar.css'

const SideBar = () => {
    const { isCollapsed } = useSelector((state) => state.side);
    const dispatch = useDispatch();

    const sideHide = () => {
        dispatch(OPEN_BAR())
    }
    const items = [
        {
            "name": "Dashboard",
            "icon": "fi fi-sr-apps",
            "dropdown": []
        },
        {
            "name": "E-Commerce",
            "icon": "fi-sr-shopping-cart",
            "dropdown": [
                {
                    "title": "File1"
                },
                {
                    "title": "File2"
                }
            ]
        },
        {
            "name": "Project",
            "icon": "fi fi-sr-assept-document",
            "dropdown": []
        },
        {
            "name": "Contact",
            "icon": "fi fi-sr-comment-user",
            "dropdown": [
                {
                    "title": "File1"
                },
                {
                    "title": "File2"
                }
            ]
        },
        {
            "name": "Finance",
            "icon": "fi fi-sr-money",
            "dropdown": []
        },
        {
            "name": "File Manager",
            "icon": "fi fi-sr-folder",
            "dropdown": []
        },
        {
            "name": "Chat",
            "icon": "fi fi-sr-comment-alt",
            "dropdown": []
        },
        {
            "name": "Calendar",
            "icon": "fi fi-sr-calendar",
            "dropdown": []
        },
    ]
    const cool = isCollapsed ? "collapsed" : ""
    return (
        <div className={`side ${cool}`}>
            <Logo
                img={SideLogo}
                name="Dazel"
                isCollapsed={isCollapsed}
            />
            <Menu
                items={items}
                isCollapsed={isCollapsed}
            />
            <HideButton
                name="Hide Menu"
                onSide={sideHide}
                isCollapsed={isCollapsed}

            />
        </div>
    )
}

export default SideBar;