import { create } from "zustand";

interface TabState {
  tabSelected: string;
  tabStep: number;

  setTabSelected: (tab: string) => void;
  setTabStep: (step: number) => void;
}

const useTabStore = create<TabState>()((set) => ({
  tabSelected: "mapping",
  tabStep: 0,

  setTabSelected: (tab: string) => set({ tabSelected: tab, tabStep: 0 }),
  setTabStep: (step: number) => set({ tabStep: step }),
}));

export default useTabStore;
