import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Login from "../Components/login";
import cookie from "js-cookie";

function Home() {
  useEffect(() => {
    cookie.remove("accessToken");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>MPR GLOBAL SOLUTIONS</title>
        <meta name="description" content="Project for MPR GLOBAL SOLUTIONS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  );
}
export default Home;
