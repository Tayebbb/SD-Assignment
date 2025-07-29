import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostPage from './pages/postpage.jsx';
import AuthorProfilePage from './pages/AuthorProfilePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PostPage />} />
      <Route path="/author/:authorId" element={<AuthorProfilePage />} />
    </Routes>
  );
};

export default App;
