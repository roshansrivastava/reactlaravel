import React, { useState } from 'react';
import '../../css/app.css';
import { ResendMail } from '../api/Index';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './component_custom.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Resend() {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const [ Email, setEmail ] = useState('');
	const [ EmailErr, setEmailError ] = useState('');
	const [ open, setOpen ] = useState(false);
	const handleValidation = () => {
		if (Email == '' || !Email.match(mailformat)) {
			console.log('val');
			setEmailError('please enter Valid email');
			return true;
		}
	};
	var num = '';
	const Save = async (e) => {
		e.preventDefault();
		if (handleValidation()) {
			return false;
		}
		setEmailError('');
		handleToggle();

		let payload = {
			Email: Email
		};
		await ResendMail(payload)
			.then((res) => {
				if (res.status == 200) {
					toast.success(res.message, {
						position: toast.POSITION.TOP_RIGHT
					});
					setEmail('');
					handleClose();
				} else {
					toast.error(res.message, {
						position: toast.POSITION.TOP_RIGHT
					});
					handleClose();
				}
			})
			.catch(function(error) {
				toast.error(error.data.message, {
					position: toast.POSITION.TOP_RIGHT
				});
				handleClose();
			});
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleToggle = () => {
		setOpen(true);
	};

	return (
		<div className="bgchange">
			<div className="row">
				<div className="col s12">
					<div className="container">
						<div id="forgot-password" className="row">
							<div className="col s12 m6 l4 z-depth-4 offset-m4 card-panel border-radius-6 forgot-card bg-opacity-8">
								<form className="login-form" onSubmit={Save}>
									<div className="row">
										<div className="input-field col s12">
											<h5 className="ml-4">Resend Emali Varification </h5>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<i className="material-icons prefix pt-2">person_outline</i>
											<input
												id="Email"
												name="Email"
												type="text"
												value={Email}
												onChange={(e) => setEmail(e.target.value)}
											/>
											<span style={{ color: 'red' }}>{EmailErr}</span>
											<label htmlFor="Email" className="center-align">
												Email
											</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<Button
												block
												size="lg"
												type="submit"
												className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12 mb-1"
											>
												Resend
											</Button>
											<Backdrop
												sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
												open={open}
												onClick={handleClose}
											>
												<CircularProgress color="inherit" />
											</Backdrop>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s6 m6 l6">
											<p className="margin medium-small">
												<Link to="/login">Login</Link>
											</p>
										</div>
										<div className="input-field col s6 m6 l6">
											<p className="margin right-align medium-small">
												<Link to="/">Register</Link>
											</p>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="content-overlay" />
				</div>
			</div>
		</div>
	);
}
