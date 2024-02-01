export function paginate(length, currentPage, sortedList) {
  const TOURS_BY_PAGE = 6;
  const pagesNumber = Math.ceil(length / TOURS_BY_PAGE);
  const startingIndex = TOURS_BY_PAGE * (currentPage - 1);
  const endingIndex = TOURS_BY_PAGE * currentPage;
  const currentTours = sortedList.slice(startingIndex, endingIndex);

  return {
    pagesNumber,
    currentTours,
  };
}
