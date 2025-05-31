import ToggleDark from "../Components/ToggleDark.jsx"
import "../CSS/nav.css"
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

function Nav({ regions }) {

    const [navHandle, setNavhandle] = useState(false)

    function handleMenu() {
        setNavhandle(!navHandle)
    }

    return (
        <nav>
            <div className="nav_bg">
                <div className="container">
                    <div className="nav_content">
                        <Link to={"/"}>
                            <i className="fa-solid fa-earth-americas"></i>
                        </Link>
                        <ul className={` navlinks ${navHandle ? "open" : ""}`}>
                            {regions.map((region, index) => (
                                <NavLink key={index} to={`/region/${region}`}>
                                    <li>{region}</li>
                                </NavLink>
                            ))}
                        </ul>
                        <ToggleDark />
                        <div className={`menu_toggle ${navHandle ? "click" : ""}`} onClick={handleMenu}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
