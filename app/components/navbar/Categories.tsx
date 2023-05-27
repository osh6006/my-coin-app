import React from "react";
import Container from "../Container";
import CategoryBox from "./CategoryBox";
import { BiMedal, BiGitCompare } from "react-icons/bi";
import { FaHotjar } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { FaBitcoin } from "react-icons/fa";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "TopPrice",
    icon: BiMedal,
    description: "This property is top price coin",
    isNew: false,
  },
  {
    label: "Hot",
    icon: FaHotjar,
    description: "This property is hot coin",
    isNew: false,
  },
  {
    label: "News",
    icon: ImNewspaper,
    description: "This property is news about coin",
    isNew: false,
  },
  {
    label: "NewCoin",
    icon: FaBitcoin,
    description: "This property is new coin",
    isNew: false,
  },
  {
    label: "Compare",
    icon: BiGitCompare,
    description: "This property is coin compare",
    isNew: true,
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainpage = pathname === "/";

  if (!isMainpage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories?.map(item => (
          <CategoryBox
            key={item?.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
            selected={category == item.label}
            isNew={item.isNew}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
