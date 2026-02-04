import page from "page";
import HomePage from "./pages/Home/home";
import ServicePage from "./pages/Services/Services";
import PricingPage from "./pages/PricingPage/PricingPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import LoginPage from "./pages/Login/Login";
import SignUpPage from "./pages/SignUp/SignUp";

const app = document.querySelector("#app");
page("/", async () => {
  app.replaceChildren(HomePage());
});
page("/services", async () => {
  app.replaceChildren(ServicePage());
});
page("/pricing", async () => {
  app.replaceChildren(PricingPage());
});
page("/blog", async () => {
  app.replaceChildren(BlogPage());
});
page("/login", async () => {
  app.replaceChildren(LoginPage());
});
page("/sign-up", async () => {
  app.replaceChildren(SignUpPage());
});

page();
