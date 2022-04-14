import React, { useEffect, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import Script from '../layout/Script';
// import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {
	Grid,
	makeStyles,
	Card,
	CardContent,
	MenuItem,
	InputLabel,
	CardActions,
	Button,
	CardHeader,
	FormControl
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import {AddUsers} from '../api/Index';

// const useStyle = makeStyles((theme) => ({
// 	padding: {
// 		padding: theme.spacing(3)
// 	},
// 	button: {
// 		margin: theme.spacing(1)
// 	}
// }));
export default function AddUser() {
	// const classes = useStyle();
	const initialValues = {
		firstName: '',
		lastName: '',
        artistName:'',
		email: '',
		password: ''
	};
	let validationSchema = Yup.object().shape({
		firstName: Yup.string().required('Full name is required'),
		lastName: Yup.string().required('Last name is Required'),
        artistName:Yup.string().required('artist name is required'),
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string().required('Required!')
	});
	const onSubmit = (values) => {
        let formData ={
		firstName: values.firstName,
        lastName: values.lastName,
        artistName:values.artistName,
        email:values.email,
        password:values.password,
        }
        AddUsers(formData).then(res => {
            console.log('response',res);
        })
		console.log('xxxx',values);
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
				<h1> ADD User</h1>
				<Grid container justify="center" spacing={1}>
					<Grid item md={6}>
						<Card >
							<CardHeader title=" Add Users" />
							<Formik
								initialValues={initialValues}
								validationSchema={validationSchema}
								onSubmit={onSubmit}
							>
								{({ dirty, isValid, values, handleChange, handleBlur }) => {
									return (
										<Form>
											<CardContent>
												<Grid item container spacing={1} justify="center">
													<Grid item xs={12} sm={6} md={6}>
														<Field
															label="First Name"
															variant="outlined"
															fullWidth
															name="firstName"
															value={values.firstName}
															component={TextField}
														/>
													</Grid>
													<Grid item xs={12} sm={6} md={6}>
														<Field
															label="Artist Name"
															variant="outlined"
															fullWidth
															name="artistName"
															value={values.artistName}
															component={TextField}
														/>
													</Grid>
                                                    <Grid item xs={12} sm={6} md={6}>
														<Field
															label="Last Name"
															variant="outlined"
															fullWidth
															name="lastName"
															value={values.lastName}
															component={TextField}
														/>
													</Grid>
													<Grid item xs={12} sm={6} md={6}>
														<Field
															label="Email"
															variant="outlined"
															fullWidth
															name="email"
															value={values.email}
															component={TextField}
														/>
													</Grid>
													<Grid item xs={12} sm={6} md={6}>
														<Field
															label="Password"
															variant="outlined"
															fullWidth
															name="password"
															value={values.password}
															type="password"
															component={TextField}
														/>
													</Grid>
												</Grid>
											</CardContent>
											<CardActions>
												<Button
													disabled={!dirty || !isValid}
													variant="contained"
													color="primary"
													type="Submit"
													
												>
													ADD User
												</Button>
											</CardActions>
										</Form>
									);
								}}
							</Formik>
						</Card>
					</Grid>
				</Grid>
			</div>
			<Script />
		</div>
	);
}
