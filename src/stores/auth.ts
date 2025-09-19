import { defineStore } from "pinia";
import axios from "axios";
import type { ApiResponse, User } from "@/types";

interface AuthState {
  user: User | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    user: null,
  }),
  getters: {
    isAuthenticated: (state): boolean => !!state.user,
    isAdmin: (state): boolean => state.user?.role === "admin",
  },
  actions: {
    async login(email: string, password: string) {
      try {
        const response = await axios.post<{ user: User }>(
          `${import.meta.env.VITE_API_URL}/api/auth/login`,
          { email, password }
        );
        this.user = response.data.user;
        this.router.push({ name: "Home" });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          let err = error?.response?.data as ApiResponse;
          throw new Error(err.error || "An Unknown error occurred");
        }
        throw new Error("Login failed due to a network issue or server issue");
      }
    },
    async register(email: string, username: string, password: string) {
      try {
        const response = await axios.post<{ user: User }>(
          `${import.meta.env.VITE_API_URL}/api/auth/register`,
          { email, username, password }
        );
        this.user = response.data.user;
        this.router.push("/login");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          let err = error?.response?.data as ApiResponse;
          throw new Error(err.error || "An Unknown error occurred");
        }
        throw new Error(
          "Registration failed due to a network issue or server issue"
        );
      }
    },
  },
});
