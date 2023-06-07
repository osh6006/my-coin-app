"use client";

interface NumberPointProps {
  num: number;
  title: string;
  bgColor: string;
}

const NumberPoint: React.FC<NumberPointProps> = ({ num, title, bgColor }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`flex flex-col w-12 h-12 rounded-full items-center justify-center ${bgColor}`}>
        {num && compactNumberFormatter.format(num)}
      </div>
      <div className="text-black">{title}</div>
    </div>
  );
};

const compactNumberFormatter = new Intl.NumberFormat("en", {
  notation: "compact",
});

export default NumberPoint;
