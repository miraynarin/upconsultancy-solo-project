import "./PricingPage.css";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../section/Footer/Footer.js";
import NewsletterSection from "../../section/NewsletterSection/NewsletterSection.js";
import Pricing from "../../section/Pricing/Pricing.js";
import EndSection from "../../section/EndSection/EndSection.js";
import ContactSection from "../../section/ContactSection/ContactSection.js";
import ContactInfo from "../../section/ContactInfo/ContactInfo.js";
const PricingPage = () => {
  //  Ana wrapper (ServicePage'deki servicesContainer gibi)
  const pricingContainer = document.createElement("div");

  pricingContainer.appendChild(Navbar());
  pricingContainer.appendChild(Pricing());
  pricingContainer.appendChild(EndSection());
  pricingContainer.appendChild(ContactSection());
  pricingContainer.appendChild(ContactInfo());

  //  İçerik container
  const container = document.createElement("div");
  container.className = "pricingPage-container";

  const title = document.createElement("h1");
  title.textContent = "PricingPage";
  container.appendChild(title);

  //  Buraya pricing card’ların gelecek

  // Sayfaya ekle
  pricingContainer.appendChild(container);

  // Ortak bölümler (ServicePage ile aynı mantık)
  pricingContainer.appendChild(NewsletterSection());
  pricingContainer.appendChild(Footer());

  return pricingContainer;
};

export default PricingPage;
