import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                <a className="navbar-brand" href="{{ url('/') }}">
                    Library Management System
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        
                            <li className="nav-item">
                                <Link className="nav-link" href="">Login</Link>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;