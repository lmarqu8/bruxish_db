import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <Link to="/" className="navbar-brand">Bruxish.DB</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/teams" className="nav-link">Teams</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create a Team</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/user" className="nav-link">Create User</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/pokedex" className="nav-link">Pokedex</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}