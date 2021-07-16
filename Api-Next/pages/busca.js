/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Busca.module.css';

const Home = ({ list }) => {
  const [searchText, setSearchText] = useState('');
  const [movieList, setMovieList] = useState([]);

  const handleSearch = async () => {
    if (searchText !== '') {
      const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`);
      const json = await result.json();
      setMovieList(json.list);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Pesquisar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Pesquisar
        </h1>
        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={handleSearch}>buscar</button>
      </header>
      <main className={styles.main}>
        <hr />

        <ul>
          {movieList.map((item) => (
            <li>
              <a href={`/movie/${item.id}`}>
                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" />
                <h3>{item.title}</h3>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <footer className={styles.footer}>
        <Link href="/">Inicio</Link>
      </footer>
    </div>
  );
};

export default Home;