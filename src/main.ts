import { createApp, markRaw } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import axios from "axios";
import { useAuthStore } from "./stores/auth";
import { useThemeStore } from "./stores/theme";

axios.defaults.baseURL = "http://localhost:3000";
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
  const themeStore = useThemeStore();

  themeStore.initialize();
  try {
    await authStore.fetchUser();
  } catch (error) {
    console.error("Failed to fetch current user:", error);
  } finally {
    app.mount("#app");
  }
}

initializeApp();
