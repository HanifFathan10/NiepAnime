"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (
      searchRef.current.value !== "" &&
      searchRef.current.value.trim() !== ""
    ) {
      router.push(`/search/${searchRef.current.value}`);
      searchRef.current.value = "";
    }
  };
  return (
    <div className="relative">
      <form>
        <input
          type="text"
          placeholder="Cari Anime"
          ref={searchRef}
          name="search"
          id="search"
          className="p-2 rounded-lg w-full"
        />
        <button className="absolute top-2 end-2" onClick={handleSearch}>
          <MagnifyingGlass size={24} />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
