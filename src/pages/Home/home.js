import "../../styles/style.css"; 
import Navbar from "../../components/Navbar/Navbar"
import HeroSection from "../../section/HeroSection/HeroSection";


const HomePage = () => {
    const container = document.createElement("div")
   const navbar = Navbar ()
   const heroSection = HeroSection()
   container.appendChild(navbar)
   container.appendChild(heroSection)
    return container
}
export default HomePage