import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";
import React from "react";

const UserActionButton = async () => {
  const user = await authUserSession();

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex justify-between items-center gap-2">
      {user && (
        <Link href="/users/dashboard" className="text-2xl font-bold">
          Dashboard
        </Link>
      )}
      <Link href={actionUrl} className="text-2xl font-bold">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
