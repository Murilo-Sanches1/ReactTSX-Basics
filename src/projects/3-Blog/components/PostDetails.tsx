import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from '../BlogHome.module.scss';

import { Post } from '../types/Post';

function PostDetails(): JSX.Element {
  const [data, setData] = useState<Post | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  const { id } = useParams();
  useEffect(() => {
    const abortFetch = new AbortController();
    setTimeout(() => {
      (async () => {
        try {
          const res = await fetch(`http://localhost:8000/PostsData/${id}`, {
            signal: abortFetch.signal,
          });
          const resData = await res.json();
          if (!res.ok) {
            setError('Não consegui buscar as informações :(');
            throw Error('Não consegui buscar as informações :(');
          }
          console.log(resData);
          setData(resData);
          setIsPending(false);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          if (err.name === 'AbortError') {
            console.log('fetch abortado');
            console.log(err);
          } else {
            setIsPending(false);
            setError(err.message);
            console.log(err);
          }
        }
      })();
    }, 1000);
    return () => abortFetch.abort();
  }, []);

  const navigate = useNavigate();
  const handlePostDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    fetch(`http://localhost:8000/PostsData/${data?.id}`, {
      method: 'DELETE',
    }).then((res) => {
      navigate('/blog/');
    });
  };

  return (
    <div className={`${styles['blog-details']}`}>
      <h2>Detalhes - {id}</h2>
      {isPending && (
        <div>
          <span>
            Carregando... !!! Estou simulando o tempo de carregamento para 1
            segundo para você conseguir me ver :) !!!
          </span>
        </div>
      )}
      {error && (
        <div>
          <span>{error}</span>
        </div>
      )}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <span>Publicado por: {data.author}</span>
          <p>{data.body}</p>
          <button onClick={handlePostDelete}>Excluir</button>
        </article>
      )}
    </div>
  );
}
export default PostDetails;
