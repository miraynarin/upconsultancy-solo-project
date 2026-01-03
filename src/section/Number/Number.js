import "./Number.css";
const Number = () => {
  const container = document.createElement("div");
  container.innerHTML = `
    <section class="number-section">
    <div class="number-content">
    <h3 class="number-first-title">Why Us?</h3>
    <h2 class="number-title">We Have a Lot of Experience in Work</h2>
    <p class="number-text">UpConslt as a leading business consulting place, we have helped many small to<br>medium and large companies to help their business</p>
    <div class="number-value-part">
    <div class="number-value">
    <h2>1200</h2>
    <h3>Projects Completed</h3>
    </div>
    <div class="number-value">
    <h2>20</h2>
    <h3>Year of Experience</h3>
    </div>
    <div class="number-value">
    <h2>55</h2>
    <h3>New Brand</h3>
    </div>
    <div class="number-value">
    <h2>14</h2>
    <h3>Awwards Won</h3>
    </div>
    </div>
    </div>
    </section>
    
    `;
  return container;
};
export default Number;
