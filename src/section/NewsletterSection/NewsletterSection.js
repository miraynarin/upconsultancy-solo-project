import "./NewsletterSection.css";
const NewsletterSection = () => {
  const container = document.createElement("div");
  container.innerHTML = `
  <div class="newsletter-area">
    <div class="newsletter-container">
    <div class="newsletter-left">
    <h2 class="newsletter-title">Subcribe to our Newsletter</h2>
    <p class="newsletter-text">Subscribe for Updates: Stay informed about the latest <br> investor updates, financial results, and announcements by <br> subscribing to our newsletter. </p>
    </div>
    <div class="newsletter-right">
        <input class="newsletter-email" placeholder="Enter your email">
        <button class="newsletter-button">Subscribe</button>
      </div>
    </div>
    </div>
    `;

  return container;
};

export default NewsletterSection;
