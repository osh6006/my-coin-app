import { create } from "zustand";

interface CoinDetailTabsStore {
  type: string;
  onChange: (type: string) => void;
}

const useCoinDetailTabs = create<CoinDetailTabsStore>((set) => ({
  type: "chart",
  onChange: (type: string) => set({ type }),
}));

export default useCoinDetailTabs;
