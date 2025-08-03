import React from 'react';
import { useParams } from 'react-router-dom';

const AuthorProfilePage = () => {
  const { authorId } = useParams();
  const authorNames = {
    1: 'Tayeb',
    2: 'Raisul',
    3: 'Ashfia',
    4: 'Ava',
    5: 'Fahim',
    6: 'Rakib',
    poster: 'Kuddus',
  };
  const name = authorNames[authorId] || 'Unknown';
  // Use a unique solid color for each authorId
  const authorColors = {
    1: '#e57373', 
    2: '#64b5f6', 
    3: '#81c784',
    4: '#ffd54f', 
    5: '#ba68c8', 
    6: '#ff8a65', 
    poster: '#90caf9', 
  };
  const profileColor = authorColors[authorId] || '#bdbdbd';

  return (
    <div className="full-height bg-dark flex flex-center responsive-padding">
      <div className="container">
        <div className="card mobile-center fade-in" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div className="avatar avatar-lg mx-auto responsive-margin" style={{ background: profileColor }}>
            {name[0]}
          </div>
          <h2 className="text-primary">Author Profile Page</h2>
          <p className="text-secondary">Author ID: {authorId}</p>
          <p>Name: <span className="text-primary">{name}</span></p>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfilePage;
