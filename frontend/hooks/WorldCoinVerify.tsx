import { create } from "zustand";

type WorldCoinVerification = {
  verified: boolean;
  setVerification: (values: boolean) => void;
};

export const useWorldCoinStore = create<WorldCoinVerification>((set) => ({
  verified: false,
  setVerification: (flag) => set({ verified: flag }),
}));
