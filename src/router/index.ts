// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/RegisterView.vue"),
      meta: { requiresAuth: false },
    },
  ],
});

// Global Navigation Guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated;
  const isAdmin = authStore.isAdmin;

  if (to.meta.requiresAuth && !isAuthenticated) {
    // If route requires auth and user is not logged in, redirect to login
    next({ name: "login" });
  } else if (to.meta.requiresAdmin && !isAdmin) {
    // If route requires admin role and user is not an admin, deny access
    next({ name: "dashboard" }); // or a 403 page
  } else if (to.name === "login" && isAuthenticated) {
    // Prevent logged-in users from accessing the login page
    next({ name: "dashboard" });
  } else {
    // Otherwise, proceed
    next();
  }
});

export default router;
