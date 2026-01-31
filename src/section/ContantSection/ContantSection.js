import "./ContantSection.css";
const ContantSection = () => {
  const section = document.createElement("section");
  section.className = "contant-section";
  section.innerHTML = `
    <div class="contant-section">
    <h2 class="contant-title">Contant</h3>
    <h2 class="contant-text">Let us know how we can help you</h2>
    <form class="contant-form">
    <div class="contant-row">
    <input class="name" placeHolder="Your Name" />
    <input class="email" placeHolder="Email" />
    </div>
    <input class="message" placeHolder="Message" />
    <button class="contant-button">Leave us a Message → </button>
    </form>
    </div>
    `;
  return section;
};

export default ContantSection;
