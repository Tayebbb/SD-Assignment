import React from 'react';
import { useParams } from 'react-router-dom';

const AuthorProfilePage = () => {
  const { authorId } = useParams();
  const authorNames = {
    1: 'Alice',
    2: 'Bob',
    3: 'Charlie',
    4: 'Diana',
    5: 'Eve',
    6: 'Frank',
    poster: 'Grace',
  };
  const name = authorNames[authorId] || 'Unknown';
  // Use a unique solid color for each authorId
  const authorColors = {
    1: '#e57373', // Alice
    2: '#64b5f6', // Bob
    3: '#81c784', // Charlie
    4: '#ffd54f', // Diana
    5: '#ba68c8', // Eve
    6: '#ff8a65', // Frank
    poster: '#90caf9', // Grace
  };
  const profileColor = authorColors[authorId] || '#bdbdbd';

  return (
    <div style={{ padding: '20px', textAlign: 'center', background: '#0a1733', borderRadius: '12px', color: 'white', maxWidth: '500px', margin: '40px auto', boxShadow: '0 2px 12px rgba(10,23,51,0.2)' }}>
      <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: profileColor, border: '3px solid #ffeb3b', margin: '0 auto 16px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', color: 'white', fontWeight: 'bold' }}>
        {name[0]}
      </div>
      <h2 style={{ color: '#ffeb3b' }}>Author Profile Page</h2>
      <p style={{ color: '#bbdefb' }}>Author ID: {authorId}</p>
      <p>Name: <span style={{ color: '#ffeb3b' }}>{name}</span></p>
    </div>
  );
};

export default AuthorProfilePage;
