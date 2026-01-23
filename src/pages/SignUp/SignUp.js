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
     <span id="togglePassword" class="eye-icon">
     <img src="./images/eye-icon-open.svg" alt="Toggle Password">
     </span>
     </div>
        <div class="remember-row">
     <label class="remember-checkbox">
     <input type="checkbox" id="rememberToggle" />
     <span class="toggle-switch"></span>
     <span class="remember-text">Remember me</span>
     </label>
     <a href="#" class="forgot-password">Forgot password?</a>
     </div>
     </form>
     <button class="login-button">Sign in</button>
     <button class="google-button">Or Sing in with Google</button>
     <div class="login-footer">
     <p class="account">Do you have an account?</p>
     <a href="/login" class="sign-up">Sign up now</p>
     </div>
   </div>
   </section>`;

  const togglePassword = container.querySelector("#togglePassword img");
  const passwordField = container.querySelector("#password");

  togglePassword.addEventListener("click", function () {
    if (passwordField.type === "password") {
      passwordField.type = "text";
      togglePassword.src = "./images/eye-icon-off.svg";
    } else {
      passwordField.type = "password";
      togglePassword.src = "./images/eye-icon-open.svg";
    }
  });

  return container;
};
export default SignUpPage;
