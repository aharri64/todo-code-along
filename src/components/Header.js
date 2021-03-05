import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Todo</h1>
            <nav className="float-right">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/todos">Todos</NavLink>
            </nav>
        </div>
    );
}

export default Header;

