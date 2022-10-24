import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h2>SORRY</h2>
      <p>Essa página não existe</p>
      <Link to="/blog/" style={{ textDecoration: 'underline' }}>
        De volta para a home
      </Link>
    </div>
  );
}

export default NotFound;
