import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Script from './Script';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EuroIcon from '@mui/icons-material/Euro';
// import { PayPalButton } from 'react-paypal-button-v2';
// import RedeemIcon from '@mui/icons-material/Redeem';
import StripeCheckout from 'react-stripe-checkout';
import { Link, NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {PurchasePremium} from '../api/Index';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51KvbEeSHG1M3TNDJH3h9ihRTr4iXkqbWZyNaqYdns5NQ5fzvOLL6ugRFNnMGf8xDGxB52b6fNNACrwNIqdVDD94b00sbAvSxCS');

export default function PurchaseFree() {
	console.log(stripePromise);
	let tokenization = '';
	const onToken = (tokenization) => {
	console.log('1',tokenization);
	PurchasePremium(tokenization).then((res)=>{
		console.log(res);
	});
	// fetch('/save-stripe-token', {
	// 	method: 'POST',
	// 	body: JSON.stringify(token),
	//   }).then(response => {
	// 	response.json().then(data => {
	// 	  alert(`We are in business, ${data.email}`);
	// 	});
	//   });
	}
	console.log('2',tokenization);
	let data = JSON.parse(localStorage.getItem('user'));
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
			<div id="main" >
				<div className='purchasefree'>
					<Card className="text-center">
						<Card.Header> Purchase Free</Card.Header>
						<Card.Body>
							{/* <Card.Title>Special title treatment</Card.Title> */}
							<Card.Text>
								You are about to buy our basic rank <br />
								for 5.00<EuroIcon />. After Purchasing you will<br />
								recieve your rank automatically.you <br />
								can pay with credit card or with <br />
								crypto . Please choose your payment <br />
								Mention below <br />
								<br /> <br /> <br />
							</Card.Text>
							<div style={{ width: '200px', margin: '0 auto' }}>
								<StripeCheckout token={onToken} 
								name = "Roshan"
								amount='10000'
								stripeKey='pk_test_51KvbEeSHG1M3TNDJH3h9ihRTr4iXkqbWZyNaqYdns5NQ5fzvOLL6ugRFNnMGf8xDGxB52b6fNNACrwNIqdVDD94b00sbAvSxCS'
								 />
								{/* <PayPalButton
									createOrder={(data, actions) => {
										return actions.order.create({
											purchase_units: [
												{
													amount: {
														currency_code: 'USD',
														value: '0.01'
													}
												}
											],
											application_context: {
												shipping_preference: 'NO_SHIPPING' // default is "GET_FROM_FILE"
											}
										});
									}}
									onApprove={(data, actions) => {
										return actions.order.capture().then(function(details) {
											alert('Transaction completed by ' + details.payer.name.given_name);

											return fetch('/paypal-transaction-complete', {
												method: 'post',
												body: JSON.stringify({
													orderID: data.orderID
												})
											});
										});
									}}
								/> */}
							</div>
							{/* <Link to="#">
								<Button size="big" variant="contained">
									{' '}
									<RedeemIcon /> Have a Coupon ?{' '}
								</Button>
							</Link> */}
						</Card.Body>
					</Card>
				</div>
			</div>
			<Script />
		</div>
	);
}
