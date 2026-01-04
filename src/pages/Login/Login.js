import "../../styles/style.css";
import "../../pages/Login/login.css";

const LoginPage = () => {
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

     </form>
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
export default LoginPage;
