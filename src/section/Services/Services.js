import "./Services.css";
const Services = () => {
  const container = document.createElement("div");
  container.innerHTML = `
   <section class="services-container">
    <div class="services-content">
       <p class="services-title">Services</p>
       <h1 class="services-text">How Can Our Best Services Help<br>Your Business?</h1>
        <div class="services-grid">
            <div class="services-card">
              <div class="icon-group">
              <img src="./images/services-icon-clock.png" class="services-icon">
              </div>
              <h2 class="services-card-title">Fast workmanship, precise consultation</h2>
              <p class="services-card-text">If you are a business owner looking to improve the quality and efficiency of the production process, operations consultants can be the right choice to help you find new.</p>
            </div>
            <div class="services-card">
            <div class="icon-group">
            <img src="./images/services-icon-dolar.png" class="services-icon">
            </div>
            <h2 class="services-card-title">Lower prices with lots of variety</h2>
            <p class="services-card-text">If you are a business owner looking to improve the quality and efficiency of the production process, operations consultants can be the right choice to help you find new.</p>
        </div>
        <div class="services-card">
        <div class="icon-group">
        <img src="./images/services-icon-data.png" class="services-icon">
        </div>
        <h2 class="services-card-title">Detailed analysis of sales graph data</h2>
        <p class="services-card-text">If you are a business owner looking to improve the quality and efficiency of the production process, operations consultants can be the right choice to help you find new.</p>
        </div>
        <div class="services-card">
        <div class="icon-group">
        <img src="./images/services-icon-consultant.png" class="services-icon">
        </div>
        <h2 class="services-card-title">Management and strategy consultant</h2>
        <p class="services-card-text">If you are a business owner looking to improve the quality and efficiency of the production process, operations consultants can be the right choice to help you find new.</p>
        </div>
        <div class="services-card">
        <div class="icon-group">
        <img src="./images/services-icon-communication.png" class="services-icon">
        </div>
        <h2 class="services-card-title">Communicative with ease of discussion</h2>
        <p class="services-card-text">If you are a business owner looking to improve the quality and efficiency of the production process, operations consultants can be the right choice to help you find new.</p>
        </div>
         <div class="services-card">
        <div class="icon-group">
        <img src="./images/services-icon-smile.png" class="services-icon">
        </div>
        <h2 class="services-card-title">Open for feedback and review</h2>
        <p class="services-card-text">If you are a business owner looking to improve the quality and efficiency of the production process, operations consultants can be the right choice to help you find new.</p>
        </div>
    </div>
   </section>
   
    `;
  return container;
};
export default Services;
