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

export const useBooksStore = create((set) => ({
  // state
  selectedCategories: [],
  toggleCategory: (category) =>
    set((state) => ({
      selectedCategories: state.selectedCategories.includes(category)
        ? state.selectedCategories.filter((c) => c !== category)
        : [...state.selectedCategories, category],
    })),

  // ===== Publishers =====
  selectedPublishers: [],
  togglePublisher: (publisher) =>
    set((state) => ({
      selectedPublishers: state.selectedPublishers.includes(publisher)
        ? state.selectedPublishers.filter((p) => p !== publisher)
        : [...state.selectedPublishers, publisher],
    })),

  // ===== Year =====
  selectedYear: [],
  toggleYear: (Year) =>
    set((state) => ({
      selectedYear: state.selectedYear.includes(Year)
        ? state.selectedYear.filter((p) => p !== Year)
        : [...state.selectedYear, Year],
    })),

  // ===== Common =====
  search: "",
  sort: "default",
  page: 1,

  setSearch: (value) => set({ search: value }),

  setSort: (value) => set({ sort: value }),

  setPage: (page) => set({ page }),
}));
