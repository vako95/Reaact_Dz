import { useState } from 'react';
import './Menu.css';

const MenuItem = ({ item: { icon, name, dropdown, id } }) => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
        console.log(index)
    };

    return (


        <li className="dropdown">
            <div className="menu_item" >
                <div className="menu_icon">
                    <i onClick={() => handleToggle(id)} className={icon}></i>
                </div>
                <span className="menu_name">{name}</span>
            </div>
            {/* <div className="dropmenu" style={{display: openIndex === id ? '' : 'none'}}> */}
            <div className="dropmenu" style={{maxHeight: openIndex === id ? '600px' : '0px'}}>
                {dropdown && dropdown.map((dropItem, dropIndex) => (
                    <ul key={dropIndex}>
                        <li>{dropItem.name}</li>
                        <li>{dropItem.title}</li>
                        <li>{dropItem.date}</li>
                    </ul>
                ))}
            </div>
        </li>
    );
};

export default MenuItem;
