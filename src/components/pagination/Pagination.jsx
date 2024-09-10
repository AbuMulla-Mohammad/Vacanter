import React from 'react';

export default function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const generatePageNumbers = () => {
        const pages = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);

            if (currentPage > 4) {
                pages.push('...');
            }
            const startPage = Math.max(2, currentPage - 2);
            const endPage = Math.min(totalPages - 1, currentPage + 2);
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
            if (currentPage < totalPages - 3) {
                pages.push('...');
            }
            pages.push(totalPages);
        }
        return pages;
    };

    const pageNumbers = generatePageNumbers();

    return (
        <div className="pagination flex justify-end gap-6 items-center">

            {pageNumbers.map((page, index) => (
                <React.Fragment key={index}>
                    {
                        page === '...' ? (
                            <span className="pagination-dots text-[20px] flex justify-center items-center rounded-full">...</span>
                        ) : (
                            <button
                                className={` transition-all duration-500 flex justify-center items-center w-[30px] h-[30px] rounded-full hover:bg-[#e2bd4c] ${currentPage === page ? "bg-[#FFDE7F]" : ""}`}
                                onClick={() => onPageChange(page)}
                                disabled={currentPage === page}
                            >
                                {page}
                            </button>
                        )
                    }
                </React.Fragment>
            ))
            }
            <button
                className="prevBtn w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#E7E6E6] transition-all duration-500 hover:bg-[#aaa9a9] disabled:bg-[#eee]"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <img src="/public/icons/PaginationArrow.svg" className="rotate-180 rounded-full" alt="" />
            </button>
            <button
                className="prevBtn w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#E7E6E6] transition-all duration-500 hover:bg-[#aaa9a9] disabled:bg-[#eee]"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <img src="/public/icons/PaginationArrow.svg" alt="" />
            </button>
        </div >
    );
}
