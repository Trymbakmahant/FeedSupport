import { create } from "zustand";

type Store = {
  count: number;
  inc: () => void;
};

export const useCount = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

type BussinessInfo = {
  id: string;
  username: string;
  description: string;
  email: string;
};

interface BusinessInfoState {
  bussinessInfo: BussinessInfo;
  setBusinessInfo: (info: BussinessInfo) => void;
  updateBusinessInfo: (updates: Partial<BussinessInfo>) => void;
}

export const useBusinessInfoStore = create<BusinessInfoState>((set) => ({
  bussinessInfo: {
    id: "",
    username: "",
    description: "",
    email: "",
  },
  setBusinessInfo: (info: BussinessInfo) => set({ bussinessInfo: info }),
  updateBusinessInfo: (updates: Partial<BussinessInfo>) =>
    set((state) => ({
      bussinessInfo: { ...state.bussinessInfo, ...updates },
    })),
}));
