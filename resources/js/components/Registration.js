import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/app.css';
import ReCaptchaV2 from 'react-google-recaptcha';
import { Register } from '../api/Index';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export default function Registration() {
	const navigate = useNavigate();
	const [ FullName, setFullName ] = useState('');
	const [ ArtistName, setArtistName ] = useState('');
	const [ Email, setEmail ] = useState('');
	const [ Password, setPassword ] = useState('');
	const [ ConfirmPassword, setConfirmPassword ] = useState('');
	const [ agree, setAgree ] = useState(false);
	const [ token, setToken ] = useState('');
	const [ firstnameError, setfirstnameError ] = useState('');
	const [ lastnameError, setlastnameError ] = useState('');
	const [ artistError, setartistError ] = useState('');
	const [ emailError, setemailError ] = useState('');
	const [ passwordError, setpasswordError ] = useState('');
	const [ confirmpasswordError, setconfirmpasswordError ] = useState('');
	const [ captcha, setcaptcha ] = useState(null);
	const [ captchaError, setCaptchaError ] = useState('');
	const [ open, setOpen ] = useState(false);
	const [ FullnameErr, setFullnameErr ] = useState('');
	// var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const checkboxHandler = () => {
		setAgree(!agree);
	};
	let errorcount = 0;
	var fullname = '';
	var fname = '';
	const handleToken = (token) => {
		setcaptcha((currentForm) => {
			localStorage.setItem('captcha', token);
			return { ...currentForm, token };
		});
	};
	const handleExpire = () => {
		setForm((currentForm) => {
			return { ...currentForm, token: null };
		});
	};

	const Update = () => {
		setFullName('');
		setArtistName('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
		setToken(null);
	};

	const handleValidation = () => {
		if (FullName == '') {
			setfirstnameError('please enter first name');
			errorcount++;
		} else {
			fname = FullName;
			fname = fname.split(' ');
			if (fname.length > 3) {
				setFullnameErr(' Enter valid Firstname, Middlename and Lastname');
				errorcount++;
			}
			if (fname.length > 1) {
				if (fname[1] == '') {
					setlastnameError('Enter middle name');
					errorcount++;
				} else {
					if (fname[2] == '' || fname[2] == undefined) {
						console.log('dsfdsf', fname[2]);
						fullname = fname[1];
						console.log('name 1==>', fullname);
					} else if (fname[2] != '' || fname[2] != undefined) {
						fullname = fname[1] + fname[2];
						console.log('add two value 2 ', fullname);
					}
				}
			}
		}
		if (ArtistName == '') {
			setartistError('Please enter artist name ');
			errorcount++;
		}
		if (Email == '' || !Email.match(mailformat)) {
			setemailError('please enter Valid email');
			errorcount++;
		}
		if (Password == '' || Password.length < 7) {
			setpasswordError('Password should be more than 7 characters');
			errorcount++;
		}
		if (ConfirmPassword == '' || Password !== ConfirmPassword) {
			setconfirmpasswordError('Please enter correct password ');
			errorcount++;
		}
		if (token == null || captcha == null) {
			setCaptchaError('Please Varify Captcha');
			errorcount++;
		}
	};

	const resetErrors = () => {
		setfirstnameError('');
		setlastnameError('');
		setFullnameErr('');
		setemailError('');
		setpasswordError('');
		setconfirmpasswordError('');
		setCaptchaError('');
		setfirstnameError('');
	};

	const saveStudent = async (e) => {
		resetErrors();
		handleValidation();
		e.preventDefault();
		console.log('fgdfgdfgd', errorcount);
		if (errorcount) {
			errorcount = 0;
			return;
		}
		handleToggle();
		let payload = {
			FullName: fname[0],
			LastName: fullname,
			ArtistName: ArtistName,
			Email: Email,
			Password: Password,
			ConfirmPassword: ConfirmPassword
		};
		console.log('bbb', payload);
		await Register(payload)
			.then((res) => {
				if (res.status == 200) {
					localStorage.setItem('token', res.data.token);
					setToken(res.data.token);

					Update();
					handleClose();
					toast.success(res.message, {
						position: toast.POSITION.TOP_RIGHT
					});
					navigate('/login');
				} else {
					handleClose();
					toast.error(res.message, {
						position: toast.POSITION.TOP_RIGHT
					});
				}
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleToggle = () => {
		setOpen(true);
	};
	return (
		<div className="flatbg-image">
			<div className="row">
				<div className="col s12">
					<div className="container">
						<div id="register-page" className="row">
							<div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 register-card bg-opacity-8">
								<form className="login-form" onSubmit={saveStudent}>
									<div className="row">
										<div className="input-field col s12">
											<h5 className="ml-4"> World Wide </h5>
										</div>
									</div>
									<div className="row margin">
										<div className="input-field col s12">
											<i className="material-icons prefix pt-2">person_outline</i>
											<input
												id="FullName"
												type="text"
												name="FullName"
												value={FullName}
												onChange={(e) => setFullName(e.target.value)}
											/>
											<label htmlFor="FullName" className="center-align">
												First Name & Last Name
											</label>
											<span style={{ color: 'red' }}>
												{lastnameError}
												{firstnameError}
												{FullnameErr}
											</span>
										</div>
									</div>
									<div className="row margin">
										<div className="input-field col s12">
											<i className="material-icons prefix pt-2">person_outline</i>
											<input
												id="ArtistName"
												type="text"
												name="ArtistName"
												value={ArtistName}
												onChange={(e) => setArtistName(e.target.value)}
											/>
											<span style={{ color: 'red' }}>{artistError}</span>
											<label htmlFor="ArtistName" className="center-align">
												Artist Name
											</label>
										</div>
									</div>
									<div className="row margin">
										<div className="input-field col s12">
											<i className="material-icons prefix pt-2">mail_outline</i>
											<input
												id="Email"
												type="text"
												name="Email"
												value={Email}
												onChange={(e) => setEmail(e.target.value)}
											/>
											<span style={{ color: 'red' }}>{emailError}</span>
											<label htmlFor="Email">Email</label>
										</div>
									</div>
									<div className="row margin">
										<div className="input-field col s12">
											<i className="material-icons prefix pt-2">lock_outline</i>
											<input
												id="Password"
												type="password"
												name="Password"
												value={Password}
												onChange={(e) => setPassword(e.target.value)}
											/>
											<span style={{ color: 'red' }}>{passwordError}</span>
											<label htmlFor="Password">Password</label>
										</div>
									</div>
									<div className="row margin">
										<div className="input-field col s12">
											<i className="material-icons prefix pt-2">lock_outline</i>
											<input
												id="ConfirmPassword"
												type="password"
												name="ConfirmPassword"
												value={ConfirmPassword}
												onChange={(e) => setConfirmPassword(e.target.value)}
											/>
											<span style={{ color: 'red' }}>{confirmpasswordError}</span>
											<label htmlFor="ConfirmPassword">Confirm Password</label>
										</div>
									</div>
									<div className="captcha">
										<div>
											<ReCaptchaV2
												sitekey="6LdUdIwfAAAAAEZR4Wd9LoVwRr9VuiooS-OOKv1x"
												onChange={handleToken}
												onExpire={handleExpire}
											/>
											<span style={{ color: 'red' }}>{captchaError}</span>
										</div>
									</div>
									<div className="row1">
										<div className="col s12 m12 l12 ml-1 mt-2">
											<p>
												<label>
													<input type="checkbox" id="agree" onChange={checkboxHandler} />
													<span>
														<b>Remember Me </b>
													</span>
												</label>
											</p>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<button
												type="submit"
												disabled={!agree}
												className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12"
											>
												Register
											</button>
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
										<div className="input-field col s12">
											<p className="margin medium-small">
												<Link to="/login">Already have an account? Login</Link>
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
