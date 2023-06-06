"use client";

import useCoinDetailTabs from "../hooks/useCoinDetailTabs";

const Tabs = [{ type: "chart" }, { type: "desc" }, { type: "etc" }];

const CoinDetailTabs = () => {
  const { type, onChange } = useCoinDetailTabs();

  return (
    <ul className="w-full max-w-md flex items-center justify-around rounded-md overflow-hidden gap-2">
      {Tabs.map((el: any) => (
        <li
          className={`${
            type !== el.type ? "bg-white text-sky-950 hover:bg-sky-900 hover:text-white" : "bg-sky-900 text-white "
          } uppercase flex-1 text-center cursor-pointer p-2  font-bold  transition duration-300 border `}
          key={el.type}
          onClick={() => onChange(el.type)}
        >
          {el.type}
        </li>
      ))}
    </ul>
  );
};

export default CoinDetailTabs;
