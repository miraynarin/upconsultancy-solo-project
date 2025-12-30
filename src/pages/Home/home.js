import "../../styles/style.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../section/HeroSection/HeroSection";
import Services from "../../section/Services/Services";
import Number from "../../section/Number/Number";
import Features from "../../section/Features/Features";
import MoreFeature from "../../section/MoreFeatures/MoreFeatures";
import Pricing from "../../section/Pricing/Pricing";

const HomePage = () => {
  const container = document.createElement("div");
  const navbar = Navbar();
  const heroSection = HeroSection();
  const services = Services();
  const number = Number();
  const features = Features();
  const moreFeature = MoreFeature();
  const pricing = Pricing();
  container.appendChild(navbar);
  container.appendChild(heroSection);
  container.appendChild(services);
  container.appendChild(number);
  container.appendChild(features);
  container.appendChild(moreFeature);
  container.appendChild(pricing);
  return container;
};
export default HomePage;
