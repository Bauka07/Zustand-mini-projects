import { create } from "zustand";

interface CounterStore {
  count: number;
  increament: () => void;
  decrement: () => void;
  reset: () => void;
}

interface ThemeStore {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

type Store = CounterStore & ThemeStore;

export const useCounter = create<Store>((set) => ({
  count: 0,
  increament: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set(() => ({ count: 0 })),

  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
