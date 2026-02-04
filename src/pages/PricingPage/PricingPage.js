import "./PricingPage.css";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../section/Footer/Footer.js";
import NewsletterSection from "../../section/NewsletterSection/NewsletterSection.js";
import Pricing from "../../section/Pricing/Pricing.js";
import EndSection from "../../section/EndSection/EndSection.js";
import ContactSection from "../../section/ContactSection/ContactSection.js";
import ContactInfo from "../../section/ContactInfo/ContactInfo.js";

const PricingPage = () => {
  // Ana wrapper
  const pricingContainer = document.createElement("div");

  // Navbar ve üst bölümler
  pricingContainer.appendChild(Navbar());
  pricingContainer.appendChild(Pricing());

  // İçerik container (tabloyu buraya ekleyeceğiz)
  const container = document.createElement("div");
  container.className = "pricingPage-container";

  const title = document.createElement("h1");
  title.textContent = "PricingPage";
  container.appendChild(title);

  // ⚡ HTML tabloyu innerHTML ile ekle
  container.innerHTML += `
    <table class="pricingpage-table" style="width:100%; border-collapse: collapse;">
      <thead>
        <tr>
          <th></th>
          <th>
            <div class="pricingpage-header">
              <p>Starter</p>
              <button>Get Started</button>
            </div>
          </th>
          <th>
            <div class="pricingpage-header">
              <p>Professional</p>
              <button>Get Started</button>
            </div>
          </th>
          <th>
            <div class="pricingpage-header">
              <p>Enterprise</p>
              <button>Contact Us</button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="pricingpage-section-row">
          <td colspan="4">Plans</td>
        </tr>
        <tr>
          <td>Plans</td>
          <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
          <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
          <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
        </tr>
        <tr>
          <td>Add-ons</td>
          <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
          <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
          <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
        </tr>
        <tr>
          <td>Item Catalog</td>
          <td><img src="./images/false-icon.svg" class="pricingpage-icon"/></td>
          <td><img src="./images/false-icon.svg" class="pricingpage-icon"/></td>
          <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
        </tr>
        <!-- PRICING MODELS -->
  <tr class="pricingpage-section-row">
    <td colspan="4">Pricing Models</td>
  </tr>
  <tr>
    <td>Fixed Recurring Pricing</td>
    <td><img src="./images/false-icon.svg" class="pricingpage-icon"/></td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
  </tr>
  <tr>
    <td>Volume Pricing</td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
  </tr>
  <tr>
    <td>Tiered Pricing</td>
    <td><img src="./images/false-icon.svg" class="pricingpage-icon"/></td>
    <td><img src="./images/false-icon.svg" class="pricingpage-icon"/></td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
  </tr>
  <tr>
    <td>Ramp Pricing</td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
  </tr>

  <!-- PROMOTIONS -->
  <tr class="pricingpage-section-row">
    <td colspan="4">Promotions</td>
  </tr>
  <tr>
    <td>Fixed Recurring Pricing</td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
  </tr>
  <tr>
    <td>Trial Management</td>
    <td><img src="./images/false-icon.svg" class="pricingpage-icon"/></td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
  </tr>
  <tr>
    <td>Coupons & Discounts</td>
    <td><img src="./images/false-icon.svg" class="pricingpage-icon"/></td>
    <td><img src="./images/false-icon.svg" class="pricingpage-icon"/></td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
  </tr>
  <tr>
    <td>Gift Subscriptions</td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
    <td><img src="./images/true-icon.svg" class="pricingpage-icon"/></td>
  </tr>

      </tbody>
    </table>
  `;

  // Container'ı ana wrapper'a ekle
  pricingContainer.appendChild(container);
  pricingContainer.appendChild(EndSection());
  pricingContainer.appendChild(ContactSection());
  pricingContainer.appendChild(ContactInfo());
  // Ortak alt bölümler
  pricingContainer.appendChild(NewsletterSection());
  pricingContainer.appendChild(Footer());

  return pricingContainer;
};

export default PricingPage;
