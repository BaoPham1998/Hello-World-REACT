import React from 'react'
import { Link } from "react-router-dom";
const header = () => {
    return (
        <ul >
            <li><Link class="active" to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/Product">Product</Link></li>
        </ul>
    )
}

export default header