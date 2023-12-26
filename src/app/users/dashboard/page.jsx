import React from "react";
import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
const Page = async () => {
  const user = await authUserSession();
  return (
    <div className="flex flex-col justify-center items-center mt-8 text-color-primary">
      <h3 className="text-3xl font-bold ">Welcome, {user.name}</h3>
      <Image src={user.image} alt={user.name} width={200} height={200} />
      <div className="py-8 flex flex-wrap gap-4">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
