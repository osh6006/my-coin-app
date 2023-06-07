import { BsFacebook, BsReddit, BsTwitter } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import CoinDetailExpandCollapse from "./CoinDetailCollapse";

interface CoinDetailSocialProps {
  data: any;
}

const CoinDetailSocial: React.FC<CoinDetailSocialProps> = ({ data }) => {
  return (
    <div className="mx-4 flex flex-col p-3 rounded-md shadow-sm gap-4 min-w-[200px]">
      <h1 className="font-bold text-xl">SNS Info</h1>
      <div className="flex items-center gap-3 text-lg font-semibold">
        <CoinDetailExpandCollapse
          title="Reddit"
          icon={BsReddit}
          color="text-orange-500"
          contents={data.Reddit}
          type="reddit"
          open={false}
        />
      </div>
      <div className="flex items-center gap-3 text-lg font-semibold">
        <CoinDetailExpandCollapse
          title="Facebook"
          icon={BsFacebook}
          color="text-blue-500"
          contents={data.Facebook}
          type="facebook"
          open={true}
        />
      </div>
      <div className="flex items-center gap-3 text-lg font-semibold">
        <CoinDetailExpandCollapse
          title="Twitter"
          icon={BsTwitter}
          color="text-sky-500"
          contents={data.Twitter}
          type="twitter"
          open={true}
        />
      </div>
      <div className="flex items-center gap-3 text-lg font-semibold">
        <CoinDetailExpandCollapse
          title="Crypto Compare"
          icon={BiGitCompare}
          color="text-green-500"
          contents={data.CryptoCompare}
          type="cryptoCompare"
          open={true}
        />
      </div>
    </div>
  );
};

export default CoinDetailSocial;
