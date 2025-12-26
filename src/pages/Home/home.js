import "../../styles/style.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../section/HeroSection/HeroSection";
import Services from "../../section/Services/Services";
import Number from "../../section/Number/Number";

const HomePage = () => {
  const container = document.createElement("div");
  const navbar = Navbar();
  const heroSection = HeroSection();
  const services = Services();
  const number = Number();
  container.appendChild(navbar);
  container.appendChild(heroSection);
  container.appendChild(services);
  container.appendChild(number);
  return container;
};
export default HomePage;
