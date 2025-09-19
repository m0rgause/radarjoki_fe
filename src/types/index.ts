export interface User {
  id: string;
  email: string;
  username: string;
  role: UserRole;
}

export const UserRole = {
  ADMIN: "admin",
  USER: "user",
} as const;

export type ApiResponse<T = any> = {
  data?: T;
  error?: string;
  message?: string;
  status: number;
};

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  username: string;
  password: string;
}

export type UserRole = (typeof UserRole)[keyof typeof UserRole];
