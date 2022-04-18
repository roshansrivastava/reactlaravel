import React, { useEffect, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import Script from '../layout/Script';
// import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './custom.css';
import CheckIcon from '@mui/icons-material/Check';
import EuroIcon from '@mui/icons-material/Euro';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2)
	}
}));

const bull = (
	<Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
		•
	</Box>
);
export default function Home() {
	const classes = useStyles();
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
							<span className="logo-text hide-on-med-and-down"> Singo </span>
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
			<div id="main" className={classes.root}>
				<div className="card_area">
					<Card>
						<CardContent>
							<Typography sx={{ fontSize: 34 }} color="text.secondary" direction="row" gutterBottom>
								0
							</Typography>
							<Typography variant="h7" component="div">
								Total Albums
							</Typography>
						</CardContent>
					</Card>
					<Card>
						<CardContent>
							<Typography sx={{ fontSize: 34 }} color="text.secondary" direction="row" gutterBottom>
								0
							</Typography>
							<Typography variant="h7" component="div">
								Distributed Albums
							</Typography>
						</CardContent>
					</Card>
					<Card>
						<CardContent>
							<Typography sx={{ fontSize: 34 }} color="text.secondary" direction="row" gutterBottom>
								0
							</Typography>
							<Typography variant="h7" component="div">
								Declined Albums
							</Typography>
						</CardContent>
					</Card>
					<Card>
						<CardContent>
							<Typography sx={{ fontSize: 34 }} color="text.secondary" direction="row" gutterBottom>
								0.00<EuroIcon/>
							</Typography>
							<Typography variant="h7" component="div">
								Balance
							</Typography>
						</CardContent>
					</Card>
					<Card>
						<CardContent>
							<Typography sx={{ fontSize: 34 }} color="text.secondary" background-color= "lightblue" direction="row" gutterBottom>
								Free
							</Typography>
							<Typography variant="h7" component="div">
                            <br />
								<CheckIcon /> 2 Releases Included
                                <br />  <br />
								<CheckIcon /> Distribution within 14 days
                                <br />  <br />
								<CheckIcon /> Keep 80% of the earnings
                                <br />  <br />
								<CheckIcon /> 24/7 Live Support
                                <br />  <br />
								<CheckIcon /> No Content ID
                                <br />  <br />  <br />
							</Typography>
							<Typography variant="body2">
                            <br />
								  0 <EuroIcon/> Per year
								<br />
							</Typography>
                            <Typography variant="body2">
                            <br />  <br />  <br /> 
                            <Link to='/dashboard/purchase/free'>
                            <Button size ="big" variant="contained">Purchase Now</Button>
                            </Link>
							</Typography>
							
						</CardContent>
					</Card>
					<Card>
						<CardContent>
							<Typography sx={{ fontSize: 34 }} color="text.secondary" direction="row" gutterBottom>
								PREMIUM
							</Typography>
							<Typography variant="h7" component="div">
                            <br />
								<CheckIcon /> Unlimited Releases Included
                                <br />  <br />
								<CheckIcon /> Distribution within 48h
                                <br />  <br />
								<CheckIcon /> Keep 100% of the earnings
                                <br />  <br />
								<CheckIcon /> 24/7 Live Support
                                <br />  <br />
								<CheckIcon /> Content ID
                                <br />  <br />  <br />
							</Typography>
							<Typography variant="body2">
                            <br />
								  19.99 <EuroIcon/> Per year
								<br />
							</Typography>
                            <Typography variant="body2">
                            <br />  <br />  <br /> 
							<Link to='/dashboard/purchase/premium'>
                            <Button size ="big" variant="contained">Purchase Now</Button>
                            </Link>
							</Typography>
							
						</CardContent>
					</Card>
					<Card>
						<CardContent>
							<Typography sx={{ fontSize: 34 }} color="text.secondary" direction="row" gutterBottom>
								Basic
							</Typography>
							<Typography variant="h7" component="div">
                            <br />
								<CheckIcon /> 6 Releases Included
                                <br />  <br />
								<CheckIcon /> Distribution within 14 days
                                <br />  <br />
								<CheckIcon /> Keep 85% of the earnings
                                <br />  <br />
								<CheckIcon /> 24/7 Live Support
                                <br />  <br />
								<CheckIcon /> No Content ID
                                <br />  <br />  <br />
							</Typography>
							<Typography variant="body2">
                            <br />
								  9.99 4.99 <EuroIcon/> Per year
								<br />
							</Typography>
                            <Typography variant="body2">
                            <br />  <br />  <br /> 
							<Link to='/dashboard/purchase/basic'>
                            <Button size ="big" variant="contained">Purchase Now</Button>
                            </Link>
							</Typography>
							
						</CardContent>
					</Card>
				</div>
			</div>
			<Script />
		</div>
	);
}
