import ToggleDark from "../Components/ToggleDark.jsx"
import MenuToggle from "../Components/MenuToggle.jsx"
import "../CSS/nav.css"
import { Link, NavLink } from "react-router-dom"


function Nav({ regions }) {


    return (
        <nav>
            <div className="container">
                <div className="nav_content">
                    <Link to={"/"}>
                        <i className="fa-solid fa-earth-americas"></i>
                    </Link>
                    <ul className="navlinks">
                        {regions.map((region, index) => (
                            <NavLink key={index} to={`/region/${region}`}>
                                <li>{region}</li>
                            </NavLink>
                        ))}
                    </ul>
                    <ToggleDark />
                    <div className="toggle_box">
                        <MenuToggle />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
