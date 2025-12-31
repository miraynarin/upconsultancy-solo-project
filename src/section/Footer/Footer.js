import "./Footer.css";
const Footer = () => {
  const container = document.createElement("div");
  container.innerHTML = `
   <section class="footer-section">
   <div class="footer-container">
   <div class="footer-upconslt">
   <h3 class="footer-title">UpConslt</h3>
   <p>We are the best business consulting services that <br> have been operating for more than 20 years,<br> handling many well-known brands</p>
   </div>
   <div class="footer-second">
   <div class="footer-services">
   <p>Services</p>
   <p>Business Start-up</p>
   <p>Small Business</p>
   <p>Business Start-up</p>
   </div>
   <div class="footer-info">
   <p>Info</p>
   <p>Client</p>
   <p>Event</p>
   <p>Careers</p>
   </div>

   <div class="footer-contact">
   <p>Contact</p>
   <p>South Jakarta - Indonesia<br>+0628-2267-9981<br>contact@upconslt.com</p>
   </div>
   </div>
   </div>
   </section>
   
    `;
  return container;
};
export default Footer;
