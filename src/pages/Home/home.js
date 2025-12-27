import "../../styles/style.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../section/HeroSection/HeroSection";
import Services from "../../section/Services/Services";
import Number from "../../section/Number/Number";
import Features from "../../section/Features/Features";

const HomePage = () => {
  const container = document.createElement("div");
  const navbar = Navbar();
  const heroSection = HeroSection();
  const services = Services();
  const number = Number();
  const features = Features();
  container.appendChild(navbar);
  container.appendChild(heroSection);
  container.appendChild(services);
  container.appendChild(number);
  container.appendChild(features);
  return container;
};
export default HomePage;
