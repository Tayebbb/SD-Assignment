import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import PostPage from './pages/postpage.jsx';
import AuthorProfilePage from './pages/AuthorProfilePage';
import SectionPage from './pages/SectionPage.jsx';

const App = () => {
  return (
    <div className="full-height bg-dark">
      <HashRouter>
        <Routes>
          <Route path="/" element={<SectionPage />} />
          <Route path="/sub-section" element={<PostPage />} />
          <Route path="/author/:authorId" element={<AuthorProfilePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
