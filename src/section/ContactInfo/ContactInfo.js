import "./ContactInfo.css";
const ContactInfo = () => {
  const container = document.createElement("div");
  container.innerHTML = `
    <div class="contactInfo-container">
    <div class="contactInfo-left">
    <h3 class="contactInfo-title">Contact Info</h3>
    <h2 class="contactInfo-text">We are always <br> happy to assist you </h2>
      </div>
    <div class="contactInfo-right">
    <div class="contantInfo-email">
    <h4 class="contactInfo-address">Email Address</h4>
    <h4 class="contactInfo-ınfo">help@info.com</h4>
    <p>Assistance hours:<br> Monday - Friday 6 am to <br> 8 pm EST</p>
    </div>
     <div class="contantInfo-number">
    <h4 class="contactInfo-phone">Number</h4>
    <h4 class="contactInfo-ınfo">(808) 998-34256</h4>
    <p>Assistance hours:<br> Monday - Friday 6 am to <br> 8 pm EST</p>
    
  
    </div>
    </div>
    `;

  return container;
};
export default ContactInfo;
