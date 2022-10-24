import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../BlogHome.module.scss';

function Navbar(): JSX.Element {
  return (
    <nav className={`${styles['navbar']}`}>
      <h1>ReactJS Blog</h1>
      <div className={`${styles['links']}`}>
        <Link to="/blog/">Home</Link>
        <Link to="/blog/criar-post">Nova postagem</Link>
      </div>
    </nav>
  );
}

export default Navbar;
