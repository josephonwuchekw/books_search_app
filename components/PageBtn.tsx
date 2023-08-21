import React from "react";

const PageBtn = ({
  startIndex,
  pageLimit,
  pageNumber,
}: {
  startIndex: number;
  pageLimit: number;
  pageNumber: number;
}) => {
  return <button>{pageNumber}</button>;
};

export default PageBtn;
