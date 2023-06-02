"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../Types";
import useFavorite from "./hooks/useFavorite";

interface HeartButtonProps {
  type?: string;
  coinId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({ coinId, currentUser, type = "coin" }) => {
  const { hasFavorite, toggleFavorite } = useFavorite({ coinId, currentUser, type });

  return (
    <div onClick={toggleFavorite} className="relative transition cursor-pointer group ">
      <AiFillHeart
        size={24}
        className={`${hasFavorite ? "fill-sky-900" : "fill-gray-300"} hover:fill-sky-900 transition`}
      />
    </div>
  );
};

export default HeartButton;
