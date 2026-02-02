import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,

      login: (user, token) =>
        set({
          token,
          isAuthenticated: true,
        }),

      logout: () => {
        set({
          token: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: "auth-token",
      storage: createJSONStorage((RememberMe = true) =>
        RememberMe ? localStorage : sessionStorage,
      ),
    },
  ),
);
