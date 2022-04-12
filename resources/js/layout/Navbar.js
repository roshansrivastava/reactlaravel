import axios from 'axios';
import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Api from '../api/Api';
import '../../css/app.css';

import {Userlogout} from '../api/Index';

export default function Navbar() {
	const shouldRedirect = true;
	const navigate = useNavigate();
    const logout = (e) => {
        e.preventDefault();
		const token = localStorage.getItem('token');
		// console.log('ddff',token);
		// let config = {
		// 	headers: {
		// 		Authorization: 'Bearer ' + token,
		// 	}
		//   }
		// //return;
        // axios.post('http://localhost:8000/api/logout',{}, config).then (res => {
		// 	localStorage.removeItem(token);
		// 	navigate('/login');
        //     console.log('cc',res.data);
        // })

		Userlogout().then(res => {
			localStorage.removeItem('token');
			navigate('/login');
		});
    }
  return (
    <>
    	<div className="navbar navbar-fixed">
						<nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-purple no-shadow">
							<div className="nav-wrapper">
								
								<ul className="navbar-list right">
									<li className="dropdown-language">
										<a
											className="waves-effect waves-block waves-light translation-button"
											href="#"
											data-target="translation-dropdown"
										>
											<span className="flag-icon flag-icon-gb" />
										</a>
									</li>
								
									<li className="hide-on-large-only search-input-wrapper">
										<a
											className="waves-effect waves-block waves-light search-button"
											href="javascript:void(0);"
										>
											<i className="material-icons">search</i>
										</a>
									</li>
									<li>
										<a
											className="waves-effect waves-block waves-light notification-button"
											href="javascript:void(0);"
											data-target="notifications-dropdown"
										>
											<i className="material-icons">
												notifications_none<small className="notification-badge">5</small>
											</i>
										</a>
									</li>
									<li>
									<Dropdown>
										<Dropdown.Toggle variant="success" id="dropdown-basic">
											Welcome
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item  onClick = {logout}>Logout</Dropdown.Item>
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
											<label className="label-icon" htmlfor="search">
												<i className="material-icons search-sm-icon">search</i>
											</label>
											<i className="material-icons search-sm-close">close</i>
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
