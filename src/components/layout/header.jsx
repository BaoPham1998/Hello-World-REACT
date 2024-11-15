import React from 'react'
import { Link, NavLink } from "react-router-dom";
const header = () => {
    return (
        <ul >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/Product">Product</NavLink></li>
        </ul>
    )
}

export default header