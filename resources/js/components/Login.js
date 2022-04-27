import React, { useState } from 'react';
import '../../css/app.css';
import { UserLogin } from '../api/Index';
import Api from '../api/Api';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './component_custom.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
	const shouldRedirect = true;
	const navigate = useNavigate();
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [agree, setAgree] = useState(false);
	const [emailErr ,setemailErr] = useState('');
	const [passwordErr ,setpasswordErr ] =useState('');
	const checkboxHandler = () => {
		// if agree === true, it will be set to false
		// if agree === false, it will be set to true
		setAgree(!agree);
		// Don't miss the exclamation mark
	  }
	function validateForm() {
		if(email == ''){
			setemailErr('please enter Valid email');
		};
		if(password == ''){
			setpasswordErr('Please enter valid password');
		};
	}

	function saveStudent(e) {
		validateForm();
		e.preventDefault();
		const payload = {
			email: email,
			password: password
		};
		UserLogin(payload)
			.then((res) => {
				if(res.status == 200){
				localStorage.setItem('token', res.token.token);
				localStorage.setItem('user',JSON.stringify(res.user))
				// localStorage.setItem('user',res.)
				navigate('/dashboard/home');
				} else {
					toast.error(res.message, {
						position: toast.POSITION.TOP_RIGHT
					  });
				}
			})
			.catch(function(error) {
				console.log(error);
			});
		// axios.post('http://localhost:8000/api/login',this.state)
		// .then(res => {
		// 	if (res.data.status == 200)
		// 	{
		// 		// console.log('vssvvssav',res.data.token.token);
		// 		localStorage.setItem('token',res.data.token.token);
		// 		console.log(res.data.message);
		// 		this.setState({
		// 			email: '',
		// 			password: '',
		// 		});
		// 		window.location = '/dashboard';
		// 	};
		// })
		// .catch(function(error) {
		// 	console.log(error);
		// });
	}

	return (
		<div className='bgchange'>
			<ToastContainer />
		<div
			className="vertical-layout vertical-menu-collapsible page-header-dark vertical-modern-menu preload-transitions 1-column login-bg   blank-page blank-page"
			data-open="click"
			data-menu="vertical-modern-menu"
			data-col="1-column"
		>
			<div className="row">
				<div className="col s12">
					<div className="container">
						<div id="login-page" className="row">
							<div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
								<form onSubmit={saveStudent}>
									<div className="row">
										<div className="input-field col s12">
											<h5 className="ml-4">Sign in</h5>
										</div>
									</div>
									<div className="row margin">
										<div className="input-field col s12">
											<i className="material-icons prefix pt-2">person_outline</i>
											<input
												id="email"
												name="email"
												type="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
											<label htmlFor="email" className="center-align">
												Email
											</label>
											<span style={{color: "red"}}>
											{emailErr}
											</span>
										</div>
									</div>
									<div className="row margin">
										<div className="input-field col s12">
											<i className="material-icons prefix pt-2">lock_outline</i>
											<input 
												id="password"
												type="password"
												name="password"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>
											<label htmlFor="password">Password</label>
											<span style={{color: "red"}}>
											{ passwordErr}
											</span>
										</div>
									</div>
									<div class="row">
                                <div class="col s12 m12 l12 ml-1 mt-1">
                                    <p>
                                        <label htmlFor='agree'>
                                            <input type="checkbox"className = "checkboxed"  id="agree" onChange={checkboxHandler}/>
                                            <span>I Agree to Term and Condition</span>
                                        </label>
                                    </p>
                                </div>
                            </div>
									<div className="row">
										<div className="input-field col s12">
											<Button block size="lg" type="submit" disabled={ agree === false}
											 className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12 mb-1" >
												Login
											</Button>
										</div>
									</div>

									<div className="row">
										<div className="input-field col s6 m6 l6">
											<p className="margin medium-small">
												<a href="/">Register Now!</a>
											</p>
										</div>
										<div className="input-field col s6 m6 l6">
											<p className="margin right-align medium-small">
												<Link to="/forget/password">Forgot password ?</Link>
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
		</div>
	);
}
