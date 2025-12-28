import "./Features.css";
const Features = () => {
  const container = document.createElement("div");
  container.innerHTML = `
   <section class="feature-container">
  <div class="feature-content">
    <div class="feature-first-title">Features</div>
    <h2 class="feature-title">What are The Best Features You Get?</h2>
    <p class="feature-text">
      With our integrated CRM, project management, collaboration and invoicing
      <br />
      capabilities, you can manage every aspect of your business.
    </p>
    <div class="feature-second-content">
      <div class="feature-icon-title">
        <div class="feature-icon">
          <div class="icon-container">
            <img src="./images/feature-icon-music.png" class="icon" />
            <div class="text-container">
              <h2 class="title">Directly guided by professionals</h2>
              <p class="text">
                General advice on professional practice in conference <br />
                interpreting, with the aim of.
              </p>
            </div>
          </div>
        </div>
        <div class="feature-icon">
          <div class="icon-container">
            <img src="./images/feature-icon-camera.png" class="icon" />
            <div class="text-container">
              <h2 class="title">Monitor business changes</h2>
              <p class="text">
                For assessing your change management success. It ease <br />
                recording and assessing data.
              </p>
            </div>
          </div>
        </div>
        <div class="feature-icon">
          <div class="icon-container">
            <img src="./images/feature-icon-bell.png" class="icon" />
            <div class="text-container">
              <h2 class="title">Full consultation</h2>
              <p class="text">
                Consultees can take advantage of the full consultation
                <br />period to prepare considered.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="feature-image">
        <img src="./images/feature-image.png" class="feature-image" />
      </div>
    </div>
  </div>
</section>

    `;
  return container;
};
export default Features;
