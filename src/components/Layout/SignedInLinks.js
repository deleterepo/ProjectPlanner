import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/AuthActions';

const signedInLinks = props => {
    return (
        <ul className="right">
            <li>
                <NavLink to='/create'>New Project</NavLink>
            </li>
            <li>
                <button href="#" onClick={props.signOut}>Logout</button>
            </li>
            <li>
                <NavLink to='/' className="btn btn-floating pink lighten-1">II</NavLink>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(signedInLinks);