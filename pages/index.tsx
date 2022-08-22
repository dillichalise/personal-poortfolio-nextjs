import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={"/favicon.ico"} />
        <link
          href={
            "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
          }
          rel="stylesheet"
        />
        <link
          href={
            "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          }
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <Footer />
    </div>
  );
};

export default Home;
