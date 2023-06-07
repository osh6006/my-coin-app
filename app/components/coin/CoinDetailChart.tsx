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
import { useEffect, useState } from "react";

interface CoinDetailChartProps {
  daily: any;
  monthly: any;
  yearly: any;
}

const chartTabs = {
  daily: "hours",
  monthly: "day",
  yearly: "month",
};

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const CoinDetailChart: React.FC<CoinDetailChartProps> = ({ daily = data, monthly = data, yearly = data }) => {
  const { type, onChange } = useCoinType();
  const [chartData, setChartData] = useState<any>(getNewDailyData(daily, type));

  useEffect(() => {
    onChange("hours");
  }, []);

  const handleTabs = (array: any, time: string) => {
    onChange(time);
    setChartData(getNewDailyData(array, time));
  };

  return (
    <div className="w-[90%] h-96 my-10">
      <ul className="min-w-[300px] flex flex-row-reverse justify-center sm:justify-normal gap-2 text-sm uppercase my-5">
        <li
          onClick={() => handleTabs(yearly, chartTabs.yearly)}
          className={`${
            type === "month" ? "bg-sky-900 text-white" : "bg-gray-100 hover:bg-sky-900 hover:text-white"
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
          onClick={() => handleTabs(daily, chartTabs.daily)}
          className={`${
            type === "hours" ? "bg-sky-900 text-white" : "bg-gray-100 hover:bg-sky-900 hover:text-white"
          } px-1 py-[2px] rounded-md cursor-pointer  duration-300 font-semibold flex justify-center items-center`}
        >
          1 Day
        </li>
      </ul>
      {chartData.length > 0 && (
        <ResponsiveContainer width="100%" minWidth={300} height="100%">
          <ComposedChart width={500} height={300} data={chartData || data}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="time" name="price" />
            <YAxis domain={[0, getChartRange(Math.floor(chartData[chartData.length - 1]?.close))]} dataKey={"close"} />
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

  function getChartRange(num: number): number {
    if (num > 10000) {
      return Math.floor(num + 10000);
    }
    if (num > 5000) {
      return Math.floor(num + 5000);
    }
    if (num > 1000) {
      return Math.floor(num + 1000);
    }
    if (num > 100) {
      return Math.floor(num + 100);
    }
    if (num > 10) {
      return Math.floor(num + 10);
    }
    return Math.floor(num + 2);
  }
};

export default CoinDetailChart;
