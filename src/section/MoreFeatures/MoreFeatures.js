import "./MoreFeature.css";
const MoreFeature = () => {
  const container = document.createElement("div");
  container.innerHTML = `
   <section class="more-feature-section">
   <div class="more-feature-container">
   <img src="./images/MoreFeature-image.png" class="more-feature-img">
   <div class="more-feature-box">
   <h1 class="more-feature-title">More Features</h1>
   <h2 class="more-feature-text">Take Advantage of The Features You <br>Get From Us!</h2>
   <p class="more-text">Analysis describes the features, advantages and benefits of a <br>product, and how they work together to help differentiate a <br>product within the market.</p>
   <button class="more-feature-button">Get Started</button>
   </div>
   </div>
   </section>
   
    `;
  return container;
};
export default MoreFeature;
