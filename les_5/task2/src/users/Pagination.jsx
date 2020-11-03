import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {

  let isPrevPageAvaible = false;
  let isNextPageAvaible = false;

  //номер текущей страницы через количество страниц
  //используем Math.ceil чтобы показать остаток юзеров
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  currentPage === 0 ? isPrevPageAvaible = true : false;
  currentPage === totalPages - 1 ? isNextPageAvaible = true : false;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageAvaible}>
        {isPrevPageAvaible ? "" : "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={isNextPageAvaible}>
        {isNextPageAvaible ? "" : "→"}
      </button>
    </div>
  )

};

export default Pagination;