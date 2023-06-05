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

interface CoinDetailChartProps {
  daily: any;
}

const CoinDetailChart: React.FC<CoinDetailChartProps> = ({ daily }) => {
  const newDaily = getNewDailyData(daily.Data, "day");
  return (
    <div className="w-full h-96 my-10">
      {newDaily.length > 0 && (
        <ResponsiveContainer width="80%" minWidth={375} height="100%">
          <ComposedChart
            width={500}
            height={300}
            data={newDaily}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Line type="natural" dataKey="close" stroke="#000435" activeDot={{ r: 8 }} />
            {/* <Bar dataKey="close" barSize={20} fill="#7ac4c0" /> */}
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

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

export default CoinDetailChart;
