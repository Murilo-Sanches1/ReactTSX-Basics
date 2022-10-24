import React from 'react';

import styles from '../BlogHome.module.scss';

import useFetch from '../functions/useFetch';

import BlogList from './BlogList';

function Home(): JSX.Element {
  const {
    data: posts,
    isPending,
    error,
    setData: setPosts,
  } = useFetch('http://localhost:8000/PostsData');

  const handleDelete = (id: number) => {
    const newPosts = posts?.filter((post) => post.id !== id);
    newPosts && setPosts(newPosts);
    newPosts ||
      alert(
        `Algo deu errado. Aparentemente ao excluir um item, as informações dos posts não existem mais. Impossível deletar um post sem de fato ter um post como alvo, esse erro nunca vai acontecer, mas caso aconteça é algum bug com o state do React. Estou me previnindo porque inicialmente o useState que guarda as informações dos posts é "T | null", como eu disse, não da pra deletar algo que não existe. `
      );
  };

  return (
    <div className={`${styles['home']}`}>
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
      {posts && (
        <BlogList
          postsData={posts}
          postsTitle="Todas as postagens"
          handleDelete={handleDelete}
        />
      )}
      {posts && (
        <BlogList
          postsData={posts.filter((post) => post.author === 'Sanches')}
          postsTitle="Escritos por Sanches"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default Home;
