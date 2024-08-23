import s from './Logo.module.css'


const Logo = ({ logo, title }) => {
    return (
        <div className={s.logo}>
            <div className={s.logo_container}>
                <img className={s.logo_img} src={logo} alt="" />
            </div>
            <span className={s.logo_title}>{title}</span>
        </div>
    )
}

export default Logo;