/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';

import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const MovieItem = ({ info }) => (
  <div className={styles.container}>
    <Head>
      <title>{info.title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <h1 className={styles.title}>
        {info.title}
      </h1>

      <p>
        Nota
        {info.vote_average}
      </p>
      <p>{info.overview}</p>
      <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="400" />
      <Link href="/">Inicio</Link>
    </main>
  </div>
);

export default MovieItem;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`http://localhost:3000/api/movie/${id}`);
  const json = await res.json();
  return {
    props: {
      info: json.info,
    },
  };
}