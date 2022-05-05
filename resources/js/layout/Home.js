import React, { useEffect, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import Script from '../layout/Script';
import { Link, Navigate } from 'react-router-dom';
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
import { useNavigate } from 'react-router-dom';
import { Plan , PurchasePremium } from '../api/Index';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripeCheckout from 'react-stripe-checkout';


const stripePromise = loadStripe('pk_test_51Kw2OzKZWaZUmBN46j8Peym3HQ0rAi2HASCFMwYBOGOEm5iHEukDHqmuGIrCEhfyb0VIfyvj6BrcCGyA8Lrvgcd800XNCLdEKC');

export default function Home() {
	const [Free ,setfree ] = useState('');
	const [plans ,setPlan ] = useState([]);
	var free='';
	var premium ='';
	var basic ='';
	const navigate = useNavigate();
	console.log(stripePromise);
	let tokenization = '';
	const onToken = (tokenization) => {
	console.log('1',tokenization);
	PurchasePremium(tokenization).then((res)=>{
		console.log(res);
	});
}
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
			padding: theme.spacing(2)
		}
	}));
	const redirect = () => 
	{
		navigate('/dashboard/purchase/free');
	}

	const Premium = () =>
	{
		navigate('/dashboard/purchase/premium');
	}

	const Basic = () => {
		navigate('/dashboard/purchase/basic');
	}
	const getUserData = () => {
		Plan().then((response) => {
			setPlan(response.plan);
			console.log(response);
			console.log('1',plans);
			
			// setPlan(response.plan);
		});
	}
	
	useEffect(()=>{
		getUserData();
		// 	Plan()
		//    .then((response)=>{
			// 	//    if(response.status == 200){
				// 	//    console.log('1',response);
				// 	//    console.log('1plan',response.plan[0]);
				// 	//    console.log('1plandata',response.plan[0].name)
				// 	// //    var free =JSON.parse( response.plan[0].name);
				// 	// //    console.log('***',free);
				// 	//    setPlan ( response.plan);
				// 	// //    console.log('set',Plan);
				// 	// //   var free = response.plan[0].name ;
				// 	//    console.log('2plan',response.plan[1]);
				// 	//    console.log('3plan',response.plan[2]);
				
				// 	// }
				// });
			},[]);
			
			console.log('newplan',plans);
			console.log('id',plans[2]);
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
						<Link className="brand-logo darken-1" to="#">
							<AccountCircleIcon fontSize="large" />
							<span className="logo-text hide-on-med-and-down">
								{data.name} {data.fullname}
							</span>
						</Link>
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
								<Typography sx={{ fontSize: 48 ,color: 'black' }} color="text.secondary" direction="row" gutterBottom>
									0
								</Typography>
								<Typography variant="h6" component="div">
									Total Albums
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} lg={3} xl={3}>
						<Card>
							<CardContent>
								<Typography sx={{ fontSize: 48 , color: 'black' }} color="text.secondary" direction="row" gutterBottom>
									0
								</Typography>
								<Typography variant="h6" component="div">
									Distributed Albums
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} lg={3} xl={3}>
						<Card>
							<CardContent>
								<Typography sx={{ fontSize: 48 ,color: 'black'  }} color="text.secondary" direction="row" gutterBottom>
									0
								</Typography>
								<Typography variant="h6" component="div">
									Declined Albums
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} lg={3} xl={3}>
						<Card>
							<CardContent>
								<Typography sx={{ fontSize: 48 , color: 'black' }} color="text.secondary" direction="row" gutterBottom>
									0.00<EuroIcon />
								</Typography>
								<Typography variant="h6" component="div">
									Balance
								</Typography>
							</CardContent>
						</Card>
					</Grid>	 
					{plans.map(data => (
					<Grid item xs={12} lg={4} xl={4}>
						<Card
							className={data.id ==1 ? "pricingClass" : 'pricingList'}
							sx={{
								'& .MuiChip-root': {
									borderRadius: '5px',
									marginLeft: '5px',
									'& .MuiSvgIcon-root': {
										width: '16px'
									}
								}
							}}
							>
							<Chip
								className="pricingBadge"
								color="primary"
								variant="contained"
								label={
									<div>
										<CheckIcon /> Selected
									</div>
								}
							/>

								
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
								> {data.name}
								</Typography>
								<Typography variant="h7" component="div">
									<List
										sx={{
											'& .MuiListItemIcon-root': {
												minWidth: 'auto',
												paddingRight: '10px',
												'& .MuiSvgIcon-root': {
													color: '#fff'
												}
											}
										}}
									>
										{data.description.map(li => (
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText
												primary={
													<Typography variant="p" component="div" dangerouslySetInnerHTML={{
														__html: li
													  }}>
														{/* <Typography variant="strong" component="b">
															2
														</Typography>{' '} */}
													{/* {li} */}
													</Typography>
												}
											/>
										</ListItem>
										))
											}
									
									</List>
								</Typography>
								<Typography variant="" sx={{ p: 2, display: 'flex' }}>
									<Typography fontSize="50px" component="div">
										{' '}
										{data.prices}{' '}
									</Typography>
									<Typography variant="p" component="div" id="euro">
										{' '}
										<Typography variant="p" component="div" fontSize="10px">
											<EuroIcon />{' '}
										</Typography>{' '}
										<Typography component="div" variant="p" fontSize="14">
											Per Year
										</Typography>{' '}
									</Typography>
								</Typography>
								<Typography variant="body2">
										{/* <Button size="big" variant="contained" className='button' > */}
										<StripeCheckout token={onToken} 
											name = "Roshan"
											amount='10000'
											stripeKey='pk_test_51Kw2OzKZWaZUmBN46j8Peym3HQ0rAi2HASCFMwYBOGOEm5iHEukDHqmuGIrCEhfyb0VIfyvj6BrcCGyA8Lrvgcd800XNCLdEKC'
											 />
											{/* </Button> */}
									
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					))
				}
					{/* <Grid item xs={12} lg={4} xl={4}>
						<Card>
							<CardContent>
								<Typography
									sx={{ fontSize: 34 }}
									color="revert"
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
											}
										}}
									>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText
												primary={
													<Typography variant="p" component="div">
														<Typography variant="strong" component="b">
															Unlimited
														</Typography>{' '}
														Releases Included
													</Typography>
												}
											/>
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText
												primary={
													<Typography variant="p" component="div">
														Distribution within{' '}
														<Typography variant="strong" component="b">
															48h
														</Typography>
													</Typography>
												}
											/>
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText
												primary={
													<Typography variant="p" component="div">
														<Typography variant="strong" component="b">
															Keep 100%{' '}
														</Typography>of the earnings
													</Typography>
												}
											/>
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText
												primary={
													<Typography variant="p" component="div">
														<Typography variant="strong" component="b">
															24 / 7
														</Typography>Live Support{' '}
													</Typography>
												}
											/>
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText
												primary={
													<Typography variant="p" component="div">
														<Typography variant="strong" component="b">
															Content ID{' '}
														</Typography>
													</Typography>
												}
											/>
										</ListItem>
									</List>
								</Typography>
								<Typography variant="" sx={{ p: 2, display: 'flex' }}>
									<Typography fontSize="50px" component="div">
										{' '}
										19.99{' '}
									</Typography>
									<Typography variant="p" component="div" id="euro">
										{' '}
										<Typography variant="p" component="div" fontSize="10px">
											<EuroIcon />{' '}
										</Typography>{' '}
										<Typography component="div" variant="p" fontSize="14">
											Per Year
										</Typography>{' '}
									</Typography>
								</Typography>
								<Typography variant="body2">
							
									
										<Button size="big" variant="contained" className='button' onClick={Premium}>
											Purchase Now
										</Button>
									
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} lg={4} xl={4}>
						<Card>
							<CardContent>
								<Typography
									sx={{ fontSize: 34 }}
									color="revert"
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
											'& .MuiSvgIcon-fontSizeMedium': {
												color: 'unset'
											}
										}}
									>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText
												primary={
													<Typography variant="p" component="div">
														<Typography variant="strong" component="b">
															6
														</Typography>{' '}
														Releases Included
													</Typography>
												}
											/>
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText
												primary={
													<Typography variant="p" component="div">
														Distribution within{' '}
														<Typography variant="strong" component="b">
															10days
														</Typography>
													</Typography>
												}
											/>
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText
												primary={
													<Typography variant="p" component="div">
														<Typography variant="strong" component="b">
															Keep 85%{' '}
														</Typography>{' '}
														of the earnings
													</Typography>
												}
											/>
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText
												primary={
													<Typography variant="p" component="div">
														<Typography variant="strong" component="b" /> 24 / 7 Live
														Support{' '}
													</Typography>
												}
											/>
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText
												primary={
													<Typography variant="p" component="div">
														<Typography variant="strong" component="b">
															No
														</Typography>{' '}
														Content ID
													</Typography>
												}
											/>
										</ListItem>
									</List>
								</Typography>
								<Typography variant="" sx={{ p: 2, display: 'flex' }}>
									<Typography fontSize='30' component = 'div' color='revert'>
										<strike>9.99</strike>
										</Typography>
									<Typography fontSize="50px" component="div">
										{' '}
										4.99{' '}
									</Typography>
									<Typography variant="p" component="div" id="euro">
										{' '}
										<Typography variant="p" component="div" fontSize="10px">
											<EuroIcon />{' '}
										</Typography>{' '}
										<Typography component="div" variant="p" fontSize="14">
											Per Year
										</Typography>{' '}
									</Typography>
								</Typography>
								<Typography variant="body2">
								
								
										<Button size="big" variant="contained" className='button' onClick={Basic}>
											Purchase Now
										</Button>
									
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					 */}
				</Grid>
			</div>
			<Script />
		</div>
	);
}
