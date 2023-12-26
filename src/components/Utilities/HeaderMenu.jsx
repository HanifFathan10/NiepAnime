import React from "react";

const HeaderMenu = ({ title }) => {
  return (
    <div className="flex justify-between items-center text-color-primary p-4">
      <h1 className="text-color-primary text-4xl font-bold">{title}</h1>
    </div>
  );
};

export default HeaderMenu;
