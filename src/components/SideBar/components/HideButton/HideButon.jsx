import './HideButton.css'


const HideButton = ({ name ,onSide,isCollapsed}) => {
console.log(onSide)
    return (
        <button className='btn_container'>
            {!isCollapsed && (
 <div className="hide_title">
 <span className='hide_span'>{name}</span>
</div>
            )}
           
            <div className='button_i'>
                
                <i onClick={onSide} className={`fi ${!isCollapsed ? 'fi-sr-caret-left' : 'fi-sr-caret-right'}`}></i>
            </div>
        </button>

    )
}
export default HideButton