import React,{ useState , useEffect } from 'react';
import '../../css/app.css';
import axios from 'axios';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import Script from '../layout/Script';
import { Link } from 'react-router-dom';

export default function Dashboard() {
	 let userData = JSON.parse(localStorage.getItem('user'));
	const Logic = () => {
		console.log(userData);
	}
	 
	useEffect(() => {
		Logic();
		console.log('user',userData);
	}, []);
	
	
		return (
			<div className="App">
				<header className="page-topbar" id="header">
				<Navbar/>
				</header>
				<aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square">
					<div className="brand-sidebar">
						<h1 className="logo-wrapper">
							<a className="brand-logo darken-1" href="inddfddex.html">
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
								<span className="logo-text hide-on-med-and-down">{userData.name}{userData.fullname}</span>
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

