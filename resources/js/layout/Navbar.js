import axios from 'axios';
import React from 'react'
import '../../css/app.css';
export default function Navbar() {
    const logout = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/logout').then (res => {
            console.log('cc',res.data);
        })
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
										<button onClick={logout}>Logout</button>
									</li>
								</ul>
								<ul className="dropdown-content" id="translation-dropdown">
									<li className="dropdown-item">
										<a className="grey-text text-darken-1" href="#!" data-language="en">
											<i className="flag-icon flag-icon-gb" /> English
										</a>
									</li>
									<li className="dropdown-item">
										<a className="grey-text text-darken-1" href="#!" data-language="fr">
											<i className="flag-icon flag-icon-fr" /> French
										</a>
									</li>
									<li className="dropdown-item">
										<a className="grey-text text-darken-1" href="#!" data-language="pt">
											<i className="flag-icon flag-icon-pt" /> Portuguese
										</a>
									</li>
									<li className="dropdown-item">
										<a className="grey-text text-darken-1" href="#!" data-language="de">
											<i className="flag-icon flag-icon-de" /> German
										</a>
									</li>
								</ul>
								<ul className="dropdown-content" id="notifications-dropdown">
									<li>
										<h6>
											NOTIFICATIONS<span className="new badge">5</span>
										</h6>
									</li>
									<li className="divider" />
									<li>
										<a className="black-text" href="#!">
											<span className="material-icons icon-bg-circle cyan small">
												add_shopping_cart
											</span>{' '}
											A new order has been placed!
										</a>
										<time
											className="media-meta grey-text darken-2"
											datetime="2015-06-12T20:50:48+08:00"
										>
											2 hours ago
										</time>
									</li>
									<li>
										<a className="black-text" href="#!">
											<span className="material-icons icon-bg-circle red small">stars</span>{' '}
											Completed the task
										</a>
										<time
											className="media-meta grey-text darken-2"
											datetime="2015-06-12T20:50:48+08:00"
										>
											3 days ago
										</time>
									</li>
									<li>
										<a className="black-text" href="#!">
											<span className="material-icons icon-bg-circle teal small">
												settings
											</span>{' '}
											Settings updated
										</a>
										<time
											className="media-meta grey-text darken-2"
											datetime="2015-06-12T20:50:48+08:00"
										>
											4 days ago
										</time>
									</li>
									<li>
										<a className="black-text" href="#!">
											<span className="material-icons icon-bg-circle deep-orange small">
												today
											</span>{' '}
											Director meeting started
										</a>
										<time
											className="media-meta grey-text darken-2"
											datetime="2015-06-12T20:50:48+08:00"
										>
											6 days ago
										</time>
									</li>
									<li>
										<a className="black-text" href="#!">
											<span className="material-icons icon-bg-circle amber small">
												trending_up
											</span>{' '}
											Generate monthly report
										</a>
										<time
											className="media-meta grey-text darken-2"
											datetime="2015-06-12T20:50:48+08:00"
										>
											1 week ago
										</time>
									</li>
								</ul>
								<ul className="dropdown-content" id="profile-dropdown">
									<li>
										<a className="grey-text text-darken-1" href="user-profile-page.html">
											<i className="material-icons">person_outline</i> Profile
										</a>
									</li>
									<li>
										<a className="grey-text text-darken-1" href="app-chat.html">
											<i className="material-icons">chat_bubble_outline</i> Chat
										</a>
									</li>
									<li>
										<a className="grey-text text-darken-1" href="page-faq.html">
											<i className="material-icons">help_outline</i> Help
										</a>
									</li>
									<li className="divider" />
									<li>
										<a className="grey-text text-darken-1" href="user-lock-screen.html">
											<i className="material-icons">lock_outline</i> Lock
										</a>
									</li>
									<li>
										<a className="grey-text text-darken-1" href="user-login.html">
											<i className="material-icons">keyboard_tab</i> Logout
										</a>
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
