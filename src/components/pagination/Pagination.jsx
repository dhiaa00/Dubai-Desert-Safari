import { useRef, useState } from "react";
import "./pagination.css";

const Pagination = ({ pagesNumber, currentPage, setCurrentPage }) => {
  const left = useRef();
  const right = useRef();
  const handleNext = (e) => {
    if (currentPage === 1) {
      setCurrentPage(2);
      left.current.classList.remove("final");
    } else if (currentPage === pagesNumber - 1) {
      setCurrentPage(currentPage + 1);
      e.target.classList.add("final");
    } else if (currentPage < pagesNumber - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = (e) => {
    if (currentPage === pagesNumber) {
      setCurrentPage(pagesNumber - 1);
      right.current.classList.remove("final");
    } else if (currentPage === 2) {
      setCurrentPage(currentPage - 1);
      e.target.classList.add("final");
    } else if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="pagination">
      <i
        className="bi bi-chevron-left final"
        ref={left}
        onClick={(e) => handlePrev(e)}></i>
      {currentPage}
      <i
        className="bi bi-chevron-right"
        ref={right}
        onClick={(e) => handleNext(e)}></i>
    </div>
  );
};

export default Pagination;
