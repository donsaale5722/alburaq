import React from "react";
import { NavLink } from "react-router-dom";

const Userlogin = () => {
      //  const loginText = document.querySelector(".title-text .login");
      //  const loginForm = document.querySelector("form.login");
      //  const loginBtn = document.querySelector("label.login");
      //  const signupBtn = document.querySelector("label.signup");
      //  const signupLink = document.querySelector("form .signup-link NavLink");
      // signupBtn.onclick = (()=>{
      //   loginForm.style.marginLeft = "-50%";
      //   loginText.style.marginLeft = "-50%";
      // });
      // loginBtn.onclick = (()=>{
      //   loginForm.style.marginLeft = "0%";
      //   loginText.style.marginLeft = "0%";
      // });
      // signupLink.onclick = (()=>{
      //   signupBtn.click();
      //   return false;
      // });

  return (
    <>
   <div class="wrapper2">
      <div class="title-text">
        <div class="title login">Login Form</div>
        <div class="title signup">Signup Form</div>
      </div>
      <div class="form-container">
        <div class="slide-controls">
          <input type="radio" name="slide" id="login" checked/>
          <input type="radio" name="slide" id="signup"/>
          <label for="login" class="slide login">Login</label>
          <label for="signup" class="slide signup">Signup</label>
          <div class="slider-tab"></div>
        </div>
        <div class="form-inner">
          <form action="#" class="login">
            <div class="field">
              <input type="text" placeholder="Email Address" required/>
            </div>
            <div class="field">
              <input type="password" placeholder="Password" required/>
            </div>
            <div class="pass-link"><NavLink to="#">Forgot password?</NavLink></div>
            <div class="field btn">
              <div class="btn-layer"></div>
              <input type="submit" value="Login"/>
            </div>
            <div class="signup-link">Not NavLink member? <NavLink to="">Signup now</NavLink></div>
          </form>
          <form action="#" class="signup">
            <div class="field">
              <input type="text" placeholder="Email Address" required/>
            </div>
            <div class="field">
              <input type="password" placeholder="Password" required/>
            </div>
            <div class="field">
              <input type="password" placeholder="Confirm password" required/>
            </div>
            <div class="field btn">
              <div class="btn-layer"></div>
              <input type="submit" value="Signup"/>
            </div>
          </form>
        </div>
      </div>
    </div>

    
    </>
  );
};
export default Userlogin;
