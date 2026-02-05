import "./BlogPage.css";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../section/Footer/Footer.js";

const BlogPage = () => {
  const blogContainer = document.createElement("div");

  // Navbar ekle
  blogContainer.appendChild(Navbar());
  blogContainer.appendChild(Footer());

  // İçerik ekle
  blogContainer.innerHTML += `
    <div class="BlogPage-container">
      <h1>Blog Page</h1>
      <p>Buraya blog içerikleri gelecek.</p>
    </div>
  `;

  return blogContainer;
};

export default BlogPage;
