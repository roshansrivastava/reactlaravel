import React, { useEffect, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import Script from '../layout/Script';
import { Getuser } from '../api/Index';
import { Table } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link , NavLink} from "react-router-dom";
import { DeleteUser } from '../api/Index';
import MenuItem from '@mui/material/MenuItem';
import  ListItemIcon from '@mui/material/MenuItem';
import  CreateIcon from '@mui/material/MenuItem';
import  ListItemText from '@mui/material/MenuItem';

export default function User() {
	const [ APIData, setAPIData ] = useState([]);
	//  const [loading, setLoading] = useState(false);

	const getUserData = () => {
		Getuser().then((response) => {
			setAPIData(response.data);
		});
	}

	useEffect(() => {
		getUserData();
	}, []);
	 
	const Delete = (id) => {
		DeleteUser(id).then((res) => {
			console.log(res);
			getUserData();
		})
	}

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
				<h1>User </h1>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>ID</th>
							<th>Name</th>
							<th>Full Name</th>
							<th>Artist Name</th>
							<th>Email</th>
							<th>ADD </th>
							<th>Edit</th>
							<th>Delete</th>
							<th>View</th>
						</tr>
					</thead>
					<tbody>
						{APIData.map((data) => {
							return (
								<tr key ={data.id}>
									<tr>{}</tr>
									<td>{data.id}</td>
									<td>{data.name}</td>
									<td>{data.fullname}</td>
									<td>{data.artistname}</td>
									<td>{data.email}</td>
									<td>
										{<Link className="waves-effect waves-cyan " to="/dashboard/adduser">
											<Button variant="contained" color="success">
												ADD User
											</Button>
							</Link>
										}
									</td>
									<td>{<Link className="waves-effect waves-cyan " to={`/dashboard/updateuser/${data.id}`}>
											<Button variant="contained" color="success">
												Edit User
											</Button>
											</Link>}</td>
									<td>{<Button variant="contained" onClick= {() => {Delete(data.id)}}>Delete</Button>}</td>
									
									
									<td> {<Button variant="contained"> View </Button>}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
			<Script />
		</div>
	);
}
