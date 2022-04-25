import React from 'react'

export default function ResetPassword() {
  return (
    <div className="bgchange">
    <div class="row">
      <div class="col s12">
        <div class="container">
          <div id="reset-page" class="row">
            <div class="col s12 m6 l4 z-depth-4 card-panel border-radius-6 reset-card bg-opacity-8">
              <form class="login-form">
                <div class="row">
                  <div class="input-field col s12">
                    <h5 class="ml-4">Forget Password</h5>
                  </div>
                </div>
                <div class="row margin">
                  <div class="input-field col s12">
                    <i class="material-icons prefix pt-2">lock_outline</i>
                    <input id="password" type="password" />
                    <label for="password">Password</label>
                  </div>
                </div>
                <div class="row margin">
                  <div class="input-field col s12">
                    <i class="material-icons prefix pt-2">lock_outline</i>
                    <input id="ConfirmPassword" type="password" />
                    <label for="ConfirmPassword"> Confirm Password</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <a href="index.html" class="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12">Login</a>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s6 m6 l6">
                    <p class="margin medium-small"><a href="user-register.html">I have Register Now!</a></p>
                  </div>
                  <div class="input-field col s6 m6 l6">
                    <p class="margin right-align medium-small"><a href="user-forgot-password.html">Forgot password ?</a></p>
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
