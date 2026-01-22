import page from "page";
import HomePage from "./pages/Home/home";
import ServicePage from "./pages/Services/Services";
import LoginPage from "./pages/Login/Login";
import SignUpPage from "./pages/SignUp/SignUp";

const app = document.querySelector("#app");
page("/", async () => {
  app.replaceChildren(HomePage());
});
page("/services", async () => {
  app.replaceChildren(ServicePage());
});
page("/login", async () => {
  app.replaceChildren(LoginPage());
});
page("/sign-up", async () => {
  app.replaceChildren(SignUpPage());
});
page();
