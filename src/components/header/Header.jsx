import "../header/Header.scss"
import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate();

    return (
        <>
            <nav class="header">
                <img class="headerLogo" src="https://teltonika-iot-group.com/images/branches/iot-white.svg" onClick={() => navigate('/')} alt="foto" />
            </nav>
        </>
    )
}

export default Header