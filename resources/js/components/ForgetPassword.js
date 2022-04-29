import React, { useState } from 'react';
import '../../css/app.css';
import { Forget } from '../api/Index';
import Api from '../api/Api';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './component_custom.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ForgetPassword() {
	const navigate = useNavigate();
	// var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	const [Email, setEmail] = useState('');
	const [EmailErr, setEmailError] = useState('');
	const [slug, setSlug] = useState([]);
	const handleValidation = () => {
		if (Email == '') {
			setEmailError('please enter email');
		}
	};
	var num = '';
	const Save = async (e) => {
		e.preventDefault();
		handleValidation();
		let payload = {
			Email: Email
		};
		// console.log('vvv', payload);
	     await Forget(payload)
			.then((res) => {
				if (res.status == 200) {
					console.log(res.slug);
					console.log(setSlug('setslug', res.slug));
					num = res.slug;
					console.log('num', typeof (num));
					setSlug(num);
					toast.success(res.message, {
						position: toast.POSITION.TOP_RIGHT
					  });
					console.log(setSlug(num));
					console.log('setslug =>', slug);
					// navigate('/reset/password/');
					setEmail('');
				}
				
			})
			.catch(function (error) {
				toast.error(error.data.message, {
					position: toast.POSITION.TOP_RIGHT
				});
			});
	};

	return (
		<div className="bgchange">
			<ToastContainer />
			<div className="row">
				<div className="col s12">
					<div className="container">
						<div id="forgot-password" className="row">
							<div className="col s12 m6 l4 z-depth-4 offset-m4 card-panel border-radius-6 forgot-card bg-opacity-8">
								<form className="login-form" onSubmit={Save}>
									<div className="row">
										<div className="input-field col s12">
											<h5 className="ml-4">Forgot Password</h5>
											<p className="ml-4">You can reset your password</p>
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
											<span style={{ color: "red" }}>
												{EmailErr}
											</span>
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
												// onClick={}
												className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12 mb-1"
											>
												Reset Password
											</Button>
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
