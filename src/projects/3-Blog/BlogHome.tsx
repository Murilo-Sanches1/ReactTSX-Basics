import React from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from './BlogHome.module.scss';

import Navbar from './components/Navbar';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import PostDetails from './components/PostDetails';
import NotFound from './components/NotFound';

function BlogHome(): JSX.Element {
  return (
    <div className={`${styles['blog']}`}>
      {/* <Router> */}
      <Navbar />
      <div className={`${styles['content']}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar-post" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      {/* </Router> */}
    </div>
  );
}

export default BlogHome;
