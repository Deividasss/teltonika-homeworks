import "../nav/Nav.scss"
import { useNavigate } from "react-router-dom"
import { Dropdown } from "react-bootstrap";



const Nav = () => {

    const navigate = useNavigate();

    return (
        <>
            <nav>
                <ul className="navLinks">
                    <h4>Menu</h4>
                    <hr></hr>
                    <li><a className="links" onClick={() => navigate('/newUser')}>New User</a></li>
                    <li><a className="links" onClick={() => navigate('/newCategory')}>New Category</a></li>
                    <Dropdown>
                        <Dropdown.Toggle className="dropTogle" variant="none" id="dropdown-autoclose-true" >Users Info</Dropdown.Toggle>
                        <Dropdown.Menu className="categoriesDropDown">
                            <li><a className="dropdownLinks" onClick={() => navigate('/lithuania')}>Lithuania</a></li>
                            <li><a className="dropdownLinks" onClick={() => navigate('/poland')}>Poland</a></li>
                            <li><a className="dropdownLinks" onClick={() => navigate('/estonia')}>Estonia</a></li>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
            </nav>
        </>
    )
}

export default Nav