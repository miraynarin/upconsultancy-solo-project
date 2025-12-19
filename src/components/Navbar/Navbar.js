import './navbar.css'; 
const Navbar = () => {
    const container = document.createElement("div")
    container.innerHTML = `
    <header class="navbar"> 
        <div class="logo">UpConslt</div>
        <div class="navbar-group">
            <div class="menu">
                <div class="frame">Services</div>
                <div class="frame">Pricing</div>
                <div class="frame">Blog</div>
                <div class="frame">Login</div>
            </div>
            <div class="hamburger" id="hamburgerIcon"> ☰ </div>
            <button class="btn-getstarted">Get Started</button>
        </div>
    </header> `
    return container
}
export default Navbar