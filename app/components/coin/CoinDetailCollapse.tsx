import { useState } from "react";
import { IconType } from "react-icons";
import { MdKeyboardArrowUp } from "react-icons/md";
import NumberPoint from "./NumberPoint";

interface CoinDetailExpandCollapseProps {
  title?: string;
  contents?: any;
  color?: string;
  open: boolean;
  type?: "reddit" | "facebook" | "twitter" | "cryptoCompare";
  icon: IconType;
}

const CoinDetailExpandCollapse: React.FC<CoinDetailExpandCollapseProps> = ({
  open,
  type,
  color,
  title,
  contents,
  icon: Icon,
}) => {
  const [expanded, setExpanded] = useState(open);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className=" w-full font-semibold cursor-pointer" onClick={toggleExpand}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon size={30} className={`${color}`} />
          {title}
        </div>
        <button
          className={`font-bold py-2 px-4 rounded transition-all duration-300 bg ${expanded ? "rotate-180" : ""}`}
        >
          <MdKeyboardArrowUp size={20} />
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-0" : "max-h-96"}`}>
        <div className="flex flex-col mt-3">
          {type === "reddit" && (
            <div className="pl-4 gap-2 grid grid-cols-3 text-center text-base font-bold text-white">
              <NumberPoint num={contents?.Points} title="Points" bgColor="bg-red-400" />
              <NumberPoint num={contents?.active_users} title="Users" bgColor="bg-blue-400" />
              <NumberPoint num={contents?.comments_per_day} title="Cmts/Day" bgColor="bg-green-400" />
              <NumberPoint num={contents?.comments_per_hour} title="Cmts/Hour" bgColor="bg-amber-400" />
              <NumberPoint num={contents?.posts_per_day} title="Posts/Day" bgColor="bg-violet-400" />
              <NumberPoint num={contents?.posts_per_hour} title="Posts/Hour" bgColor="bg-emerald-400" />
            </div>
          )}
          {type === "facebook" && (
            <div className="pl-4 gap-2 grid grid-cols-3 text-center text-base font-bold text-white">
              <NumberPoint num={contents?.Points} title="Points" bgColor="bg-red-400" />
              <NumberPoint num={contents?.likes} title="Likes" bgColor="bg-blue-400" />
              <NumberPoint num={contents?.talking_about} title="Talkings" bgColor="bg-green-400" />
            </div>
          )}
          {type === "twitter" && (
            <div className="pl-4 gap-2 grid grid-cols-3 text-center text-base font-bold text-white">
              <NumberPoint num={contents?.Points} title="Points" bgColor="bg-red-400" />
              <NumberPoint num={contents?.favourites} title="Favs" bgColor="bg-blue-400" />
              <NumberPoint num={contents?.followers} title="Followers" bgColor="bg-green-400" />
              <NumberPoint num={contents?.lists} title="Lists" bgColor="bg-amber-400" />
              <NumberPoint num={contents?.statuses} title="Statuses" bgColor="bg-violet-400" />
            </div>
          )}
          {type === "cryptoCompare" && (
            <div className="pl-4 gap-2 grid grid-cols-3 text-center text-base font-bold text-white">
              <NumberPoint num={contents?.Points} title="Points" bgColor="bg-red-400" />
              <NumberPoint num={contents?.Comments} title="Comments" bgColor="bg-blue-400" />
              <NumberPoint num={contents?.Followers} title="Followers" bgColor="bg-green-400" />
              <NumberPoint num={contents?.PageViews} title="PageViews" bgColor="bg-amber-400" />
              <NumberPoint num={contents?.Posts} title="Posts" bgColor="bg-violet-400" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinDetailExpandCollapse;
