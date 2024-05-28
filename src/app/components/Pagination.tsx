import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  usersPerPage: number;
  totalUsers: number;
  paginate: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({ usersPerPage, totalUsers, paginate }) => {
  const pageCount = Math.ceil(totalUsers / usersPerPage);

  return (
    <div className="bg-white py-4 shadow-lg md:fixed md:bottom-0 md:left-0 md:w-full">
      <div className="flex justify-center">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={paginate}
          containerClassName={'flex items-center space-x-2'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link px-3 py-2 border border-gray-300 rounded'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link px-3 py-2 border border-gray-300 rounded'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link px-3 py-2 border border-gray-300 rounded'}
          activeClassName={'active'}
          activeLinkClassName={'bg-blue-500 text-white'}
        />
      </div>
    </div>
  );
};

export default Pagination;
