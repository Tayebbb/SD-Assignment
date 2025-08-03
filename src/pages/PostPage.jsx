import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../components/comments';
import Pagination from '../components/pagination';
import ReactionBar from '../components/Reaction';

const commentsData = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  author: [
    'Tayeb',
    'Raisul',
    'Ashfia',
    'Ava',
    'Fahim',
    'Rakib'
  ][i],
  date: [
    '10 February 2025',
    '11 February 2025',
    '12 February 2025',
    '13 February 2025',
    '14 February 2025',
    '15 February 2025'
  ][i],
  authorId: i + 1,
  content: [
    'I love cats!',
    'I think this post is very informative.',
    'I have a question about the topic.',
    'I enjoyed reading this and learned a lot.',
    'I want to share my own experience.',
    'Thanks for the great post!'
  ][i]
}));

const PostPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 2;

  const start = (currentPage - 1) * commentsPerPage;
  const currentComments = commentsData.slice(start, start + commentsPerPage);

  const postAuthor = { name: 'Kuddus', authorId: 'poster', date: '7 January 2025' };
  const postAuthorColors = {
    poster: '#90caf9',
  };
  const postProfileColor = postAuthorColors[postAuthor.authorId] || '#bdbdbd';
  return (
    <div className="full-height bg-dark responsive-padding">
      <div className="container">
        <div className="card fade-in">
          <nav className="nav">
            <span className="text-white">
              <Link to="/" className="nav-link">Section</Link>
              <span className="mx-1">&gt;</span>
              <Link to="/sub-section" className="nav-link">Sub-section</Link>
            </span>
          </nav>
          
          <h2 className="text-primary">Lorem Ipsum Dolor...</h2>
          <p>Lorem Ipsum Dolor content...</p>

          <div className="responsive-margin" style={{ 
            height: 'clamp(120px, 20vw, 200px)', 
            background: '#7d8eafff', 
            borderRadius: '8px' 
          }} />

          <div className="flex gap-2 responsive-margin" style={{ alignItems: 'center' }}>
            <div className="avatar avatar-sm" style={{ background: postProfileColor }}>
              {postAuthor.name[0]}
            </div>
            <div>
              <Link to={`/author/${postAuthor.authorId}`} className="nav-link text-primary">
                {postAuthor.name}
              </Link>
              <div><small className="text-secondary">{postAuthor.date}</small></div>
            </div>
          </div>

          <p>Lorem Ipsum Dolor full post content here...</p>

          <ReactionBar />

          <hr style={{ margin: '1.5rem 0', borderColor: '#bbdefb' }} />

          <h3 className="text-primary">Comments</h3>
          <input 
            type="text" 
            placeholder="Kicchu Bolen....." 
            className="form-input"
          />
          
          <div className="responsive-margin">
            {currentComments.map(comment => (
              <Comment key={comment.id} data={comment} />
            ))}
          </div>

          <Pagination
            total={commentsData.length}
            perPage={commentsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
