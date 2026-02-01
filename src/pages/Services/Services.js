import "./Services.css";
import EndSection from "../../section/EndSection/EndSection.js";
import ContactSection from "../../section/ContactSection/ContactSection.js";

export const servicesData = [
  {
    id: 1,
    title: "Fast workmanship, precise consultation",
    description:
      "We pride ourselves on delivering high-quality work quickly and efficiently. Our team of experts provides precise consultation tailored to your business needs, ensuring that every project is completed on time without compromising on quality. From planning to execution, we focus on accuracy, innovation, and actionable insights to help you achieve measurable results. We analyze your business requirements thoroughly and offer solutions that save time, reduce errors, and optimize resources, allowing you to make informed decisions with confidence.",
    imageUrl: "./images/services-page-1.svg",
    icon: "./images/clock-icon.svg",
  },
  {
    id: 2,
    title: "Lower prices with lots of variety",
    description:
      "Our goal is to provide exceptional value by offering a wide range of services at competitive prices. We understand that every business has different needs and budgets, which is why we provide customizable solutions without compromising quality. With a diverse selection of options and packages, our clients can find the perfect fit for their requirements. We continuously monitor market trends and innovate to ensure our pricing remains fair and accessible, while still delivering premium service. From small businesses to large enterprises, our solutions maximize efficiency and satisfaction for everyone.",
    imageUrl: "./images/services-page-2.svg",
    icon: "./images/dollar-icon.png",
  },
  {
    id: 3,
    title: "Detailed analysis of sales graph data",
    description:
      "Our data analysis service provides deep insights into your sales performance and market trends. We collect, clean, and analyze complex sales data to identify patterns, opportunities, and areas for improvement. By visualizing sales graphs and metrics in an intuitive way, we help businesses understand their strengths and weaknesses and make data-driven decisions. Our expert team also offers predictive analysis, helping you anticipate market changes and optimize strategies for revenue growth. Accurate, detailed analysis empowers you to respond proactively and stay ahead of competitors.",
    imageUrl: "./images/services-page-3.svg",
    icon: "./images/data-icon.png",
  },
  {
    id: 4,
    title: "Management and strategy consultant",
    description:
      "Our consultancy services focus on creating effective strategies and optimizing management processes for sustainable business growth. We work closely with your leadership team to understand challenges, set realistic goals, and develop actionable plans. By combining industry expertise with proven methodologies, we help organizations streamline operations, improve decision-making, and foster innovation. Our approach emphasizes long-term value creation, helping businesses adapt to changing market conditions and remain competitive. We provide hands-on support, guidance, and performance tracking to ensure strategies are implemented successfully and objectives are achieved.",
    imageUrl: "./images/services-page-4.svg",
    icon: "./images/consultant-icon.png",
  },
  {
    id: 5,
    title: "Innovative marketing solutions",
    description:
      "We design and implement marketing campaigns that connect with your target audience and drive measurable results. Using creative content strategies, social media engagement, and data-driven advertising, we help brands increase visibility, customer acquisition, and loyalty. Our team monitors trends and applies the latest techniques to maximize ROI, ensuring your brand stays ahead in a competitive market. Every marketing strategy is customized to meet your specific goals, combining creativity, analytics, and technology to achieve impactful results.",
    imageUrl: "./images/services-page-5.svg",
    icon: "./images/text-icon.png",
  },
  {
    id: 6,
    title: "Advanced technical support",
    description:
      "Our technical support team provides rapid and reliable assistance for all your IT needs. We handle system setup, troubleshooting, software updates, and security management to ensure your business runs smoothly. By offering proactive monitoring, preventive maintenance, and fast resolution of technical issues, we minimize downtime and operational disruptions. Our experts collaborate closely with your internal teams to optimize workflows, integrate new technologies, and implement scalable solutions, keeping your infrastructure secure, efficient, and future-ready.",
    imageUrl: "./images/services-page-6.svg",
    icon: "./images/smile-icon.png",
  },
];

const ServicePage = () => {
  const container = document.createElement("div");
  container.className = "services-container";

  const mainTitle = document.createElement("h1");
  mainTitle.className = "services-mainTitle";
  mainTitle.textContent = "Services";
  container.appendChild(mainTitle);

  const title = document.createElement("h2");
  title.className = "services-title";
  title.innerHTML = "How Can Our Best Services Help <br> Your Business?";
  container.appendChild(title);

  //Her bir alanı başlığı döngü ile oluşturmak için
  servicesData.forEach((service, index) => {
    const card = document.createElement("div");
    card.className = "service-card";
    if (index % 2 === 1) card.classList.add("reverse"); //kartları ters sıralaması için

    const textDiv = document.createElement("div");
    textDiv.className = "service-text";

    const iconImg = document.createElement("img");
    iconImg.src = service.icon;
    iconImg.alt = `${service.title} icon`;
    iconImg.className = "service-icon";

    const textWrapper = document.createElement("div");
    textWrapper.className = "service-text-wrapper";

    const h3 = document.createElement("h3");
    h3.textContent = service.title;

    const p = document.createElement("p");
    p.textContent = service.description;

    textDiv.appendChild(iconImg);
    textWrapper.appendChild(h3);
    textWrapper.appendChild(p);
    textDiv.appendChild(textWrapper);

    const imgDiv = document.createElement("div");
    imgDiv.className = "service-image";

    const img = document.createElement("img");
    img.src = service.imageUrl;
    img.alt = service.title;

    imgDiv.appendChild(img);

    card.appendChild(textDiv);
    card.appendChild(imgDiv);

    container.appendChild(card);
  });
  // FAQ (EndSection) ekle
  container.appendChild(EndSection());
  // Contanct Section ekle
  container.appendChild(ContactSection());

  return container;
};

export default ServicePage;
