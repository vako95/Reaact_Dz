import MenuItem from "./components/MenuItem";



const Menu = ({ items }) => {

    return (
        <div className="menu">
            <ul className="menu_list">

                {items.map((item,index) => (
                    <MenuItem
                        item={item}
                        
                        key={index}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Menu;