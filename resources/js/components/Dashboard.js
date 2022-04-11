import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../css/app.css';
import axios from 'axios';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import Script from '../layout/Script';
class Dashboard extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="App">
				<header className="page-topbar" id="header">
				<Navbar/>
				</header>
				<aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square">
					<div className="brand-sidebar">
						<h1 className="logo-wrapper">
							<a className="brand-logo darken-1" href="index.html">
								<img
									className="hide-on-med-and-down"
									src="/css/images/logo/materialize-logo-color.png"
									alt="materialize logo"
								/>
								<img
									className="show-on-medium-and-down hide-on-med-and-up"
									src="/css/images/logo/materialize-logo.png"
									alt="materialize logo"
								/>
								<span className="logo-text hide-on-med-and-down">Materialize</span>
							</a>
						</h1>
					</div>
					<ul
						className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow"
						id="slide-out"
						data-menu="menu-navigation"
						data-collapsible="menu-accordion"
					>
					<Sidebar/>
					</ul>
					<div className="navigation-background" />
					<a
						className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only"
						href="#"
						data-target="slide-out"
					>
						<i className="material-icons">menu</i>
					</a>
				</aside>
				<div id="main">
					<h1>hello </h1>
				</div>
				<Script/>
			</div>
		);
	}
}

export default Dashboard;
