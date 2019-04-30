import React from 'react';
import { NavLink } from 'react-router-dom'

const signedOutLinks = () => {
    return (
        <ul className="right">
            <li>
                <NavLink to='/'>Signup</NavLink>
            </li>
            <li>
                <NavLink to='/'>Login</NavLink>
            </li>
        </ul>
    )
}

export default signedOutLinks;