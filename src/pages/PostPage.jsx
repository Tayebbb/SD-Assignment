import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../components/Comments';
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
    <div style={{ padding: '20px', maxWidth: '700px', margin: 'auto', background: '#0a1733', borderRadius: '12px', color: 'white', boxShadow: '0 2px 12px rgba(10,23,51,0.2)' }}>
      <nav style={{ borderBottom: '1px solid #bbb', marginBottom: '12px', paddingBottom: '4px', background: 'transparent' }}>
        <span style={{ color: 'white', fontSize: '15px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'underline', marginRight: '8px' }}>Section</Link>
          {'>'}
          <Link to="/sub-section" style={{ color: 'white', textDecoration: 'underline', marginLeft: '8px' }}>Sub-section</Link>
        </span>
      </nav>
      <h2 style={{ color: '#ffeb3b' }}>Lorem Ipsum Dolor...</h2>
      <p>Lorem Ipsum Dolor content...</p>

      <div style={{ height: '150px', background: '#102040', margin: '20px 0', borderRadius: '8px' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: postProfileColor, border: '2px solid #ffeb3b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: 'white', fontWeight: 'bold' }}>
          {postAuthor.name[0]}
        </div>
        <div>
          <Link to={`/author/${postAuthor.authorId}`} style={{ color: '#ffeb3b', textDecoration: 'underline', fontWeight: 'bold' }}>
            {postAuthor.name}
          </Link>
          <div><small style={{ color: '#bbdefb' }}>{postAuthor.date}</small></div>
        </div>
      </div>

      <p>Lorem Ipsum Dolor full post content here...</p>

      <ReactionBar />

      <hr style={{ margin: '20px 0', borderColor: '#bbdefb' }} />

      <h3 style={{ color: '#ffeb3b' }}>Comments</h3>
      <input type="text" placeholder="Write a comment..." style={{ width: '100%', marginBottom: '10px', borderRadius: '4px', border: '1px solid #bbdefb', padding: '8px', background: '#1a2947', color: '#bbdefb' }} />
      
      {currentComments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}

      <Pagination
        total={commentsData.length}
        perPage={commentsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PostPage;
