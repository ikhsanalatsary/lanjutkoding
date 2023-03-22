import Link from 'next/link';
import React from 'react';
import { dotts } from '../constants/PageConstant';
import usePagination from '../hooks/usePagination';

export type PaginationProps = {
  totalItems: number;
  currentPage: number;
  renderPageLink: (page: number) => string;
  itemsPerPage?: number;
};

const Pagination = ({ totalItems, currentPage, itemsPerPage = 10, renderPageLink }: PaginationProps) => {
  const pages = usePagination(totalItems, currentPage, itemsPerPage);
  // "page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md
  return (
    <div className="flex justify-center">
      <nav aria-label="Pagination">
        <ul className="flex list-style-none">
          <li>
            <p className="pointer-events-none relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">
              Halaman:
            </p>
          </li>
          {pages.map((pageNumber, i) =>
            pageNumber === dotts ? (
              <li>
                <span key={i} className="px-4 py-1.5 rounded-full text-sm font-semibold text-black">
                  {pageNumber}
                </span>
              </li>
            ) : (
              <li key={i} aria-current={currentPage === pageNumber ? 'page' : 'false'}>
                <Link href={renderPageLink(pageNumber as number)}>
                  <a
                    className={`${
                      pageNumber === currentPage ? 'text-blue-800' : 'text-black'
                    } relative block rounded p py-1.5 px-3 text-sm font-medium`}
                  >
                    {pageNumber}
                  </a>
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
