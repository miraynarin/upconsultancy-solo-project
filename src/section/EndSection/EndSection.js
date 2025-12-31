import "./EndSection.css";
const EndSection = () => {
  const container = document.createElement("div");
  container.innerHTML = `
   <section class="faq-section">
  <div class="faq-container">
  <h2 class="faq-title">FAQ</h2>
  <h3 class="faq-text">Do you have any question?</h3>
  <div class="faq-question">
  <div class="question">What is subscription pricing or a subscription-based pricing model?
  <img src="./images/arrow_back_icon.png" class="back-icon"></div>
  <div class="question">Why adopt a subscription business model?
  <img src="./images/arrow_back_icon.png" class="back-icon"></div>
  <div class="question">How does a subscription management model work?
  <img src="./images/arrow_back_icon.png" class="back-icon"></div>
  </div>
   </section>
   
    `;
  return container;
};
export default EndSection;
