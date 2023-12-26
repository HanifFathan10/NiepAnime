import CartCollection from "@/components/Dashboard/CartCollection";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import React from "react";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <div className="w-full mt-4 px-4">
      <Header title="My Collection" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <CartCollection collection={collection} />
      </div>
    </div>
  );
};

export default Page;
