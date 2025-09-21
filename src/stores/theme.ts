import { defineStore } from "pinia";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const html = document.documentElement;
  if (theme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: "light" as Theme,
  }),
  actions: {
    setTheme(newTheme: Theme) {
      this.theme = newTheme;
      applyTheme(newTheme);
    },
    toggleTheme() {
      const newTheme = this.theme === "light" ? "dark" : "light";
      this.setTheme(newTheme);
    },
  },
});
