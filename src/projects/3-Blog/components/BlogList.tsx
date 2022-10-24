import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../BlogHome.module.scss';

import { Post } from '../types/Post';

type Props = {
  postsData: Post[];
  postsTitle: string;
  handleDelete(id: number): void;
};

function BlogList(props: Props): JSX.Element {
  return (
    <div className={`${styles['blog-list']}`}>
      <h2>{props.postsTitle}</h2>
      {props.postsData.map((post) => (
        <div className={`${styles['blog-preview']}`} key={post.id}>
          <Link to={`/blog/post/${post.id}`}>
            <h2>{post.title}</h2>
            <span>Escrito por: {post.author}</span>
            <p>{post.body}</p>
          </Link>
          <button onClick={() => props.handleDelete(post.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
