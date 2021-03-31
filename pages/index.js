import Head from "next/head";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Top from "../components/Top";

function Home({ films }) {
  return (
    <Layout>
      <Head>
        <title>Ghibli NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Top/>

      <main className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {films.map((film) => (
          <Card year={film.release_date} title={film.title} director={film.director} description={film.description}/>
        ))}
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://ghibliapi.herokuapp.com/films')
  const films = await res.json()

  return {
    props: { films },
  }
}

export default Home