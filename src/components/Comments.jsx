import React from 'react';
import { Link } from 'react-router-dom';
import ReactionBar from './Reaction';

const Comment = ({ data }) => {
  return (
    <div className="card flex gap-2 transition-all" style={{ alignItems: 'flex-start' }}>
      <div className="avatar avatar-sm" style={{ background: getProfileColor(data.authorId) }}>
        {data.author[0]}
      </div>
      <div style={{ flex: 1 }}>
        <div className="flex flex-wrap gap-1" style={{ alignItems: 'baseline' }}>
          <strong>
            <Link to={`/author/${data.authorId}`} className="nav-link text-primary">
              {data.author}
            </Link>
          </strong>
          <span className="text-muted">-</span>
          <small className="text-secondary">{data.date}</small>
        </div>
        <p style={{ margin: '0.5rem 0' }}>{data.content}</p>
        <div className="flex gap-3 responsive-margin" style={{ alignItems: 'center' }}>
          <button className="btn-link text-primary">Report</button>
          <button className="btn-link text-secondary">Reply</button>
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
