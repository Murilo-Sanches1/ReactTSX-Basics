import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../BlogHome.module.scss';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Murilo');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, body, author };
    console.log(blog);
    console.log(JSON.stringify(blog));
    fetch('http://localhost:8000/PostsData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then((res) => {
      console.log('post criado');
      setIsPending(false);
      navigate('/blog/');
    });
  };

  return (
    <div className={`${styles['create']}`}>
      <h2>Adicionar nova postagem</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <label htmlFor="">Conteúdo</label>
        <textarea
          name=""
          id=""
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          required
        ></textarea>
        <label htmlFor="">Autor</label>
        <select
          name=""
          id=""
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          required
        >
          <option value="Murilo">Murilo</option>
          <option value="Sanches">Sanches</option>
        </select>
        {!isPending && <button>Adicionar</button>}
        {isPending && <button disabled>Adicionando...</button>}
        <div className={`${styles['create']}`}>
          <p>{title}</p>
          <textarea value={body} disabled></textarea>
          <p>{author}</p>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
