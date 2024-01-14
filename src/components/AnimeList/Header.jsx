import Link from "next/link";
import React from "react";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center text-color-primary px-4 pt-6 pb-4">
      <h1 className="text-md md:text-xl font-bold uppercase">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="text-sm md:text-lg underline hover:text-color-accent transition-all lowercase"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
