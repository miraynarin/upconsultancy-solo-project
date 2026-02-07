import "./BlogPage.css";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../section/Footer/Footer.js";

// Blog
export const blogData = [
  {
    id: 1,
    title: "Fastest Delivery Ever",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique suspendisse malesuada netus pharetra. Augue commodo orci nisl enim. Viverra aliquam ultrices mauris hac neque gravida amet eu sed. Eu cras massa metus vitae duis pretium dolor.",
    imageUrl: "./images/fastest-blogpage.png",
    author: "Olivia Rhye",
    date: "1 Jan 2023",
    layout: "large",
  },
  {
    id: 2,
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    imageUrl: "./images/migrating-blogpage.png",
    author: "Phoenix Baker",
    date: "1 Jan 2023",
    layout: "small",
  },
  {
    id: 3,
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    imageUrl: "./images/building-blogpage.png",
    author: "Lana Steiner",
    date: "1 Jan 2023",
    layout: "small",
  },
  {
    id: 4,
    title: "Importance of communication",
    description:
      "Lorem ipsum dolor sit amet consectetur. Commodo cursus odio senectus dui orci urna a. Eu mattis potenti leo vulputate tincidunt enim eget vulputate ultrices. Sagittis justo quisque lorem nisi felis dictumst libero. Vitae leo donec ac amet vivamus sem. Commodo dignissim nam massa eu. Sodales erat orci ligula vitae lectus.",
    imageUrl: "./images/importance-blogpage.png",
    author: "Olivia Rhye",
    date: "1 Jan 2023",
    layout: "horizontal",
  },
];
export const allblogDatas = [
  {
    id: 1,
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    imageUrl: "./images/all-blog-1.png",
    author: "Alec Whitten",
    date: "1 Jan 2023",
    layout: "large",
  },
  {
    id: 2,
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    imageUrl: "./images/all-blog-2.png",
    author: "Demi Wilkinson",
    date: "1 Jan 2023",
    layout: "small",
  },
  {
    id: 3,
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    imageUrl: "./images/all-blog-3.png",
    author: "Candice Wu",
    date: "1 Jan 2023",
    layout: "small",
  },
  {
    id: 4,
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    imageUrl: "./images/all-blog-4.png",
    author: "Natali Craig",
    date: "1 Jan 2023",
    layout: "small",
  },
  {
    id: 5,
    title: "Importance of getting customer feedback",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quis maecenas elementum platea eros.",
    imageUrl: "./images/all-blog-5.png",
    author: "Drew Cano",
    date: "1 Jan 2023",
    layout: "small",
  },
  {
    id: 6,
    title: "Podcast: Creating a better CX Community",
    description:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    imageUrl: "./images/all-blog-6.png",
    author: "Orlando Diggs",
    date: "1 Jan 2023",
    layout: "small",
  },
];

const BlogPage = () => {
  const blogContainer = document.createElement("div");
  blogContainer.appendChild(Navbar());

  const page = document.createElement("div");
  page.className = "blogpage-container";

  /*headers*/
  const h1 = document.createElement("h1");
  h1.textContent = "Blog";

  const h2 = document.createElement("h2");
  h2.textContent = "Learn the Latest Updates";
  h2.className = "blog-subtitle";

  const blogSection = document.createElement("div");
  blogSection.className = "blog-section";

  const recent = document.createElement("p");
  recent.className = "recent-title";
  recent.textContent = "Recent blog posts";

  /*kartlar*/
  const grid = document.createElement("div");
  grid.className = "blog-grid";

  const left = document.createElement("div");
  left.className = "blog-left";

  const right = document.createElement("div");
  right.className = "blog-right";

  const blogBottom = document.createElement("div");
  blogBottom.className = "blog-bottom-section";

  const bottom = document.createElement("div");
  bottom.className = "blog-bottom";

  /* blog cards */
  blogData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "blog-card";

    // Image
    const img = document.createElement("img");
    img.src = item.imageUrl;
    img.alt = item.title;

    if (item.layout === "large") {
      // Sol büyük kart için
      const content = document.createElement("div");
      content.className = "blog-left-content";

      const meta = document.createElement("span");
      meta.className = "blog-left-meta";
      meta.textContent = `${item.author} • ${item.date}`;

      const title = document.createElement("h3");
      title.textContent = item.title;

      const desc = document.createElement("p");
      desc.textContent = item.description;

      content.append(meta, title, desc);
      card.append(img, content);
      left.appendChild(card);
    } else if (item.layout === "small") {
      // Sağ küçük kartlar için
      const content = document.createElement("div");
      content.className = "blog-right-content";

      const meta = document.createElement("span");
      meta.className = "blog-right-meta";
      meta.textContent = `${item.author} • ${item.date}`;

      const title = document.createElement("h3");
      title.textContent = item.title;

      const desc = document.createElement("p");
      desc.textContent = item.description;

      content.append(meta, title, desc);
      card.append(img, content);
      right.appendChild(card);
    } else if (item.layout === "horizontal") {
      const content = document.createElement("div");
      content.className = "blog-bottom-content";

      const meta = document.createElement("span");
      meta.className = "blog-bottom-meta";
      meta.textContent = `${item.author} • ${item.date}`;

      const title = document.createElement("h3");
      title.textContent = item.title;

      const desc = document.createElement("p");
      desc.textContent = item.description;

      content.append(meta, title, desc);
      card.append(img, content);
      bottom.appendChild(card);
    }
  });

  grid.append(left, right);

  blogSection.append(recent, grid);
  blogBottom.appendChild(bottom);
  page.append(h1, h2, blogSection, blogBottom);

  blogContainer.appendChild(page);

  /* All Blog Grid */
  const allBlogPostSection = document.createElement("div");
  allBlogPostSection.className = "all-blog-post-section";
  const allBlogPostTitle = document.createElement("h2");
  allBlogPostTitle.className = "all-blog-title";
  allBlogPostTitle.textContent = "All blog posts";
  allBlogPostSection.appendChild(allBlogPostTitle);

  const allBlogGrid = document.createElement("div");
  allBlogGrid.className = "all-blog-grid";
  let currentPage = 1;
  let starterSlice = 0;
  let endSlice = 6;

  const renderAllBlogs = () => {
    allBlogGrid.innerHTML = ""; // eski kartları sil

    allblogDatas.slice(starterSlice, endSlice).forEach((item) => {
      const card = document.createElement("div");
      card.className = "all-blog-card";

      const img = document.createElement("img");
      img.src = item.imageUrl;
      img.className = "all-blog-card-image";
      img.alt = item.title;

      const content = document.createElement("div");
      content.className = "all-blog-card-content";

      const meta = document.createElement("span");
      meta.className = "all-blog-card-meta";
      meta.textContent = `${item.author} • ${item.date}`;

      const title = document.createElement("h3");
      title.textContent = item.title;

      const desc = document.createElement("p");
      desc.textContent = item.description;
      content.append(meta, title, desc);
      card.append(img, content);
      allBlogGrid.appendChild(card);
    });
  };

  renderAllBlogs();
  allBlogPostSection.appendChild(allBlogGrid);

  const pagination = document.createElement("div");
  pagination.className = "pagination";

  const prevButton = document.createElement("button");
  prevButton.textContent = "← Previous";
  prevButton.className = "pagination-button";

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next →";
  nextButton.className = "pagination-button";

  const numberOfPages = Math.ceil(allblogDatas.length / 6);

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      starterSlice -= 6;
      endSlice -= 6;
      renderAllBlogs();
    } else {
      return;
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < numberOfPages) {
      currentPage++;
      starterSlice += 6;
      endSlice += 6;
      renderAllBlogs();
    } else {
      return;
    }
  });
  pagination.appendChild(prevButton);

  pagination.appendChild(nextButton);
  allBlogPostSection.appendChild(pagination);

  blogContainer.appendChild(allBlogPostSection);

  blogContainer.appendChild(Footer());

  return blogContainer;
};

export default BlogPage;
