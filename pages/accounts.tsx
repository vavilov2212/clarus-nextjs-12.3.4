import type { NextPage } from "next";
import Head from "next/head";

import Accounts from "containers/Accounts/Accounts";

import styles from "styles/Home.module.css";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Accounts />
    </div>
  );
};

export default IndexPage;
