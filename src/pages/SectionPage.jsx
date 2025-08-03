import React from 'react';
import { useNavigate } from 'react-router-dom';

const SectionPage = () => {
  const navigate = useNavigate();
  return (
    <div className="full-height bg-dark flex flex-column flex-center responsive-padding fade-in">
      <div className="container mobile-center">
        <h1 className="text-primary">Section</h1>
        <button
          className="btn btn-primary transition-all"
          onClick={() => navigate('/sub-section')}
        >
          Go to Sub-section
        </button>
      </div>
    </div>
  );
};

export default SectionPage;
