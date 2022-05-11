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
import { ToastContainer, toast } from 'react-toastify';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';




export default function Home() {
	const stripePromise = loadStripe('pk_test_51Kw2OzKZWaZUmBN46j8Peym3HQ0rAi2HASCFMwYBOGOEm5iHEukDHqmuGIrCEhfyb0VIfyvj6BrcCGyA8Lrvgcd800XNCLdEKC');
	const [ open, setOpen ] = useState(false);
	const [Free ,setfree ] = useState('');
	const [plans ,setPlan ] = useState([]);
	const [user_data ,setuser_data ] = useState([]);
	// const [user_plan ,setuserplan ] = useState(1);
	var toast_success='';
	var toast_error ='';
	var amount ='';
	var  User_plan = 1;
	let description = '';
	const navigate = useNavigate();
	console.log(stripePromise);
	let tokenization = '';
	let user_name = '';
	let user_id = '';
	const onToken = (description , plan_id , amount) => tokenization => {
	// console.log('1',description);
	// console.log('2',plan_id);
	// console.log('3',amount);
	// console.log('4',tokenization);
	// const resolveAfter4Sec = new Promise(resolve => setTimeout(resolve, 4000));
	// toast.promise(
	// 	resolveAfter4Sec,
	// 	{
	// 	  pending: ' Please  Wait ',
	// 	//   success: toast_success,
	// 	//   error: toast_error,
	// 	}
	// )
	handleToggle();
		PurchasePremium({tokenization,description,amount,plan_id})
		.then((res)=>{
		console.log('RES',res.data);
		localStorage.setItem('user', JSON.stringify(res.data));
		// console.log('update', JSON.parse(localStorage.getItem('user')));
		handleClose();
		if (res.status == 200) {
			toast.success(res.message , {
				position: toast.POSITION.TOP_CENTER,
			}
			);
		}
		else {
			toast.error(res.message, {
				position: toast.POSITION.TOP_RIGHT
			});
		}
		setuser_data(res.data)
	})
	.catch(function(error) {
		console.log(error);
		console.log('ddd',error);
		toast.error(error.data.errors, {
			position: toast.POSITION.TOP_RIGHT
		  });
	});
}
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
			padding: theme.spacing(2)
		}
	}));
	// const redirect = () => 
	// {
	// 	navigate('/dashboard/purchase/free');
	// }
	
	// const Premium = () =>
	// {
	// 	navigate('/dashboard/purchase/premium');
	// }

	// const Basic = () => {
	// 	navigate('/dashboard/purchase/basic');
	// }
	const getPlanData = () => {
		Plan().then((response) => {
			setPlan(response.plan);
			// setPlan(response.plan);
		});
	}
	const handleClose = () => {
		setOpen(false);
	};
	const handleToggle = () => {
		setOpen(true);
	};
	useEffect(()=>{
		getPlanData();
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
	// const bull = (
	// 	<Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
	// 		•
	// 	</Box>
	// );
	let data = JSON.parse(localStorage.getItem('user'));
	// setuserplan(user_data.plan);
	// console.log('set',user_data.plan)
	// setuser_data(data);
	user_name = data.name;
	user_id = data.id;
	var de = data.plan;
	User_plan =user_data.plan == null ? de : user_data.plan;
	// setplanname() user_data.plan;
	// console.log('fd22',data);
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
					{plans.map((plan) => (
					<Grid item xs={12} lg={4} xl={4}>
						<Card
							className={plan.id == User_plan ? "pricingClass" : 'pricingList' }
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
								> {plan.title}
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
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText
												primary={
													<Typography variant="p" component="div">
														<Typography variant="strong" component="b">
															{plan.content_1}
														</Typography>{' '}
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
															{plan.content_2}
														</Typography>{' '}
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
															{plan.content_3}
														</Typography>{' '}
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
															{plan.content_4}
														</Typography>{' '}
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
															{plan.content_5}
														</Typography>{' '}
													</Typography>
												}
											/>
										</ListItem>
										{/* {plan.map(li => (
										<ListItem>
											<ListItemIcon>
												<CheckIcon />
											</ListItemIcon>
											<ListItemText
												primary={
													// <Typography variant="p" component="div" dangerouslySetInnerHTML={{
													// 	__html: li
													//   }}>
													 <Typography variant="strong" component="b">
															
														 {li} 
														</Typography>
												}
											/>
										</ListItem>
										))
											} */}
									
									</List>
								</Typography>
								<Typography variant="" sx={{ p: 2, display: 'flex' }}>
									<Typography fontSize="50px" component="div">
										{' '}
										{plan.amount}{' '}
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
								{plan.id == User_plan || plan.id == 1? 
								<>
								
								</>:
								<>
								<Typography variant="body2">
										<StripeCheckout token={onToken(plan.title, plan.id, plan.amount*100)} 
										    //  opened={() => {
											// 	setAmount(4000),
											//  }}				
											// billingAddress={true}
											name = {plan.title}
											 zipCode={true}
											 currency="USD"
											 amount={plan.amount*100}
											//  panelLabel="Give Money"
											 stripeKey='pk_test_51Kw2OzKZWaZUmBN46j8Peym3HQ0rAi2HASCFMwYBOGOEm5iHEukDHqmuGIrCEhfyb0VIfyvj6BrcCGyA8Lrvgcd800XNCLdEKC'
											 >
											  <Button size="medium" variant="contained" className='button' > 
											  Purchase Now
												</Button> 
											</StripeCheckout>
											<Backdrop
												sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
												open={open}
												onClick={handleClose}
											>
												<CircularProgress color="inherit" />
											</Backdrop>
									
								</Typography>
								</>
                                               }
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
