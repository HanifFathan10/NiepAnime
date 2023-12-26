"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center text-color-primary">
        <h1 className="text-4xl font-bold">404 NOT FOUND</h1>
        <button
          className="hover:text-color-accent transition-all underline"
          onClick={() => router.back()}
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default Page;
