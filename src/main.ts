import { createApp, markRaw } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import axios from "axios";
import { useAuthStore } from "./stores/auth";

axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.withCredentials = true;

const pinia = createPinia();
const app = createApp(App);

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);

async function initializeApp() {
  const authStore = useAuthStore();
  try {
    await authStore.fetchUser();
  } catch (error) {
    console.error("Failed to fetch current user:", error);
  } finally {
    app.mount("#app");
  }
}

initializeApp();
