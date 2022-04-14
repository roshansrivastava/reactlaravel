import axios from 'axios';
import React, { Component } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../../css/app.css';


export default class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			artistname:'',
			email: '',
			password: '',
			password_confirmation: '',
			token: '',
			checkbox:'',
			formErrors: {}, 
		};
		    this.initialState = this.state;
	}
		   handleFormValidation() {    
			const { name, artistname, email, password, password_confirmation, checkbox } = this.state;    
			let formErrors = {};    
			let formIsValid = true;    
		
			//Student name     
			if (!name) {    
				formIsValid = false;    
				formErrors["nameErr"] = "Name is required.";    
			} 

			if (!artistname) {    
				formIsValid = false;    
				formErrors["artistnameErr"] = "Artist Name is required.";    
			} 
		
			//Email    
			if (!email) {    
				formIsValid = false;    
				formErrors["emailErr"] = "Email id is required.";    
			}    
			else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {    
		
				formIsValid = false;    
				formErrors["emailErr"] = "Invalid email id.";    
			} 

			if (!password) {    
				formIsValid = false;    
				formErrors["passwordErr"] = "password is required.";    
			} 
		 if (!password_confirmation) {    
				formIsValid = false;    
				formErrors["password_confirmationErr"] = "password_confirmation is required.";    
			}
			
			this.setState({ formErrors: formErrors });    
			return formIsValid;    
		}

       handleChange = (e) => {
		const { name, value } = e.target; 
            this.setState({
                [e.target.name]:e.target.value,
				
            });
        }

        saveStudent = async (e) => {
            e.preventDefault();

			var fname = e.target.name.value;
			var fname = fname.split(' ');
			console.log(fname);
			if(fname.length > 1){
				if(fname[1] == '') 
				{
					alert('Enter last name');
					return;
				}
				else {
					if (fname[2]=='' || fname[2]==undefined){
						console.log('dsfdsf',fname[2]);
						var fullname = fname[1]
						console.log("name 1==>",fullname)
					}
					else if(fname[2]!='' || fname[2]!=undefined)
						var fullname = fname[1] + fname [2];
					console.log('add two value 2 ', fullname);

					
					
				}
				// console.log('dfgv',fname);
			}else {
				// e.preventDefault();

				alert('Enter last name');
				return;
			}
			// console.log('bbb',fname[1]);
            // e.preventDefault();
			if (this.handleFormValidation()) {    
				alert('You have been successfully registered.')    
				this.setState(this.initialState)    
			} 
			let data = this.state;
			data.first_name = fname[0];
			data.last_name = fullname;
            const res = await axios.post('http://localhost:8000/api/register',data)
			.then(res => {
				// console.log('vssvvv',res.data.data.token);
				if (res.data.status == 200)
				{
					localStorage.setItem('token', res.data.data.token);
					// console.log('cc',token)
					console.log(res.data.message);
					// console.log(res.data.data);
					this.setState({
						name: '',
						fullname: '',
						email: '',
						artistname:'',
						password: '',
						passwordagain: '',
						checkbox:'',
					});
				};
			})
			.catch(function(error) {
				console.log(error);
			});
			Navigate('/login');
		}
	
     

	render() {
		const { nameErr, artistnameErr, emailErr, passwordErr, password_confirmationErr, checkbox }= this.state.formErrors;    
    
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
												value={this.state.name}
												onChange={this.handleChange}
												className={nameErr ? ' showError' : ''} />    
                             					 {nameErr &&    
                              				  <div style={{ color: "red", paddingBottom: 10 }}>{nameErr}</div>    
                           							 }

											<label  htmlFor="name" className="center-align">
												Name
											</label>
										</div>
									</div>
									<div className="row margin">
										<div className="input-field col s12">
											<i className="material-icons prefix pt-2">person_outline</i>
											<input
												id="artistname"
												type="text"
												name="artistname"
												value={this.state.artistname}
												onChange={this.handleChange}
												className={artistnameErr ? ' showError' : ''} />    
												{artistnameErr &&    
													<div style={{ color: "red", paddingBottom: 10 }}>{artistnameErr}</div>    
												}
											
											<label  htmlFor="artistname" className="center-align">
												Artist Name
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
												className={emailErr ? ' showError' : ''} />    
                            {emailErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailErr}</div>    
                            }    
                                               
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
												className={passwordErr ? ' showError' : ''} />    
                            {passwordErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{passwordErr}</div>    
                            }    
                                                
											
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
												className={password_confirmationErr ? ' showError' : ''} />    
                            {password_confirmationErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{password_confirmationErr}</div>    
                            }    
                                                
											
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
		);
	}
}
