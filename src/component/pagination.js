import React from "react";

const Pagination = ({
  totalPages,
  handlePagination,
  pageNo,
  handleNextPagination,
  handlePreviousPagination,
  displayPerPage,
  displayPerPageValue,
}) => {
  const renderList = () => {
    const listItem = [];
    for (let i = 1; i <= totalPages; i++) {
      listItem.push(
        <li
          //   className={i == pageNo ? "pagination_active" : ""}
          onClick={() => handlePagination(i)}
          class={`h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center ${
            i == pageNo ? "bg-gray-400" : ""
          }`}
        >
          {i}
        </li>
      );
    }
    return listItem;
  };

  return (
    <>
      <div className="flex">
        <div class="flex items-center py-8 mx-auto">
          {pageNo == 1 ? (
            ""
          ) : (
            <li
              onClick={handlePreviousPagination}
              class="h-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
            >
              Previous
            </li>
          )}
          {renderList()}
          {pageNo == totalPages ? (
            ""
          ) : (
            <li
              onClick={handleNextPagination}
              class="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
            >
              Next
            </li>
          )}
        </div>
        <div className="py-8 auto">
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">
              Display per page
            </label>
            <select
              onChange={displayPerPage}
              value={displayPerPageValue}
              class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            >
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="8">8</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
