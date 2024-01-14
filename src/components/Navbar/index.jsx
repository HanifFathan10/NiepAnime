import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <nav className="bg-color-accent w-full shadow-md">
      <div className="flex flex-col md:flex-row justify-between md:items-center px-4 py-2 gap-2">
        <Link
          href="/"
          className="hidden md:block text-xl md:text-2xl font-bold text-color-primary"
        >
          AnimeList
        </Link>
        <div className="flex gap-2 justify-between items-center">
          <InputSearch />
          <UserActionButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
