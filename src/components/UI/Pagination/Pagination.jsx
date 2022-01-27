import React from "react";
import { getPagesArray } from "../../../utils/pages";

export default function Pagination({ totalPages, page, changePage }) {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className="pagination">
      {pagesArray.map((p, index) => {
        return (
          <span
            key={index}
            className={page === p ? "current" : ""}
            onClick={() => changePage(p)}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
}
