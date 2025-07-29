import React from 'react';

const Pagination = ({ total, perPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(total / perPage);

  return (
    <div style={{ marginTop: '15px', background: '#0a1733', padding: '10px', borderRadius: '8px' }}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          style={{
            margin: '0 5px',
            padding: '5px 10px',
            backgroundColor: currentPage === num ? '#ffeb3b' : '#102040',
            color: currentPage === num ? '#102040' : '#bbdefb',
            border: 'none',
            borderRadius: '4px',
            fontWeight: currentPage === num ? 'bold' : 'normal',
            boxShadow: currentPage === num ? '0 0 5px #ffeb3b' : 'none',
            transition: '0.2s',
          }}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
