"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Bar,
} from "recharts";
import useCoinType from "../hooks/useChartType";
import { useState } from "react";

interface CoinDetailChartProps {
  daily: any;
  monthly: any;
  yearly: any;
  type?: string;
}

const chartTabs = {
  daily: "hours",
  monthly: "day",
  yearly: "month",
};

const CoinDetailChart: React.FC<CoinDetailChartProps> = ({ daily, monthly, yearly }) => {
  const { type, onChange } = useCoinType();
  const [newDaily, setNewDaily] = useState<any>(getNewDailyData(daily, type));

  console.log(monthly);

  const handleTabs = (array: any, time: string) => {
    onChange(time);
    setNewDaily(getNewDailyData(array, type));
  };

  return (
    <div className="w-[90%] h-96 my-10">
      <ul className="min-w-[300px] flex flex-row-reverse justify-center sm:justify-normal gap-2 text-sm uppercase my-5">
        <li
          onClick={() => handleTabs(yearly, chartTabs.daily)}
          className={`${
            type === "hours" ? "bg-sky-900 text-white" : "bg-gray-100 hover:bg-sky-900 hover:text-white"
          } px-1 py-[3px] rounded-md cursor-pointer  duration-300 font-semibold flex justify-center items-center`}
        >
          1 Years
        </li>
        <li
          onClick={() => handleTabs(monthly, chartTabs.monthly)}
          className={`${
            type === "day" ? "bg-sky-900 text-white" : "bg-gray-100 hover:bg-sky-900 hover:text-white"
          } px-1 py-[2px] rounded-md cursor-pointer  duration-300 font-semibold flex justify-center items-center`}
        >
          1 Month
        </li>
        <li
          onClick={() => handleTabs(daily, chartTabs.yearly)}
          className={`${
            type === "month" ? "bg-sky-900 text-white" : "bg-gray-100 hover:bg-sky-900 hover:text-white"
          } px-1 py-[2px] rounded-md cursor-pointer  duration-300 font-semibold flex justify-center items-center`}
        >
          1 Day
        </li>
      </ul>
      {newDaily.length > 0 && (
        <ResponsiveContainer width="100%" minWidth={300} height="100%">
          <ComposedChart width={500} height={300} data={newDaily}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="time" />
            <YAxis dataKey="close" name="weight" unit="$" />
            <Tooltip />
            <Line type="natural" dataKey="close" stroke="#000435" activeDot={{ r: 8 }} />
            {/* <Legend /> */}
            {/* <Bar dataKey="close" barSize={20} fill="#7ac4c0" /> */}
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </div>
  );

  interface DateTime {
    year: number;
    month: number;
    day: number;
    hours: number;
    minutes: number;
    seconds: number;
    [key: string]: number; // 인덱스 시그니처 추가
  }

  function timeStampToTime(timestamp: number, type: string) {
    const date = new Date(timestamp * 1000);
    const dateObj: DateTime = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    };
    return dateObj[type];
  }

  function getNewDailyData(array: any, type: string) {
    return array.map((el: any) => {
      return { ...el, time: timeStampToTime(el.time, type) };
    });
  }
};

export default CoinDetailChart;
