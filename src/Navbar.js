import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            {/* <!--start nav bar--> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        Api
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link active" exact aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" exact to="About">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" className="nav-link" exact to="Contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink className="btn btn-outline-light" to="/users/add">Add User</NavLink>
                </div>
            </nav>
            {/* <!--end nav bar--> */}

        </>
    );
};

export default Navbar;