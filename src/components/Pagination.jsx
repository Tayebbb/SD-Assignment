import React from 'react';

const Pagination = ({ total, perPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="responsive-margin bg-dark p-2" style={{ borderRadius: '8px' }}>
      <div className="flex gap-1 flex-center flex-wrap">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => onPageChange(num)}
            className={`btn transition-all ${
              currentPage === num ? 'btn-primary' : 'btn-secondary'
            }`}
            style={{
              minWidth: 'clamp(36px, 8vw, 48px)',
              height: 'clamp(36px, 8vw, 48px)',
              padding: '0.5rem',
              boxShadow: currentPage === num ? '0 0 5px #ffeb3b' : 'none',
            }}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
