import React, { useEffect, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import Script from '../layout/Script';
import { EditUsers } from '../api/Index';
import { Link, useParams } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useNavigate } from 'react-router-dom';

export default function EditUser(props) {
	const navigate = useNavigate();
	const [ FirstName, setFirstName ] = useState('');
	const [ LastName, setLastName ] = useState('');
	const [ ArtistName, setArtistName ] = useState('');
	const [ Email, setEmail ] = useState('');
	const [ Password, setPassword ] = useState('');
	const { id } = useParams();

	const getUser = () => {
		axios.get(`http://localhost:8000/api/dashboard/updateuser/${id}`).then((response) => {
			setFirstName(response.data.data.name);
			setLastName(response.data.data.fullname);
			setArtistName(response.data.data.artistname);
			setEmail(response.data.data.email);
		});
	};

	useEffect(() => {
		getUser();
	}, []);

	const updateSubmit = async (e) => {
		e.preventDefault();

		let payload = {
			id: id,
			FirstName: FirstName,
			LastName: LastName,
			ArtistName: ArtistName,
			Email: Email,
			Password: Password
		};

		EditUsers(payload).then((res) => {
			if (res.status == 200) navigate('/dashboard/User');
		});
	};

	return (
		<div className="App">
			<header className="page-topbar" id="header">
				<Navbar />
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
							<span className="logo-text hide-on-med-and-down">Singo</span>
						</a>
					</h1>
				</div>
				<ul
					className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow"
					id="slide-out"
					data-menu="menu-navigation"
					data-collapsible="menu-accordion"
				>
					<Sidebar />
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
				<div className="container" id="edit">
					<div className="row">
						<div className="col-md-6">
							<div className="card">
								<div className="card-header">
									<h4>
										Edit User
										<Link to={'/dashboard/User'} className="btn btn-primary btn-sm float-end">
											Back
										</Link>
									</h4>
								</div>
								<div className="card-body">
									<form onSubmit={updateSubmit}>
										<div className="form-group mb-3">
											<label htmlFor="FirstName">First Name</label>
											<input
												id="FirstName"
												type="text"
												name="FirstName"
												value={FirstName}
												onChange={(e) => setFirstName(e.target.value)}
											/>
										</div>
										<div className="form-group mb-3">
											<label htmlFor="LastName" className="center-align">
												Last Name
											</label>
											<input
												id="LastName"
												type="text"
												name="LastName"
												value={LastName}
												onChange={(e) => setLastName(e.target.value)}
											/>
										</div>
										<div className="form-group mb-3">
											<label htmlFor="ArtistName">Artist Name</label>
											<input
												id="ArtistName"
												type="text"
												name="ArtistName"
												value={ArtistName}
												onChange={(e) => setArtistName(e.target.value)}
											/>
										</div>
										<div className="form-group mb-3">
											<label htmlFor="Email">Email</label>
											<input
												id="Email"
												type="text"
												name="Email"
												value={Email}
												onChange={(e) => setEmail(e.target.value)}
											/>
										</div>
										<div className="form-group mb-3">
											<label htmlFor="Password">Password</label>
											<input
												id="Password"
												type="text"
												name="Password"
												value={Password}
												onChange={(e) => setPassword(e.target.value)}
											/>
										</div>
										<div className="form-group mb-3">
											<button type="submit" className="btn btn-primary">
												Update User
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Script />
		</div>
	);
}
