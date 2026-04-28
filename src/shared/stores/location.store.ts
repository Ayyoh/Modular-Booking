import { create } from "zustand";

type LocationStore = {
  selectedLocation: string;

  setSelectedLocation: (location: string) => void;
};

export const useLocationStore = create<LocationStore>((set) => ({
  selectedLocation: "",

  setSelectedLocation: (location) => set({ selectedLocation: location }),
}));
