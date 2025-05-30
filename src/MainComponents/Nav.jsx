import ToggleDark from "../Components/ToggleDark.jsx"
import MenuToggle from "../Components/MenuToggle.jsx"
import "../CSS/nav2.css"
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

function Nav({ regions }) {

    const [navHandle, setNavhandle] = useState(true)

    function handleMenu() {
        console.log("evvel: " + navHandle);
        setNavhandle(!navHandle)
        console.log("sonra: " + navHandle);
    }

    return (
        <nav>
            <div className="container">
                <div className="nav_content">
                    <Link to={"/"}>
                        <i className="fa-solid fa-earth-americas"></i>
                    </Link>
                    <ul className="navlinks" style={{ display: navHandle ? "none" : "flex" }}>
                        {regions.map((region, index) => (
                            <NavLink key={index} to={`/region/${region}`}>
                                <li>{region}</li>
                            </NavLink>
                        ))}
                    </ul>
                    <ToggleDark />
                    <div className="toggle_box" onClick={handleMenu}>
                        <MenuToggle />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
