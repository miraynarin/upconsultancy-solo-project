import page from "page"
import HomePage from "./pages/Home/home"
import ServicePage from "./pages/Services/Services"
const app = document.querySelector('#app')
page("/", async () => {
  app.appendChild(HomePage())
})
page("/Services", async () => {
  app.appendChild(ServicePage())
})
page()