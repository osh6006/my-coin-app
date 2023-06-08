interface CoinDetailEtcProps {
  totalMined: number;
  rating: any;
}

const ratingColor: { [key: string]: string } = {
  A: "text-blue-400",
  B: "text-green-400",
  C: "text-yellow-400",
  D: "text-red-400",
};

const CoinDetailEtc: React.FC<CoinDetailEtcProps> = ({ totalMined, rating }) => {
  const compactNumberFormatter = new Intl.NumberFormat("en", {
    notation: "compact",
  });

  return (
    <div className="w-full sm:w-[90%] my-10 text-center sm:text-start space-y-2 ">
      <div className="flex text-xl p-10 flex-col text-slate-600 font-semibold shadow-none sm:shadow-md">
        Total coins mined
        <div className="font-bold text-black text-5xl text-center my-10">
          {compactNumberFormatter.format(totalMined)}
        </div>
      </div>
      <div className=" flex text-xl p-10 flex-col text-slate-600 font-semibold shadow-none sm:shadow-md">
        Rating
        <div className="flex  items-center justify-around">
          <div
            className={`font-bold flex-1  text-5xl text-center my-10 space-y-2 py-3  " ${
              ratingColor[rating.MarketPerformanceRating[0]]
            }`}
          >
            <div>{rating.MarketPerformanceRating || "-"}</div>
            <div className="text-base font-semibold uppercase text-slate-500">Market</div>
          </div>
          <div
            className={`font-bold flex-1  text-5xl text-center my-10 space-y-2 py-3 ${ratingColor[rating.Rating[0]]}`}
          >
            <div>{rating.Rating || "-"}</div>
            <div className="text-base font-semibold uppercase text-slate-500">general</div>
          </div>
          <div
            className={`font-bold flex-1  text-5xl text-center my-10 space-y-2 py-3 ${
              ratingColor[rating.TechnologyAdoptionRating[0]]
            }`}
          >
            <div>{rating.TechnologyAdoptionRating || "-"}</div>
            <div className="text-base font-semibold uppercase text-slate-500">Tech</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetailEtc;
