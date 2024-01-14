import { authUserSession } from "@/libs/auth-libs";
import React from "react";
import DropdownProfile from "./DropdownProfile";

const UserActionButton = async () => {
  const user = await authUserSession();
  return (
    <div className="flex justify-between items-center gap-2">
      <DropdownProfile user={user} />
    </div>
  );
};

export default UserActionButton;
