import "../nav/Nav.scss"
import { useNavigate } from "react-router-dom"

const Nav = () => {

    const navigate = useNavigate();

    return (
        <>
            <nav>
                <ul>
                    <h4>Menu</h4>
                    <hr></hr>
                    <li><a className="links" onClick={() => navigate('/newUser')}>New User</a></li>
                    <li><a className="links" onClick={() => navigate('/newCategory')}>New Category</a></li>
                    <li><a className="links">categories</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav