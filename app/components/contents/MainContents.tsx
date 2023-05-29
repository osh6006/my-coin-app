"use client";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React from "react";
import useCoin from "../hooks/useCoin";
import EmptyState from "../EmptyState";
import Loading from "../Loading";
import CoinCard from "./CoinCard";

interface MainContentsProps {}

const MainContents: React.FC<MainContentsProps> = ({}) => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/" && category == null) {
    router.push("?category=Top");
  }

  const { isLoading, data } = useCoin(category);

  if (isLoading === false && data.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <div
      className="pt-24 relative grid grid-cols-1 
          sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"
    >
      {isLoading && (
        <div className="absolute w-screen h-screen">
          <Loading />
        </div>
      )}
      {isLoading || (
        <>
          {data?.Data?.map((el: any, i: number) => (
            <CoinCard
              key={i}
              name={el?.CoinInfo?.Name}
              price={el?.RAW?.USD?.PRICE}
              imgUrl={el?.CoinInfo?.ImageUrl}
              toSymbol={el?.RAW?.USD?.TOSYMBOL}
              openDay={el?.RAW?.USD?.OPENDAY}
              highDay={el?.RAW?.USD?.HIGHDAY}
              lowDay={el?.RAW?.USD?.LOWDAY}
              rank={i + 1}
              rating={el.CoinInfo.Rating.Weiss.Rating}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default MainContents;
