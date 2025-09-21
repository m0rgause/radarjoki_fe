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

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: getInitialTheme() as Theme,
  }),
  actions: {
    setTheme(newTheme: Theme) {
      this.theme = newTheme;
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    },
    toggleTheme() {
      const newTheme = this.theme === "light" ? "dark" : "light";
      this.setTheme(newTheme);
    },
    initialize() {
      applyTheme(this.theme);
    },
  },
});
