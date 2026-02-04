import "./navbar.css";
const Navbar = () => {
  const container = document.createElement("div");
  container.innerHTML = `
    <header class="header-container"> 
    <div class="navbar">
    <div class="navbar-left-area">
        <a class="logo" href="/">UpConslt</a>
        <div class="navbar-group">
         
            <div class="menu">
                <a class="frame" href="/services">Services</a>
                <a class="frame" href="/pricing">Pricing</a>
                <a class="frame" href="#">Blog</a>
                <a class="frame" href="/login">Login</a>
            </div>
            
        </div></div>
          <div class="navbar-right-area">
       <div class="hamburger" id="hamburgerIcon"> ☰ </div>
            <button class="btn-getstarted">Get Started</button>
        </div>
        </div>
    </header> `;
  const hamburger = container.querySelector("#hamburgerIcon");
  const menu = container.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  return container;
};
export default Navbar;
