import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleNextPage = () => {
    setPage((prevState) => {
      if (prevState >= lastPage) {
        return prevState;
      }
      return prevState + 1;
    });
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prevState) => {
      if (prevState <= 1) {
        return prevState;
      }
      return prevState - 1;
    });
    scrollTop();
  };
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      <button
        className="transition-all hover:text-color-accent"
        onClick={handlePrevPage}
      >
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        className="transition-all hover:text-color-accent"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
