import React, { useState , useEffect }  from 'react'
import {Link , useNavigate, useParams } from 'react-router-dom';
import { Reset } from '../api/Index';

export default function ResetPassword() {
  const [Password, setPassword] = useState('');
  const [ConfirmPassword ,setConfirmPassword] = useState('');
  const [PasswordErr ,setPasswordErr] = useState('');
  const [ConfirmPasswordErr ,setConfirmPasswordErr] = useState('');
  // const [APISet , setAPISet] =useState('');
  const { slug } = useParams();
  const navigate = useNavigate();
  const handleValidation = () => {
		if (Password == '') {
			setPasswordErr('please enter Password');
		}
    if (ConfirmPassword == ''|| Password !== ConfirmPassword) {
      setConfirmPasswordErr('Please enter Confirm Password');
    }
	};

  const saveReset = async(e) =>
  {
    e.preventDefault();
    handleValidation();
    // console.log('slug',slug);
    let payload = {
      Password: Password,
			ConfirmPassword: ConfirmPassword,
      slug :slug,
		};
    console.log('payload',payload);
    Reset(payload).then((response) => {
      console.log('response',response.status);
      if(response.status==200)
      {
        navigate('/login');
      }
    });
  }

  return (
    <div className="bgchangere">
    <div class="row">
      <div class="col s12">
        <div class="container">
          <div id="reset-page" class="row">
            <div class="col s12 m6 l4 z-depth-4 card-panel border-radius-6 reset-card bg-opacity-8">
              <form class="login-form" onSubmit={saveReset}>
                <div class="row">
                  <div class="input-field col s12">
                    <h5 class="ml-4">Reset Password</h5>
                  </div>
                </div>
                <div class="row margin">
                  <div class="input-field col s12">
                    <i class="material-icons prefix pt-2">lock_outline</i>
                    <input id="Password" type="password" value={Password}
												onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="Password">Password</label>
                    <span style={{color: "red"}}>
											{PasswordErr}
											</span>
                  </div>
                </div>
                <div class="row margin">
                  <div class="input-field col s12">
                    <i class="material-icons prefix pt-2">lock_outline</i>
                    <input id="ConfirmPassword" type="password" value={ConfirmPassword}
                    	onChange={(e) => setConfirmPassword(e.target.value)} />
                    <label htmlFor='ConfirmPassword'> Confirm Password</label>
                    <span style={{color: "red"}}>
											{ConfirmPasswordErr}
											</span>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <button class="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12"> Reset</button>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s6 m6 l6">
                    <p class="margin medium-small"><Link to={'/login'}>I am already Member Now!</Link></p>
                  </div>
                  <div class="input-field col s6 m6 l6">
                    <p class="margin right-align medium-small"><Link to={'/forget/password'}>Forgot password ?</Link></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="content-overlay"></div>
      </div>
    </div>
  </div>
  )
}
