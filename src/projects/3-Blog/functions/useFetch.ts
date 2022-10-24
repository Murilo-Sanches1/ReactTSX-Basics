import { useEffect, useState } from 'react';

import { Post } from '../types/Post';

const useFetch = (url: string) => {
  const [data, setData] = useState<Post[] | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const abortFetch = new AbortController();
    setTimeout(() => {
      (async () => {
        try {
          const res = await fetch(url, { signal: abortFetch.signal });
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
  }, [url]);

  return { data, isPending, error, setData };
};

export default useFetch;
