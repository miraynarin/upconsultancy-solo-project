import "./SignUp.css";

const SignUpPage = () => {
  const container = document.createElement("div");
  container.innerHTML = `
     <section class="login-section">
   
     <img src="./images/hero-banner.jpg" alt="hero image" class="login-section-image">
   
     <div class="right-area">
      <h3>UpConslt</h3>
      <h1>Sign up</h1>
     <form>
     <input type="text" placeholder="Name" /> 
     <input type="number" placeholder="Phone Number" /> 
     <input type="email" placeholder="Email" /> 
     <div class="password-wrapper">
     <input type="password" id="password" placeholder="Enter Password" />
     <span id="togglePassword" class="eye-icon">👁️</span>
     </div>
     <label class="remember-checkbox">
     <input type="checkbox"/>
     <span class="checkbox-"btn"></span>
     </label>
     <span class="remember-text">Remember me</span>
     <a href="#" class="forgot-password">Forgot password?</a>
     </form>
     <button class="login-button">Sign in</button>
     <button class="google-button">Or Sing in with Google</button>
     <div class="login-footer">
     <p class="account">Do you have an account?</p>
     <a href="/login" class="sign-up">Sign up now</p>
     </div>
   </div>
   </section>`;

  const togglePassword = container.querySelector("#togglePassword");
  const passwordField = container.querySelector("#password");

  togglePassword.addEventListener("click", function () {
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
  });

  return container;
};
export default SignUpPage;
