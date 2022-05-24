import axios from "axios";
import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Api from "../api/Api";
import "../../css/app.css";
import { Userlogout } from "../api/Index";

export default function Navbar() {
    let userData = JSON.parse(localStorage.getItem("user"));

    const shouldRedirect = true;
    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();

        Userlogout().then((res) => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
        });
    };
    return (
        <>
            <div className="navbar navbar-fixed">
                <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-purple no-shadow">
                    <div className="nav-wrapper">
                        <ul className="navbar-list left">
                            <li>
                                <img
                                    className="images"
                                    src="/css/images/logo/singo-logo.png"
                                />
                            </li>
                        </ul>

                        <ul className="navbar-list right">
                            <li>
                                <Link
                                    className="waves-effect waves-block waves-light notification-button"
                                    to="#"
                                    data-target="notifications-dropdown"
                                >
                                    <i className="material-icons">
                                        notifications_none
                                        <small className="notification-badge">
                                            5
                                        </small>
                                    </i>
                                </Link>
                            </li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="success"
                                        id="dropdown-basic"
                                    >
                                        {userData.name}
                                        {userData.fullname}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={logout}>
                                            Logout
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                    <nav className="display-none search-sm">
                        <div className="nav-wrapper">
                            <form id="navbarForm">
                                <div className="input-field search-input-sm">
                                    <input
                                        className="search-box-sm mb-0"
                                        type="search"
                                        required=""
                                        id="search"
                                        placeholder="Explore Materialize"
                                        data-search="template-list"
                                    />
                                    <label
                                        className="label-icon"
                                        htmlFor="search"
                                    >
                                        <i className="material-icons search-sm-icon">
                                            search
                                        </i>
                                    </label>
                                    <i className="material-icons search-sm-close">
                                        close
                                    </i>
                                    <ul className="search-list collection search-list-sm display-none" />
                                </div>
                            </form>
                        </div>
                    </nav>
                </nav>
            </div>
        </>
    );
}
