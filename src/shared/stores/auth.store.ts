import { create } from "zustand";

type Role = "driver" | "host";

type User = {
  role: Role;
};

type AuthStore = {
  user: User | null;

  login: (role: Role) => void;

  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,

  login: (role) => {
    set({
      user: { role },
    });
  },

  logout: () => {
    set({
      user: null,
    });
  },
}));
