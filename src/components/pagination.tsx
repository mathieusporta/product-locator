import React from "react";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";

const PaginationVisu = ({ currentPage, pageCount }) => {
  const router = useRouter();
  const paginationHandler = (page) => {
    const currentPath = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery.page = page.selected + 1;
    router
      .push({
        pathname: currentPath,
        query: currentQuery,
      })
      .then(() => window.scrollTo(0, 0));
  };
  return (
    <div className="paginateCenter">
      <ReactPaginate
        onPageChange={paginationHandler}
        initialPage={currentPage - 1}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        previousLabel="Precedent"
        nextLabel="Suivant"
        activeClassName="activated"
        breakLabel="..."
        pageClassName="paginate"
        containerClassName="custom-paginate"
      />
    </div>
  );
};
export default PaginationVisu;
