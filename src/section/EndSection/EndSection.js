import "./EndSection.css";
const EndSection = () => {
  const container = document.createElement("div");
  container.innerHTML = `
   <section class="faq-section">
  <div class="faq-container">
  <h2 class="faq-title">FAQ</h2>
  <h3 class="faq-text">Do you have any question?</h3>
  <div class="faq-question">
    
     <details class="question">
    <summary>What is subscription pricing or a subscription-based pricing model? 
    <img src="./images/arrow_back_icon.png" class="back-icon" /></summary>
    <div>
    One, it attracts more customers with its lower entry point (e.g. paying
      $15 monthly vs. $150 in advance). Two, it offers predictable revenue for
      businesses. Three, it allows businesses to build stronger, more valuable
      relationships with its customers.
    </div>
    </details>
    
   <details class="question">
    <summary>Why adopt a subscription business model?
    <img src="./images/arrow_back_icon.png" class="back-icon" /></summary>
    <div>
    One, it attracts more customers with its lower entry point (e.g. paying
      $15 monthly vs. $150 in advance). Two, it offers predictable revenue for
      businesses. Three, it allows businesses to build stronger, more valuable
      relationships with its customers.
    </div>
    </details>

<details class="question">
    <summary>How does a subscription management model work?
    <img src="./images/arrow_back_icon.png" class="back-icon" /></summary>
    <div>
    One, it attracts more customers with its lower entry point (e.g. paying
      $15 monthly vs. $150 in advance). Two, it offers predictable revenue for
      businesses. Three, it allows businesses to build stronger, more valuable
      relationships with its customers.
    </div>
    </details>

    </div>
    </div>
   </section>
   
    `;

  return container;
};
export default EndSection;
