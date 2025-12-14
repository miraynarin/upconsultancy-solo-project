import './navbar.css'; 
const Navbar = () => {
    const container = document.createElement("div")
    container.innerHTML = `
    <header> 
    <div class="logo"> UpConslt </div>
    <div class="logo1"> Services </div>
    <div class="logo1"> Pricing </div>
    <div class="logo1"> Blog </div>
    <div class="logo1"> Login <div>
    </header> ` 
    return container
}
export default Navbar