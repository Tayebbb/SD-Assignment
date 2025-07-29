import React from 'react';
import { useNavigate } from 'react-router-dom';

const SectionPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '40px', textAlign: 'center', background: '#0a1733', minHeight: '100vh', color: 'white' }}>
      <h1 style={{ color: '#ffeb3b', marginBottom: '32px' }}>Section</h1>
      <button
        style={{
          padding: '12px 32px',
          fontSize: '18px',
          background: '#ffeb3b',
          color: '#0a1733',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(10,23,51,0.2)'
        }}
        onClick={() => navigate('/sub-section')}
      >
        Go to Sub-section
      </button>
    </div>
  );
};

export default SectionPage;
