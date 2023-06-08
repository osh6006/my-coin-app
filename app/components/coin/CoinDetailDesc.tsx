import { AiOutlineLink } from "react-icons/ai";

interface CoinDetailDescProps {
  contents: any;
}

const CoinDetailDesc: React.FC<CoinDetailDescProps> = ({ contents }) => {
  return (
    <div className="w-full px-10 sm:px-10 sm:w-[90%] my-10 space-y-2">
      <p className="text-lg">{contents?.Description}</p>
      <div className="flex items-center gap-2 ">
        <AiOutlineLink size={23} className="text-sky-900 " />
        <a
          href={contents?.AssetWebsiteUrl}
          target="_blank"
          className="font-bold text-lg text-sky-900 underline"
          rel="noopener noreferrer"
        >
          The official website is here
        </a>
      </div>
      <div className="flex items-center gap-2 ">
        <AiOutlineLink size={23} className="text-sky-900 " />
        <a
          href={contents?.AssetWhitepaperUrl}
          target="_blank"
          className="font-bold text-lg text-sky-900 underline"
          rel="noopener noreferrer"
        >
          The whitepaper website is here
        </a>
      </div>
    </div>
  );
};

export default CoinDetailDesc;
