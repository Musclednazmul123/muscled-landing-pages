import type { NextPage } from "next";
import Head from "next/head";
import LandingPage from "../components/landingPage/LandingPage";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta property="og:image" content="https://example.com/ogp.jpg" />
        <meta
          property="og:image:secure_url"
          content="https://secure.example.com/ogp.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:image:alt"
          content="A shiny red apple with a bite taken out"
        />
        <title>
          Ecommerce PPC management services | Ecommerce PPC management services
        </title>
      </Head>
      <LandingPage />
    </>
  );
};

export default Home;
