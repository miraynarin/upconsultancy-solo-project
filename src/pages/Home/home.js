import "../../styles/style.css"; 
import Navbar from "../../components/Navbar/Navbar"
import HeroSection from "../../section/HeroSection/HeroSection";
import Services  from "../../section/Services/Services";


const HomePage = () => {
    const container = document.createElement("div")
   const navbar = Navbar ()
   const heroSection = HeroSection()
   const services = Services()
   container.appendChild(navbar)
   container.appendChild(heroSection)
   container.appendChild(services)
    return container
}
export default HomePage