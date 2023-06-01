import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface Iprams {
  coinId?: string;
}

export async function POST(request: Request, { params }: { params: Iprams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { coinId } = params;

  if (!coinId || typeof coinId !== "string") {
    throw new Error("Invalid Id");
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];
  favoriteIds.push(coinId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds,
    },
  });

  return NextResponse.json(user);
}

export async function DELETE(request: Request, { params }: { params: Iprams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { coinId } = params;

  if (!coinId || typeof coinId !== "string") {
    throw new Error("invalid ID");
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];
  const newFavoriteIds = favoriteIds.filter((id) => {
    return id !== coinId;
  });

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds: newFavoriteIds,
    },
  });

  return NextResponse.json(user);
}
