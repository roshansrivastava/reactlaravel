import React, { useEffect, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import Script from '../layout/Script';
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
import Grid from '@mui/material/Grid';
import { List, ListItem, ListItemText, ListItemIcon, Chip } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Home() {
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2)
	}
}));

// const bull = (
// 	<Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
// 		•
// 	</Box>
// );
let data = JSON.parse(localStorage.getItem('user'));
// console.log('fd',data);
// // useEffect(()=>
// // {
// // 	console.log('now',data);
// // });
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
							<AccountCircleIcon fontSize="large" />
							<span className="logo-text hide-on-med-and-down">
								{data.name} {data.fullname}
								
							</span>
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
				<Grid
					container
					spacing={4}
					sx={{
						'& .MuiCardContent-root': {
							paddingTop: '50px',
							'& .MuiTypography-h3': {
								fontSize: '30px',
								fontWeight: '600',
								textTransform: 'uppercase'
							}
						}
					}}
				>
					<Grid item xs={12} lg={3} xl={3}>
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
					</Grid>
					<Grid item xs={12} lg={3} xl={3}>
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
					</Grid>
					<Grid item xs={12} lg={3} xl={3}>
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
					</Grid>
					<Grid item xs={12} lg={3} xl={3}>
						<Card>
							<CardContent>
								<Typography sx={{ fontSize: 34 }} color="text.secondary" direction="row" gutterBottom>
									0.00<EuroIcon />
								</Typography>
								<Typography variant="h7" component="div">
									Balance
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} lg={4} xl={4}>
						<Card className="pricingClass" sx={{"& .MuiChip-root":{
							borderRadius:"5px",
							marginLeft: "5px",
							"& .MuiSvgIcon-root":{
								width:"16px",
							}
						}}}>
							<Chip className="pricingBadge" color="primary" variant="contained" label={<div><CheckIcon /> Selected</div>} />

							<CardContent
								sx={{
									'& .MuiTypography-root': {
										color: '#fff'
									}
								}}
							>
								<Typography
									sx={{
										fontSize: 34
									}}
									color="text.secondary"
									background-color="lightblue"
									direction="row"
									gutterBottom
									variant="h3"
									component="div"
								>
									Free
								</Typography>
								<Typography variant="h7" component="div">
									<List
										sx={{
											'& .MuiListItemIcon-root': {
												minWidth: 'auto',
												paddingRight: '10px',
												"& .MuiSvgIcon-root":{
													color: "#fff",
												},
											}
										}}
									>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText primary={<Typography variant="p" component="div"><Typography variant="strong" component="b">2</Typography> Releases Included</Typography>} />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText primary={<Typography variant="p" component="div">Distribution within <Typography variant="strong" component="b">14</Typography> days</Typography>} />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText primary="Keep 80% of the earnings" />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText primary="24/7 Live Support" />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText
												primary={
													<div>
														No <strong>Content</strong> ID
													</div>
												}
											/>
										</ListItem>
									</List>
								</Typography>
								<Typography variant="body2">
									<br />
									0<sub><EuroIcon /> <br/>Per year</sub>
									<br />
								</Typography>
								<Typography variant="body2">
									<br /> <br /> <br />
									<Link to="/dashboard/purchase/free">
										<Button size="big" variant="contained">
											Purchase Now
										</Button>
									</Link>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} lg={4} xl={4}>
						<Card>
							<CardContent>
								<Typography
									sx={{ fontSize: 34 }}
									color="text.secondary"
									direction="row"
									gutterBottom
									variant="h3"
									component="div"
								>
									PREMIUM
								</Typography>
								<Typography variant="h7" component="div">
									<List
										sx={{
											'& .MuiListItemIcon-root': {
												minWidth: 'auto',
												paddingRight: '10px'
											},
											
										}}
									>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText primary="Unlimited Releases Included" />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText primary="Distribution within 48h" />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText primary="Keep 100% of the earnings" />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText primary="24/7 Live Support" />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText
												primary={
													<div>
													 <strong>Content ID</strong>
													</div>
												}
											/>
										</ListItem>
									</List>
								</Typography>
								<Typography variant="body2">
									<br />
									19.99 <EuroIcon /> Per year
									<br />
								</Typography>
								<Typography variant="body2">
									<br /> <br /> <br />
									<Link to="/dashboard/purchase/premium">
										<Button size="big" variant="contained">
											Purchase Now
										</Button>
									</Link>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} lg={4} xl={4}>
						<Card>
							<CardContent>
								<Typography
									sx={{ fontSize: 34 }}
									color="text.secondary"
									direction="row"
									gutterBottom
									variant="h3"
									component="div"
								>
									Basic
								</Typography>
								<Typography variant="h7" component="div">
									<List
										sx={{
											'& .MuiListItemIcon-root': {
												minWidth: 'auto',
												paddingRight: '10px'
											},
											'& .MuiSvgIcon-fontSizeMedium' :{
												color: 'unset'
											},
										}}
									>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText primary="6 Releases Included" />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText primary="Distribution within 14 days" />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText primary="Keep 85% of the earnings" />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText primary="24/7 Live Support" />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText
												primary={
													<div>
														No <strong>Content</strong> ID
													</div>
												}
											/>
										</ListItem>
									</List>
								</Typography>
								<Typography variant="body2">
									<br />
									9.99 4.99 <EuroIcon /> Per year
									<br />
								</Typography>
								<Typography variant="body2">
									<br /> <br /> <br />
									<Link to="/dashboard/purchase/basic">
										<Button size="big" variant="contained">
											Purchase Now
										</Button>
									</Link>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
			<Script />
		</div>
	);
}
