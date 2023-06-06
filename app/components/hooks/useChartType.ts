import { create } from "zustand";

interface ChartTypeStore {
  type: string;
  onChange: (type: string) => void;
}

const useCoinType = create<ChartTypeStore>((set) => ({
  type: "hours",
  onChange: (type: string) => set({ type }),
}));

export default useCoinType;
