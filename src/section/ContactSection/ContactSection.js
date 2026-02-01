import "./ContactSection.css";
const ContactSection = () => {
  const section = document.createElement("section");
  section.className = "contact-section";
  section.innerHTML = `
    <div class="contact-section">
    <h2 class="contact-title">Contact</h3>
    <h2 class="contact-text">Let us know how we can help you</h2>
    <form class="contact-form">
    <div class="contact-row">
    <input class="name" placeHolder="Your Name" />
    <input class="contact-email" placeHolder="Email" />
    </div>
    <textarea class="message" placeholder="Message"></textarea>
    <button class="contact-button">Leave us a Message → </button>
    </form>
    </div>
    `;
  return section;
};

export default ContactSection;
