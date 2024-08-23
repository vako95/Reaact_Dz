import './HideButton.css'



const HideButton = ({ onCollapsed, theme }) => {
    console.log(theme)
    return (

        <button onClick={() => onCollapsed()} className='hide_btn'>
            {theme.isSideBarCollapsed ? (  <span>Open</span>):(
                 <span>Close</span>
            )}
          
        </button>

    )
}

export default HideButton