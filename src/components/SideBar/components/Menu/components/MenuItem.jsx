import { NavLink } from 'react-router-dom';
import './MenuItem.css'

const MenuItem = ({ name, icon, isCollapsed }) => {
console.log(isCollapsed)
    return (

        <li className='menuLi'>
            <NavLink>
                <div className='menu_content'>
                    <div className='item_icon'>
                        <i className={icon}></i>
                        
                    </div>
                  
                  
                    {!isCollapsed && (
                      <div className="menu_title">
                      <span className='menu_span'>{name}</span>
                  </div>
                    )}

                </div>
            </NavLink>
        </li>


    )
}

export default MenuItem;