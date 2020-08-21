import React from 'react'
import { NavLink } from "react-router-dom"

const SideNav = () => {
    return (
        <div className="side_nav col-sm-2 ">
            <h3>List Of Items</h3>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/toys">Toys</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/bags">Bags</NavLink>
                </li>
            </ul>
        </div>

    )
}

export default SideNav
