import './HeroSection.css'; 
const HeroSection = () => {
    const container = document.createElement("div")
    container.innerHTML = `
   <section class="hero-section-container">
   <div class="hero-section-content">
   <div class="notice">📢 Started for free!</div>
   <h1 class="hero-section-title">Consult your business with us and get    
     benefits and 12 hour service!
   </h1>
    <h4 class="hero-section-text">We can have professional experts provide consulting services for a company on topics and subjects that are required for you to meet your business objectives.
    </h4>
   <div class="hero-section-input-container">
   <input class="email" placeholder="Your mail" class="input-email">
   <button class="hero-section-button">Start Now</button>
  </div>
  <div class="hero-section-banner-container">
  <img src="./images/hero-banner.jpg" alt="hero image" class="hero-section-image">
  </div>
  </div>
   </section>
   
    `
return container
}
export default HeroSection