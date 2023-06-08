import { useEffect, useState } from "react";

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 500;
  let minPage = 1;
  let maxPage = 5;
  const [pages, setPages] = useState<number[]>([1, 2, 3, 4, 5]);

  const pageChange = (pageNumber: number) => {
    if (currentPage > totalPage || currentPage < 1) return;
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (currentPage < 1 || currentPage > totalPage) return;
    if (currentPage <= 5) {
      minPage = 1;
      maxPage = 5;
    }
    if (currentPage >= 496) {
      minPage = 496;
      maxPage = totalPage;
    }
    if ((currentPage > maxPage && currentPage + 2 <= totalPage) || (currentPage < minPage && currentPage - 2 >= 1)) {
      maxPage = currentPage + 2;
      minPage = currentPage - 2;
    }
    let newPages: number[] = [];
    for (let i = minPage; i <= maxPage; i++) {
      newPages.push(i);
    }
    setPages(newPages);
  }, [currentPage]);

  return { currentPage, pages, pageChange };
};

export default usePagination;
