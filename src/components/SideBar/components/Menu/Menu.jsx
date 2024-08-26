
import MenuItem from './components/MenuItem';


import './Menu.css'

const Menu = ({ items, isCollapsed }) => {

    return (
        <nav className="menu">
            <ul className='menu_list'>
                {items.map((item, index) => (
                    <MenuItem
                        key={index}
                        name={item.name}
                        icon={item.icon}
                        dropdown={item.collapsed}
                        isCollapsed={isCollapsed}
                    />
                ))}
            </ul>
        </nav>
    )
}

export default Menu;