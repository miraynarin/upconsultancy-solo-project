import "../../styles/style.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../section/HeroSection/HeroSection";
import Services from "../../section/Services/Services";
import Number from "../../section/Number/Number";
import Features from "../../section/Features/Features";
import MoreFeature from "../../section/MoreFeatures/MoreFeatures";

const HomePage = () => {
  const container = document.createElement("div");
  const navbar = Navbar();
  const heroSection = HeroSection();
  const services = Services();
  const number = Number();
  const features = Features();
  const moreFeature = MoreFeature();
  container.appendChild(navbar);
  container.appendChild(heroSection);
  container.appendChild(services);
  container.appendChild(number);
  container.appendChild(features);
  container.appendChild(moreFeature);
  return container;
};
export default HomePage;
