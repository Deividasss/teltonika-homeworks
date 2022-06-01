import "../header/Header.scss"
import {useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate();

    return (
        <>
            <nav class="header">
                <a class="headerLogo" onClick={()=>navigate('/')}>AppLogo</a>
            </nav>
        </>
    )
}

export default Header