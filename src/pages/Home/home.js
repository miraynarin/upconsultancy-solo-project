import Navbar from "../../components/Navbar/Navbar"

const HomePage = () => {
    const container = document.createElement("div")
   const navbar = Navbar ()
   container.appendChild(navbar)
    return container
}
export default HomePage