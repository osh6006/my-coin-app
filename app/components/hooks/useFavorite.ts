import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "@/app/Types";

import useLoginModal from "./useLoginModal";

interface IUseFavorite {
  coinId: string;
  currentUser?: SafeUser | null;
  type: string;
}

const useFavorite = ({ coinId, currentUser, type }: IUseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(coinId);
  }, [currentUser, coinId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      if (type === "coin") {
        try {
          let request;
          if (hasFavorite) {
            request = () => axios.delete(`/api/favorites/${coinId}`);
          } else {
            request = () => axios.post(`/api/favorites/${coinId}`);
          }
          await request();
          router.refresh();
          toast.success("Success");
        } catch (error) {
          toast.error("Something went wrong.");
        }
      }

      if (type === "news") {
        try {
          let request;
          if (hasFavorite) {
            request = () => axios.delete(`/api/favorites/${coinId}`);
          } else {
            request = () => axios.post(`/api/favorites/${coinId}`);
          }
          await request();
          router.refresh();
          toast.success("Success");
        } catch (error) {
          toast.error("Something went wrong.");
        }
      }
    },
    [currentUser, hasFavorite, coinId, loginModal, router, type]
  );

  return { hasFavorite, toggleFavorite };
};

export default useFavorite;
