import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link class="nav-link" to="/login">Login</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;