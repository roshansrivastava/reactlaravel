import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Script from './Script';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EuroIcon from '@mui/icons-material/Euro';
import { PayPalButton } from 'react-paypal-button-v2';
import RedeemIcon from '@mui/icons-material/Redeem';
import { Link , NavLink} from "react-router-dom";


export default function PurchaseBasic() {
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
				<div>
					<Card className="text-center">
						<Card.Header> Purchase Basic</Card.Header>
						<Card.Body>
							{/* <Card.Title>Special title treatment</Card.Title> */}
							<Card.Text>
								You are about to buy our basic rank <br />
								for 4.99 <EuroIcon />. After Purchasing you will<br />
								recieve your rank automatically.you <br />
								can pay with credit card or with <br />
								crypto . Please choose your payment <br />
								Mention below <br />
								<br /> <br /> <br />
							</Card.Text>
							<div style={{ width: '200px', margin: '0 auto' }}>
								<PayPalButton
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
								/>
							</div>
							<Link to='#'>
                            <Button size ="big" variant="contained"> <RedeemIcon /> Have a Coupon ? </Button>
                            </Link>
						</Card.Body>
					</Card>
				</div>
			</div>
			<Script />
		</div>
	);
}
