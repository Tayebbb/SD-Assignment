import React from 'react';
import { Link } from 'react-router-dom';
import ReactionBar from './Reaction';

const Comment = ({ data }) => {
  return (
    <div style={{ background: '#102040', border: '1px solid #0a1733', padding: '10px', marginBottom: '10px', borderRadius: '8px', color: 'white', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
      {/* Solid color profile for each author */}
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: getProfileColor(data.authorId), border: '2px solid #ffeb3b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: 'white', fontWeight: 'bold' }}>
        {data.author[0]}
      </div>
      <div style={{ flex: 1 }}>
        <strong>
          <Link to={`/author/${data.authorId}`} style={{ textDecoration: 'none', color: '#ffeb3b' }}>
            {data.author}
          </Link>
        </strong> - <small style={{ color: '#bbdefb' }}>{data.date}</small>
        <p>{data.content}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '4px' }}>
          <button style={{ background: 'none', border: 'none', color: '#ffeb3b', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', padding: 0 }}>Report</button>
          <button style={{ background: 'none', border: 'none', color: '#bbdefb', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', padding: 0 }}>Reply</button>
        </div>
        <ReactionBar />
      </div>
    </div>
  );
}


function getProfileColor(authorId) {
  const colors = {
    1: '#e57373',
    2: '#64b5f6',
    3: '#81c784',
    4: '#ffd54f',
    5: '#ba68c8',
    6: '#ff8a65',
    poster: '#90caf9',
  };
  return colors[authorId] || '#bdbdbd';
}

export default Comment;
