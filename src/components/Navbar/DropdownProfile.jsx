"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const DropdownProfile = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (event.target.closest(".toggle-button") === null) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      {user ? (
        <ProfileSettings
          toggleDropdown={toggleDropdown}
          isOpen={isOpen}
          src={user.image}
          alt={user.name}
          user={user}
        />
      ) : (
        <ProfileSettings
          toggleDropdown={toggleDropdown}
          isOpen={isOpen}
          src="/images/profile-default.jpg"
          alt="Default Profile"
          user={user}
        />
      )}
    </>
  );
};

const ProfileSettings = ({ toggleDropdown, isOpen, src, alt, user }) => {
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="relative inline-block toggle-button">
      <button onClick={toggleDropdown}>
        <Image
          src={src}
          alt={alt}
          width={50}
          height={50}
          className="object-cover w-16 h-16 rounded-full ring ring-gray-300 dark:ring-gray-600"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl bg-color-secondary text-color-primary">
          <a
            href="/"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-200"
          >
            Home
          </a>
          {user && (
            <a
              href="/users/dashboard"
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-200"
            >
              Dashboard
            </a>
          )}
          <a
            href={actionUrl}
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-200"
          >
            {actionLabel}
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownProfile;
