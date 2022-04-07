import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../css/app.css';

export default class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			password_confirmation: '',
			token: '',
		};

       this.handleChange = (e) => {
            this.setState({
                [e.target.name]:e.target.value
            });
        }

        this.saveStudent = async (e) => {
            e.preventDefault();
            const res = await axios.post('http://localhost:8000/api/register',this.state)
			.then(res => {
				// console.log('vssvvv',res.data.data.token);
				if (res.data.status == 200)
				{
					localStorage.setItem('token', res.data.data.token);
					// console.log('cc',token)
					console.log(res.data.message);
					// console.log(res.data.data);
					this.setState({
						username: '',
						email: '',
						password: '',
						passwordagain: '',
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
			<div className="row">
				<div className="col s12">
					<div className="container">
						<div id="register-page" className="row">
							<div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 register-card bg-opacity-8">
								<form className="login-form" onSubmit ={this.saveStudent}>
									<div className="row">
										<div className="input-field col s12">
											<h5 className="ml-4">Register</h5>
											<p className="ml-4">Join to our community now !</p>
										</div>
									</div>
									<div className="row margin">
										<div className="input-field col s12">
											<i className="material-icons prefix pt-2">person_outline</i>
											<input
												id="name"
												type="text"
												name="name"
												value={this.state.username}
												onChange={this.handleChange}
                                               
											/>
											<label  htmlFor="name" className="center-align">
												Username
											</label>
										</div>
									</div>
									<div className="row margin">
										<div className="input-field col s12">
											<i className="material-icons prefix pt-2">mail_outline</i>
											<input
												id="email"
												type="email"
												name="email"
												value={this.state.email}
												onChange={this.handleChange}
                                               
											/>
											<label htmlFor="email">Email</label>
										</div>
									</div>
									<div className="row margin">
										<div className="input-field col s12">
											<i className="material-icons prefix pt-2">lock_outline</i>
											<input
												id="password"
												type="password"
												name="password"
												value={this.state.password}
												onChange={this.handleChange}
                                                
											/>
											<label htmlFor="password">Password</label>
										</div>
									</div>
									<div className="row margin">
										<div className="input-field col s12">
											<i className="material-icons prefix pt-2">lock_outline</i>
											<input
												id="password_confirmation"
												type="password"
												name="password_confirmation"
												value={this.state.password_confirmation}
												onChange={this.handleChange}
                                                
											/>
											<label htmlFor="password_confirmation"> Password Confirm </label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<button
												type="submit"
												className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12"
											>
												Register
											</button>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<p className="margin medium-small">
												<a href="/login">Already have an account? Login</a>
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
		);
	}
}
