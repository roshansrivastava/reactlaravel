import axios from 'axios';
import React, { Component } from 'react';
import '../../css/app.css';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password: '',
			email: '',
		};
		this.handleChange = (e) => {
            this.setState({
                [e.target.name]:e.target.value
            });
        }
		this.saveStudent = async (e) => {
            e.preventDefault();
            axios.post('http://localhost:8000/api/login',this.state)
			.then(res => {
				if (res.data.status == 200)
				{
					// console.log('vssvvssav',res.data.token.token);
					localStorage.setItem('token',res.data.token.token);
					console.log(res.data.message);
					this.setState({
						email: '',
						password: '',
					});
				
				};
			})
			.catch(function(error) {
				console.log(error);
			});
		}
	}
	render() {
		return (
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
									<form onSubmit={this.saveStudent}>
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
													name ='email'
													type="email"
													value={this.state.email}
													onChange= {this.handleChange}
												/>
												<label htmlFor="email" className="center-align">
													Email
												</label>
											</div>
										</div>
										<div className="row margin">
											<div className="input-field col s12">
												<i className="material-icons prefix pt-2">lock_outline</i>
												<input
													id="password"
													type="password"
													name = 'password'
													value={this.state.password}
													onChange={this.handleChange}
												/>
												<label htmlFor="password">Password</label>
											</div>
										</div>
										<div className="row">
										<div className="input-field col s12">
											<button
												type="submit"
												className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12"
											>
												Login
											</button>
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
													<a href="/forget-password">Forgot password ?</a>
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
}
