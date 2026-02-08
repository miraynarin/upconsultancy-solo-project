import "../../styles/style.css";
import "../../pages/Login/Login.css";

const LoginPage = () => {
  const container = document.createElement("div");
  container.innerHTML = `
     <section class="login-section">
   
     <img src="./images/hero-banner.jpg" alt="hero image" class="login-section-image">
   
     <div class="right-area">
      <h3>UpConslt</h3>
      <h1>Login</h1>
     <form>
     <input type="text" placeholder="Email or phone number" /> 
    
     <div class="password-wrapper">
     <input type="password" id="password" placeholder="Enter Password" />
     <span id="togglePassword" class="eye-icon">
     <img src="./images/eye-icon-open.svg" alt="Toggle Password" />
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
     <button class="login-button">Login</button>
     <button class="google-button">Or Login with Google</button>
     <div class="login-footer">
     <p class="account">Don't have an account?</p>
     <a href="/sign-up" class="sign-up">Sign up now</p>
     </div>
   </div>
   </section>`;
  const togglePassword = container.querySelector("#togglePassword img");
  const passwordField = container.querySelector("#password");

  togglePassword.addEventListener("click", function () {
    if (passwordField.type === "password") {
      passwordField.type = "text";
      togglePassword.src = "./images/eye-icon-off.svg"; // kapalı göz
    } else {
      passwordField.type = "password";
      togglePassword.src = "./images/eye-icon-open.svg"; // açık göz
    }
  });

  return container;
};
export default LoginPage;
