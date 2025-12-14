
const Navbar = () => {
    const container = document.createElement("div")
    container.innerHTML = `
    <header> 
    <div class="logo">
    UpConsultancy
    </div>
    </header> ` 
    return container
}
export default Navbar