
import { Link } from 'react-router-dom';
import './Logo.css'

const Logo = ({ name, img, isCollapsed }) => {

    return (

        <div className="logo">
            {isCollapsed ? (
                <figure className="collapse_container">
                    <img className='logoImg_coolaps' src={img} alt="" />
                </figure>
            ) : (
                <Link>
                    <div className="img_container">
                        <img className='logoImg' src={img} alt="" />
                    </div>
                    <div className="name_container">
                        <span className='logoName'>{name}</span>
                    </div>
                </Link>

            )}


        </div>
    )
}

export default Logo;